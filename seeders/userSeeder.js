const { User } = require("../models");

const users = [
  {
    firstname: "Seba",
    lastname: "Yaben",
    email: "seba@hotmail.com",
    password: "1234",
    address: { location: "Villa Dolores", tel: "9999999" },
    avatar: null,
  },
  {
    firstname: "Cristiano",
    lastname: "Ronaldo",
    email: "cris@hotmail.com",
    password: "1234",
    address: { location: "Peñarol", tel: "555222333" },
    avatar: "https://www.fichajes.com/build/images/player-covers/cristiano-ronaldo.352c95f5.jpg",
  },
];

module.exports = async () => {
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
