const { User } = require("../models");

const users = [
  {
    firstname: "Seba",
    lastname: "Yaben",
    email: "seba@hotmail.com",
    password: "1234",
    address: "Villa Dolores",
    avatar: null,
  },
];

module.exports = async () => {
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
