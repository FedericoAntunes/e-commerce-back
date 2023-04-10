const { User } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const users = [
    {
      firstname: "user",
      lastname: "user",
      username: "user",
      email: "user@hotmail.com",
      password: await bcrypt.hash("123", 8),
      address: { location: "Villa Dolores", tel: "9999999" },
      avatar: "/img/default.jpg",
      reg_mode: "email",
    },
  ];
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
