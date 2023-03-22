const { Product } = require("../models");

const products = [
  {
    title: "Premium Tasty 2 Carnes",
    price: 10, // esto es en dolares
    stock: 20,
    description:
      "2 hamburguesas de carne 100% vacuna, 3 fetas de queso cheddar, tomate, lechuga, cebolla, y salsa Tasty, en pan brioche.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_4c2032ce-2b11-4d6c-aa24-0ce446a0f0da.jpg?quality=90&height=96&width=96&webp=1&dpi=1.5",
    companyId: 3,
    categoryId: null,
  },
  {
    title: "Chicken McNuggets 20 unidades",
    price: 11,
    stock: 50,
    description: "20 McNuggets de pollo. Para compartir con los amigos, o esconderlos de ellos.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_a5faadbf-53ab-4424-9201-1ae5f09ea527.jpg?quality=90&height=96&width=96",
    companyId: 3,
    categoryId: null,
  },
  {
    title: "McShake dulce de leche",
    price: 5,
    stock: 12,
    description: "Delicioso batido a base de leche y helado con dulce de leche Lapataia.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_ac613f21-6f76-4702-8023-7766aa25de3f.jpg?quality=90&height=96&width=96",
    companyId: 3,
    categoryId: null,
  },
  {
    title: "McCombo Grande American BBQ 3 Carnes",
    price: 12,
    stock: 4,
    description:
      "Hamburguesa 3 carnes en pan brioche,panceta,salsa barbacoa,salsa cheddar,queso y cebolla caramelizada. Acompañamiento y bebida grande a elección.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_b17037c9-f596-4d8f-af23-3796a8902884.jpg?quality=90&height=96&width=96",
    companyId: 3,
    categoryId: null,
  },
  {
    title: "McCombo Grande Doble Cuarto de Libra con Queso",
    price: 13,
    stock: 1,
    description:
      "Hamburguesa con 2 carnes 100% vacuna y dos quesos cheddar, kétchup, mostaza y la cebolla fresca. Acompañado de papas y bebida grande.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_3b55b126-e88e-4fe6-8cff-b955ff4e35ca.jpg?quality=90&height=96&width=96",
    companyId: 3,
    categoryId: null,
  },
  {
    title: "Ensalada Gourmet con Pollo Crispy",
    price: 4,
    stock: 16,
    description:
      "Tomates, queso en cubos y hojas frescas. Todo eso acompañado de un delicioso Pollo Crispy.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_046ed87b-4a7d-4351-92f5-5d17dbada8e9.jpg?quality=90&height=96&width=96",
    companyId: 3,
    categoryId: null,
  },
  {
    title: "Coca-Cola sin Azucar Grande",
    price: 3.8,
    stock: 50,
    description: "Una Coca-Cola Zero en Vaso Grande de 700ml.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/60779_aec37d5e-25c6-4f95-9d78-9c40baca56ea.jpg?quality=90&height=96&width=96",
    companyId: 3,
    categoryId: null,
  },
];
module.exports = async () => {
  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
