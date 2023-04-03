const { Admin } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const admins = [
    {
      firstname: "Admin",
      lastname: "Admin",
      username: "firstAdmin",
      email: "admin@hotmail.com",
      password: await bcrypt.hash("123", 8),
      address: { location: null, tel: null },
      avatar: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
    },
  ];
  await Admin.bulkCreate(admins);
  console.log("[Database] Se corrió el seeder de Admins.");
};
