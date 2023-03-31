const jwt = require("jsonwebtoken");
const { User, Admin } = require("../models");

async function token(req, res) {
  try {
    const user = await User.findOne({ where: { email: req.body.email, reg_mode: "email" } });
    const password = req.body.password;
    const match = user.id && (await user.isValidPassword(password));
    if (match) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      return res.json({
        token: token,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        id: user.id,
        avatar: user.avatar,
      });
    } else {
      res.status(400).json({ error: "No valid User" });
    }
  } catch (error) {
    console.log("Could not find User");
    console.log(error);
    res.status(400).json({ error: "No valid User" });
  }
}

async function tokenAdmin(req, res) {
  try {
    const admin = await Admin.findOne({ where: { email: req.body.email } });
    const password = req.body.password;
    const match = await admin.isValidPassword(password);
    if (match) {
      const token = jwt.sign({ id: admin.id }, process.env.JWT_ADMIN_SECRET);
      return res.json({
        token: token,
        email: admin.email,
        firstname: admin.firstname,
        lastname: admin.lastname,
        username: admin.username,
        id: admin.id,
        avatar: admin.avatar,
      });
    } else {
      res.status(400).json({ error: "No valid Admin" });
    }
  } catch (error) {
    console.log("Could not find Admin");
    console.log(error);
    res.status(400).json({ error: "No valid Admin" });
  }
}

async function googleAuth(req, res) {
  const { email, firstname, lastname, avatar } = req.body;
  const users = await User.findAll();
  const userExists = users.find((u) => u.email === email);
  if (userExists && userExists.reg_mode !== "google") {
    res.json("User already exist, please login with email and password.");
  } else if (userExists) {
    const token = jwt.sign({ id: userExists.id }, process.env.JWT_SECRET);
    return res.json({
      token: token,
      email: userExists.email,
      firstname: userExists.firstname,
      lastname: userExists.lastname,
      username: userExists.username,
      id: userExists.id,
      avatar: userExists.avatar,
    });
  } else {
    const user = await User.create({
      firstname,
      lastname,
      email,
      username: email,
      avatar,
      password: "1234",
      reg_mode: "google",
    });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    return res.json({
      token: token,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      id: user.id,
      avatar: user.avatar,
    });
  }
}

module.exports = {
  token,
  tokenAdmin,
  googleAuth,
};
