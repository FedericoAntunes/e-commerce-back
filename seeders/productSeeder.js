const { Product } = require("../models");

const products = [
  {
    title: "Premium Tasty 2 Carnes",
    price: 10, // esto es en dolares
    stock: 20,
    description:
      "2 100% beef burgers, 3 slices of cheddar cheese, tomato, lettuce, onion, and Tasty sauce, on brioche bun.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_4c2032ce-2b11-4d6c-aa24-0ce446a0f0da.jpg?quality=90&height=96&width=96&webp=1&dpi=1.5",
    companyId: 3,
    categoryId: 3,
  },
  {
    title: "Chicken McNuggets 20 units",
    price: 11,
    stock: 50,
    description: "20 McNuggets of chicken. To share with friends, or hide from them.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_a5faadbf-53ab-4424-9201-1ae5f09ea527.jpg?quality=90&height=96&width=96",
    companyId: 3,
    categoryId: 1,
  },
  {
    title: "McShake with caramel sauce",
    price: 5,
    stock: 12,
    description: "Delicious milk shake and ice cream with caramel sauce Lapataia.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_ac613f21-6f76-4702-8023-7766aa25de3f.jpg?quality=90&height=96&width=96",
    companyId: 3,
    categoryId: 2,
  },
  {
    title: "McCombo Grande American BBQ 3 Meats",
    price: 12,
    stock: 4,
    description:
      "Burger 3 meats in brioche bun, bacon, barbecue sauce, cheddar sauce, cheese and caramelized onion. Side dish and large drink of your choice.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_b17037c9-f596-4d8f-af23-3796a8902884.jpg?quality=90&height=96&width=96",
    companyId: 3,
    categoryId: 3,
  },
  {
    title: "Great McCombo Double Quarter Pounder with Cheese",
    price: 13,
    stock: 1,
    description:
      "Burger with 2 100% beef and two cheddar cheeses, ketchup, mustard and fresh onion. Accompanied by potatoes and a large drink.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_3b55b126-e88e-4fe6-8cff-b955ff4e35ca.jpg?quality=90&height=96&width=96",
    companyId: 3,
    categoryId: 3,
  },
  {
    title: "Gourmet Salad with Crispy Chicken",
    price: 4,
    stock: 16,
    description:
      "Tomatoes, cubed cheese and fresh leaves. All this accompanied by a delicious Crispy Chicken.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_046ed87b-4a7d-4351-92f5-5d17dbada8e9.jpg?quality=90&height=96&width=96",
    companyId: 3,
    categoryId: 1,
  },
  {
    title: "Large Sugar Free Coca-Cola",
    price: 3.8,
    stock: 50,
    description: "A Coca-Cola Zero in a 700ml Large Glass.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_aec37d5e-25c6-4f95-9d78-9c40baca56ea.jpg?quality=90&height=96&width=96",
    companyId: 3,
    categoryId: null,
  },
  // La Cigale API en Ingles JUANMA a partir de aca:
  {
    title: "Half a Kilo of Ice Cream",
    price: 12,
    stock: 20,
    description: "Half a kilo of artisan ice cream in the flavor of your choice.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/409862-49714a11-abfe-4b33-9efa-f05f4737ee82.jpg?quality=90&height=96&width=96&webp=1",
    companyId: 2,
    categoryId: 2,
  },
  {
    title: "Creme Normande 800ml/ 500g",
    price: 11,
    stock: 60,
    description: "Dulce de leche ice cream with sprinkled chocolate chips, in 800 ml / 500g.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/4b0009ca-859f-4f6c-88d6-dc58470b253b.jpg?quality=90&height=96&width=96&webp=1",
    companyId: 2,
    categoryId: 2,
  },
  {
    title: "Swiss Chocolate Bonbon",
    price: 6,
    stock: 35,
    description: "Swiss chocolate bonbon.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/409867-62bf0778-ed9c-4932-bf09-1149b4adf6d8.jpg?quality=90&height=96&width=96&webp=1",
    companyId: 2,
    categoryId: 2,
  },
  {
    title: "Manjar Cake",
    price: 18,
    stock: 42,
    description:
      "Manjar (caramel) and chocolate ice cream cake with a center of chantilly meringue, covered in chocolate and decorated with nuts and chantilly.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/182ba453-ad71-4193-a54c-2b884d346618.jpg?quality=90&height=96&width=96&webp=1",
    companyId: 2,
    categoryId: 2,
  },
  {
    title: "Major Cake",
    price: 34,
    stock: 12,
    description:
      "Dulce de leche, chocolate, and sambayón (egg yolk and wine) ice cream cake with a base of pionono (sponge cake), decorated with chantilly and chocolate.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/28f05d13-23b1-4bb6-96d0-7ff9ec61be18.jpg?quality=90&height=96&width=96&webp=1",
    companyId: 2,
    categoryId: 2,
  },
];
module.exports = async () => {
  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
