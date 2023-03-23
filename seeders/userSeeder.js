const { User } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const users = [
    {
      firstname: "Seba",
      lastname: "Yaben",
      email: "seba@hotmail.com",
      password: await bcrypt.hash("1234", 8),
      address: { location: "Villa Dolores", tel: "9999999" },
      avatar: null,
    },
    {
      firstname: "Cristiano",
      lastname: "Ronaldo",
      email: "cris@hotmail.com",
      password: await bcrypt.hash("1234", 8),
      address: { location: "Peñarol", tel: "555222333" },
      avatar: "https://www.fichajes.com/build/images/player-covers/cristiano-ronaldo.352c95f5.jpg",
    },
  ];
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
