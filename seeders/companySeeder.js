const { Company } = require("../models");
const slugify = require("slugify");

function sluggy(name) {
  return slugify(name, {
    replacement: "-",
    trim: true,
    lower: true,
    strict: true,
  });
}
const companies = [
  {
    name: "La Pasiva",
    slug: sluggy("La Pasiva"),
    logo: "https://images.deliveryhero.io/image/pedidosya/restaurants/la-pasiva-logo.jpg?quality=70&width=100",
    background:
      "https://images.deliveryhero.io/image/pedidosya/header-backgrounds/mobile/pizza-4.jpg?quality=70&width=550&webp=1",
  },
  {
    name: "La Cigale",
    slug: sluggy("La Cigale"),
    logo: "https://images.deliveryhero.io/image/pedidosya/restaurants/la-cigale-nuevo-centro.jpg?quality=70&width=100",
    background:
      "https://images.deliveryhero.io/image/pedidosya/profile-headers/la-cigale-pocitos-custom-header.jpg?quality=70&width=1280&webp=1",
  },
  {
    name: "Mc Donald's",
    slug: sluggy("Mc Donald's"),
    logo: "https://images.deliveryhero.io/image/pedidosya/restaurants/mcdonald-s-18-y-ejido-logo.jpg?quality=70&width=100&webp=1",
    background:
      "https://images.deliveryhero.io/image/pedidosya/profile-headers/mc-donalds-uruguay-header-custom-2020.jpg?quality=70&width=1440&webp=1",
  },
];

module.exports = async () => {
  await Company.bulkCreate(companies);
  console.log("[Database] Se corrió el seeder de Companies.");
};
