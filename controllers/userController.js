const User = require("../models/User");
const formidable = require("formidable");

// Display a listing of the resource.
async function index(req, res) {
  const users = await User.findAll({ order: [["createdAt", "DESC"]] });
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
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
    multiples: true,
  });
  form.parse(req, async (err, fields, files) => {
    const users = await User.findAll();
    if (
      fields.username === "" ||
      fields.email === "" ||
      fields.password === "" ||
      fields.firstname === "" ||
      fields.password === ""
    ) {
      return res.json("Fill all the fields.");
    } else {
      const unavailableUsername = users.some((u) => u.username === fields.username);
      const unavailableUserEmail = users.some((u) => u.email === fields.email);

      if (unavailableUserEmail) return res.json("User email already exist.");

      if (unavailableUsername) return res.json("Username already exist.");

      if (!unavailableUserEmail && !unavailableUsername) {
        const avatar = files.avatar ? `/img/${files.avatar.newFilename}` : "/img/default.jpg";
        await User.create({
          firstname: fields.firstname,
          lastname: fields.lastname,
          email: fields.email,
          username: fields.username,
          avatar,
          password: fields.password,
          reg_mode: "email",
        });
        return res.status(201).json("User stored");
      }
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
    return user.id !== Number(userId);
  });

  const form = formidable({
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
    multiples: true,
  });

  form.parse(req, async (err, fields, files) => {
    const unavailableUsername = filteredUsers.some((u) => u.username === fields.username);
    const unavailableUserEmail = filteredUsers.some((u) => u.email === fields.email);

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
