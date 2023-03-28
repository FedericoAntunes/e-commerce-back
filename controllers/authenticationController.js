const jwt = require("jsonwebtoken");
const { User } = require("../models");

async function token(req, res) {
  try {
    const user = await User.findAll({ where: { email: req.body.email } });
    const password = req.body.password;
    const match = await user.isValidPassword(password);
    if (match) {
      const token = jwt.sign({ id: user.id }, process.env.SESSION_SECRET);
      return res.json({
        token: token,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
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

module.exports = {
  token,
};
