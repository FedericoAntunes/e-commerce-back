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
    logo: "https://images.rappi.com.uy/restaurants_logo/lapasiva-centro-1581453375579.png?e=webp&q=80&d=200x200",
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
    logo: "https://images.rappi.com.uy/restaurants_logo/111919-1543425311.png?e=webp&d=100x100&q=100",
    background:
      "https://images.deliveryhero.io/image/pedidosya/profile-headers/mc-donalds-uruguay-header-custom-2020.jpg?quality=70&width=1440&webp=1",
  },
  {
    name: "Burger King",
    slug: sluggy("Burger King"),
    logo: "https://images.rappi.com.uy/restaurants_logo/nuevo-logo-bk-1610117467515.png?e=webp&d=5x5&q=100",
    background:
      "https://images.deliveryhero.io/image/pedidosya/profile-headers/burger-king-custom-header.jpg?quality=70&width=768&webp=1",
  },
  {
    name: "Medialunas Calentitas",
    slug: sluggy("Medialunas Calentitas"),
    logo: "https://images.rappi.com.uy/restaurants_logo/mediaslunascalentitas-logo-1-1567609569925.png?e=webp&d=100x100&q=100",
    background:
      "https://images.rappi.com.uy/restaurants_background/uymedialunascalentitass-1666634475880.jpg?e=webp&d=700x100&q=100",
  },
  {
    name: "Avenida Bar",
    slug: sluggy("Avenida Bar"),
    logo: "https://images.rappi.com.uy/restaurants_logo/avenidabar-1568314996192.png?e=webp&d=100x100&q=100",
    background:
      "https://images.rappi.com.uy/restaurants_background/uyavenidabar-1665777769766.jpg?e=webp&d=700x100&q=100",
  },
];

module.exports = async () => {
  await Company.bulkCreate(companies);
  console.log("[Database] Se corrió el seeder de Companies.");
};
