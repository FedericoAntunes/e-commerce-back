const { Admin } = require("../models");

const admins = [
  {
    firstname: "Admin",
    lastname: "Admin",
    email: "admin@hotmail.com",
    password: "1234",
    address: { location: null, tel: null },
    avatar: null,
  },
];

module.exports = async () => {
  await Admin.bulkCreate(admins);
  console.log("[Database] Se corrió el seeder de Admins.");
};
