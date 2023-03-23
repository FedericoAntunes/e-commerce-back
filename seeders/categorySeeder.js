const { Category } = require("../models");

const categories = [
  {
    name: "Meat",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/79d10e08-7b36-4cfb-ad82-83857f001212.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Ice cream",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/839315fd-9b35-4fb8-b3ae-7824977ec07a.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Hamburger",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/281ee519-3ccf-4b8b-aac9-a6d005538a5e.png?e=webp&q=10&d=10x10",
  },
];

module.exports = async () => {
  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categories.");
};
