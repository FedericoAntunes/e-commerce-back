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
    name: "Hamburgers",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/281ee519-3ccf-4b8b-aac9-a6d005538a5e.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Pizzas",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/4958f43e-6094-4125-9f00-28587c1ffc22.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Sushi",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/2050f663-760f-443e-be79-40475a38bb33.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Pattys",
    image: "https://images.rappi.com.uy/rests_taxonomy/empanadas.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Healthy",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/44534a35-8646-4611-90fe-99923f9e341c.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Milanesas",
    image: "https://images.rappi.com.uy/rests_taxonomy/milanesa.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Arabic",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/99b46507-eb84-483a-9bed-f7cb96287c43.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Vegetarian",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/c8096818-932a-47a5-a85f-f74585fc90a8.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Fast Food",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/ba7e7bd9-7bed-4985-a445-7878fc79f483.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Bakery",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/8da4ad8d-d53c-4834-8a23-a019a3965175.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Chivitos",
    image: "https://images.rappi.com.uy/rests_taxonomy/chivito.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Hot Dogs",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/b4941fa9-3931-4b03-a54b-e8c2e6146bcd.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Sandwichs",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/086a5df1-6d8d-477c-b017-bcb456bef151.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Breakfast",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/c0fa0b47-93a6-4bf5-9d3f-67526d5fb2bd.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Asian",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/869c5589-d105-41fa-97ab-4d5929e6c281.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Desserts",
    image: "https://images.rappi.com.uy/rests_taxonomy/chivito.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Italian",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/8b61abf1-8ba7-46c3-b939-089a97438d58.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Uruguayan",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/uruguaya_-empanadas-uruguayas.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Café",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/8f84dad8-a7c3-4f51-ac08-fa7338c015df.png?e=webp&q=10&d=10x10",
  },
  {
    name: "International",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/784a8a4a-816c-4997-ab18-85f6ae363b18.png?e=webp&q=10&d=10x10",
  },
  {
    name: "Seafood",
    image:
      "https://images.rappi.com.uy/rests_taxonomy/dd2374ab-252a-4a00-99e9-ffc853d37afb.png?e=webp&q=10&d=10x10",
  },
];

module.exports = async () => {
  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categories.");
};
