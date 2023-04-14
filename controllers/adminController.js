const Admin = require("../models/Admin");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Display a listing of the resource.
async function index(req, res) {
  const admins = await Admin.findAll({ order: [["updatedAt", "DESC"]] });
  return res.json(admins);
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    keepExtensions: true,
    multiples: true,
  });

  form.parse(req, async (err, fields, files) => {
    const admins = await Admin.findAll();
    if (
      fields.firstname === "" ||
      fields.lastname === "" ||
      fields.username === "" ||
      fields.email === "" ||
      fields.password === ""
    ) {
      return res.json("Fill all the fields.");
    } else {
      const unavailableAdminEmail = admins.some((u) => u.email === fields.email);
      const unavailableAdminUsername = admins.some((u) => u.username === fields.username);

      if (files.avatar) {
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

        if (!unavailableAdminEmail && !unavailableAdminUsername) {
          await Admin.create({
            firstname: fields.firstname,
            lastname: fields.lastname,
            email: fields.email,
            username: fields.username,
            avatar: data.path,
            password: fields.password,
          });
          return res.status(201).json("User stored");
        }
      }

      if (unavailableAdminEmail) return res.json("Admin email already exist.");

      if (unavailableAdminUsername) return res.json("Admin username already exist.");

      if (!unavailableAdminEmail && !unavailableAdminUsername) {
        await Admin.create({
          firstname: fields.firstname,
          lastname: fields.lastname,
          email: fields.email,
          username: fields.username,
          avatar: "default.jpg",
          password: fields.password,
        });
        return res.status(201).json("Admin created.");
      }
    }
  });
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

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
