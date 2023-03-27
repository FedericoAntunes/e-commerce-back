/*const jwt = require("jsonwebtoken");
const { User } = require("../models");

async function token(req, res) {
  try {
    const user = await User.findAll({ where: { email: req.body.email } });
    const password = req.body.password;
    const match = await user.comparePassword(password);
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
      res.status(400).json({ error: "Usuario no válido" });
    }
  } catch (error) {
    console.log("No se encontró usuario");
    console.log(error);
    res.status(400).json({ error: "Usuario no válido" });
  }
}

module.exports = {
  token,
};*/
