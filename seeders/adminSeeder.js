const { Admin } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const admins = [
    {
      firstname: "Admin",
      lastname: "Admin",
      email: "admin@hotmail.com",
      password: await bcrypt.hash("1234", 8),
      address: { location: null, tel: null },
      avatar: null,
    },
  ];
  await Admin.bulkCreate(admins);
  console.log("[Database] Se corrió el seeder de Admins.");
};
