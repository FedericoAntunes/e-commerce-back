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
      avatar: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
      reg_mode: "email",
    },
    {
      firstname: "Seba",
      lastname: "Yaben",
      username: "sebay",
      email: "seba@hotmail.com",
      password: await bcrypt.hash("123", 8),
      address: { location: "Villa Dolores", tel: "9999999" },
      avatar: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
      reg_mode: "email",
    },
    {
      firstname: "Cristiano",
      lastname: "Ronaldo",
      username: "cristianito",
      email: "cris@hotmail.com",
      password: await bcrypt.hash("123", 8),
      address: { location: "Peñarol", tel: "555222333" },
      avatar: "https://www.fichajes.com/build/images/player-covers/cristiano-ronaldo.352c95f5.jpg",
      reg_mode: "email",
    },
  ];
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
