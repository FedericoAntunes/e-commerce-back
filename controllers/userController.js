const User = require("../models/User");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Display a listing of the resource.
async function index(req, res) {
  const users = await User.findAll({ order: [["updatedAt", "DESC"]] });
  return res.json(users);
}

// Display the specified resource.
async function show(req, res) {
  const userId = req.params.id;
  const user = await User.findOne({ where: { id: userId } });
  return res.json(user);
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    keepExtensions: true,
    multiples: true,
  });
  form.parse(req, async (err, fields, files) => {
    try {
      if (err) {
        console.error(err);
        return res.json("An error occurred while processing the request.");
      }

      const users = await User.findAll();

      if (
        fields.username === "" ||
        fields.email === "" ||
        fields.lastname === "" ||
        fields.firstname === "" ||
        fields.password === ""
      ) {
        return res.json("Fill all the fields.");
      }

      const unavailableUsername = users.some((u) => u.username === fields.username);
      const unavailableUserEmail = users.some((u) => u.email === fields.email);

      if (!files.avatar || !files.avatar.filepath) {
        return res.json("No avatar file found.");
      }

      console.log(files.avatar.filepath);
      const ext = path.extname(files.avatar.filepath);
      const newFileName = `image_${Date.now()}${ext}`;
      const { data, error } = await supabase.storage
        .from("no-hunger-bucket")
        .upload(newFileName, fs.createReadStream(files.avatar.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.avatar.mimetype,
          duplex: "half",
        });

      console.log(data);
      console.log(error);

      if (unavailableUserEmail) return res.json("User email already exists.");

      if (unavailableUsername) return res.json("Username already exists.");

      if (!unavailableUserEmail && !unavailableUsername) {
        await User.create({
          firstname: fields.firstname,
          lastname: fields.lastname,
          email: fields.email,
          username: fields.username,
          avatar: data.path,
          password: fields.password,
          reg_mode: "email",
        });
        return res.status(201).json("User stored");
      }
    } catch (error) {
      console.error(error);
      return res.json("An error occurred while processing the request.");
    }
  });
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  const users = await User.findAll();

  const userId = req.params.id;

  const filteredUsers = users.filter((user) => {
    return Number(user.id) !== Number(userId);
  });

  const form = formidable({
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
    multiples: true,
  });

  form.parse(req, async (err, fields, files) => {
    const unavailableUsername = filteredUsers.some((u) => u.username === fields.username);
    const unavailableUserEmail = filteredUsers.some((u) => u.email === fields.email);

    if (fields.username === "" || fields.lastname === "" || fields.firstname === "") {
      return res.json("Fill all the fields.");
    }

    if (unavailableUsername) {
      return res.json("Unavailable username");
    } else if (unavailableUserEmail) {
      return res.json("Unavailable user email");
    } else {
      const avatar = files.avatar && `/img/${files.avatar.newFilename}`;

      const user = await User.findByPk(userId);

      const userUpdated = {
        firstname: fields.firstname,
        lastname: fields.lastname,
        username: fields.username,
        avatar,
      };

      if (!avatar) delete userUpdated.avatar;

      await user.update(userUpdated);

      return res.status(201).json("User updated");
    }
  });
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const userId = req.params.id;
  await User.destroy({
    where: {
      id: userId,
    },
  });

  return res.json("User deleted");
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
