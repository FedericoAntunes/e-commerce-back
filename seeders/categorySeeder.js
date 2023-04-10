const { Category } = require("../models");
const slugify = require("slugify");

function sluggy(name) {
  return slugify(name, {
    replacement: "-",
    trim: true,
    lower: true,
    strict: true,
  });
}

const categories = [
  {
    name: "Fast Food",
    slug: sluggy("Fast Food"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/FastFood_CuisineCarousel@2x.png",
  },
  {
    name: "Breakfast & Brunch",
    slug: sluggy("Breakfast & Brunch"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Breakfast_CuisineCarousel@2x.png",
  },
  {
    name: "American Food",
    slug: sluggy("American Food"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/American_CuisineCarousel@2x.png",
  },
  {
    name: "Mexican Food",
    slug: sluggy("Mexican Food"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Mexican_CuisineCarousel@2x.png",
  },
  {
    name: "Chinese Food",
    slug: sluggy("Chinese Food"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Chinese_CuisineCarousel@2x.png",
  },
  {
    name: "Japanese Food",
    slug: sluggy("Japanese Food"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Japanese_CuisineCarousel@2x.png",
  },
  {
    name: "Italian Food",
    slug: sluggy("Italian Food"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Italian_CuisineCarousel@2x.png",
  },
  {
    name: "Healthy Food",
    slug: sluggy("Healthy Food"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Healthy_CuisineCarousel@2x.png",
  },
  {
    name: "Asian Food",
    slug: sluggy("Asian Food"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Asian_CuisineCarousel@2x.png",
  },
  {
    name: "Indian Food",
    slug: sluggy("Indian Food"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Indian_CuisineCarousel@2x.png",
  },
  {
    name: "Thai Food",
    slug: sluggy("Thai Food"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Thai_CuisineCarousel@2x.png",
  },
  {
    name: "Drinks",
    slug: sluggy("Drinks"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Alcohol_CuisineCarousel@2x.png",
  },
  {
    name: "Bakery",
    slug: sluggy("Bakery"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Bakery_CuisineCarousel@2x.png",
  },
  {
    name: "Comfort Food",
    slug: sluggy("Comfort Food"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/ComfortFood_CuisineCarousel@2x.png",
  },
  {
    name: "Middle Eastern Food",
    slug: sluggy("Middle Eastern Food"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/MiddleEastern_CuisineCarousel@2x.png",
  },
  {
    name: "Pizza",
    slug: sluggy("Pizza"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Pizza_CuisineCarousel@2x.png",
  },
  {
    name: "Korean Food",
    slug: sluggy("Korean Food"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Korean_CuisineCarousel@2x.png",
  },
  {
    name: "Deli",
    slug: sluggy("Deli"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Deli_CuisineCarousel@2x.png",
  },
  {
    name: "Desserts",
    slug: sluggy("Desserts"),
    image:
      "https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Dessert_CuisineCarousel@2x.png",
  },
  {
    name: "Vegan Food",
    slug: sluggy("Vegan Food"),
    image: "https://d2sctaxb9mgnfy.cloudfront.net/Vegan_CuisineCarousel@2x.png",
  },
  {
    name: "Sushi",
    slug: sluggy("Sushi"),
    image: "https://d2sctaxb9mgnfy.cloudfront.net/Sushi_CuisineCarousel@2x.png",
  },
];

module.exports = async () => {
  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categories.");
};
