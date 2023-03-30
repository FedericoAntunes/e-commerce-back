const { Product } = require("../models");
const slugify = require("slugify");

function sluggy(name) {
  return slugify(name, {
    replacement: "-",
    trim: true,
    lower: true,
    strict: true,
  });
}

const products = [
  {
    title: "Premium Tasty 2 Carnes",
    slug: sluggy("Premium Tasty 2 Carnes"),
    price: 10,
    stock: 20,
    description:
      "2 100% beef burgers, 3 slices of cheddar cheese, tomato, lettuce, onion, and Tasty sauce, on brioche bun.",
    featured: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNWMxOGNkYzFhZTcyMTE1MjkxZjQyMzk5YTAxNDgxNDcvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/60779_4c2032ce-2b11-4d6c-aa24-0ce446a0f0da.jpg?quality=90&width=768&webp=1",
    companyId: 3,
    categoryId: 3,
  },
  {
    title: "Chicken McNuggets 20 units",
    slug: sluggy("Chicken McNuggets 20 units"),
    price: 11,
    stock: 50,
    description: "20 McNuggets of chicken. To share with friends, or hide from them.",
    featured: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYTlkMmExNWRkMDJiYWQxYTI1NzY1OWE3Y2IzNGE1YzIvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/60779_a5faadbf-53ab-4424-9201-1ae5f09ea527.jpg?quality=90&width=768&webp=1",
    companyId: 3,
    categoryId: 1,
  },
  {
    title: "McShake with caramel sauce",
    slug: sluggy("McShake with caramel sauce"),
    price: 5,
    stock: 12,
    description: "Delicious milk shake and ice cream with caramel sauce Lapataia.",
    featured: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOTE2Y2VlNWVkMzkxY2JjMzRkMGIxN2EwMWQ4ODgwZTUvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/60779_ac613f21-6f76-4702-8023-7766aa25de3f.jpg?quality=90&width=768&webp=1",

    companyId: 3,
    categoryId: 2,
  },
  {
    title: "McCombo Grande American BBQ 3 Meats",
    slug: sluggy("McCombo Grande American BBQ 3 Meats"),
    price: 12,
    stock: 4,
    description:
      "Burger 3 meats in brioche bun, bacon, barbecue sauce, cheddar sauce, cheese and caramelized onion. Side dish and large drink of your choice.",
    featured: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMjc2YWZiY2JlOTkwYmIxZjQwOTUzMDY3MGQ2YTYzMmEvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/60779_b17037c9-f596-4d8f-af23-3796a8902884.jpg?quality=90&width=768&webp=1",

    companyId: 3,
    categoryId: 3,
  },
  {
    title: "Great McCombo Double Quarter Pounder with Cheese",
    slug: sluggy("Great McCombo Double Quarter Pounder with Cheese"),
    price: 13,
    stock: 1,
    description:
      "Burger with 2 100% beef and two cheddar cheeses, ketchup, mustard and fresh onion. Accompanied by potatoes and a large drink.",
    featured: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNWMxOGNkYzFhZTcyMTE1MjkxZjQyMzk5YTAxNDgxNDcvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/60779_3b55b126-e88e-4fe6-8cff-b955ff4e35ca.jpg?quality=90&width=768&webp=1",

    companyId: 3,
    categoryId: 3,
  },
  {
    title: "McCafé Cinnamon Roll",
    slug: sluggy("McCafé Cinnamon Roll"),
    price: 4,
    stock: 16,
    description:
      "Cinnamon Roll at McDonald's is served warm and loaded with cinnamon layered between buttery, flaky pastry dough that is drizzled with a delicious cream cheese icing.",
    featured: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvY2RjNTg2MGEzODU2NDNmMGRjYWFmNDc5YzljZTUyOTcvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/60779_046ed87b-4a7d-4351-92f5-5d17dbada8e9.jpg?quality=90&width=768&webp=1",
    companyId: 3,
    categoryId: 1,
  },
  {
    title: "Medium Coke",
    slug: sluggy("Medium Coke"),
    price: 1.5,
    stock: 50,
    description: "A Coca-Cola Zero in a 700ml Large Glass.",
    featured: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYjBlOWQzY2JjZDZhMDcwZTc2N2Q5M2IzYzRjZjU4Y2MvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/60779_aec37d5e-25c6-4f95-9d78-9c40baca56ea.jpg?quality=90&width=768&webp=1",
    companyId: 3,
    categoryId: 1,
  },
  // La Cigale API en Ingles JUANMA a partir de aca:
  {
    title: "Half a Kilo of Ice Cream",
    slug: sluggy("Half a Kilo of Ice Cream"),
    price: 12,
    stock: 20,
    description: "Half a kilo of artisan ice cream in the flavor of your choice.",
    featured: false,
    image: "https://i.ibb.co/9ybKxR5/Half-Kilo-Of-Ice-Cream.png",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/409862-49714a11-abfe-4b33-9efa-f05f4737ee82.jpg?quality=100&width=768&webp=1",
    companyId: 2,
    categoryId: 2,
  },
  {
    title: "Creme Normande 800ml/ 500g",
    slug: sluggy("Creme Normande 800ml/ 500g"),
    price: 11,
    stock: 60,
    description: "Dulce de leche ice cream with sprinkled chocolate chips, in 800 ml / 500g.",
    featured: false,
    image: "https://i.ibb.co/JzfyXTV/Creme-Normande800ml500g.png",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/4b0009ca-859f-4f6c-88d6-dc58470b253b.jpg?quality=100&width=768&webp=1",
    companyId: 2,
    categoryId: 2,
  },
  {
    title: "Swiss Chocolate Bonbon",
    slug: sluggy("Swiss Chocolate Bonbon"),
    price: 6,
    stock: 35,
    description: "Swiss chocolate bonbon.",
    featured: true,
    image: "https://i.ibb.co/7XMtpDV/Swiss-Chocolate-Bonbon.png",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/409867-62bf0778-ed9c-4932-bf09-1149b4adf6d8.jpg?quality=100&width=768&webp=1",
    companyId: 2,
    categoryId: 2,
  },
  {
    title: "Manjar Cake",
    slug: sluggy("Manjar Cake"),
    price: 18,
    stock: 42,
    description:
      "Manjar (caramel) and chocolate ice cream cake with a center of chantilly meringue, covered in chocolate and decorated with nuts and chantilly.",
    featured: false,
    image: "https://i.ibb.co/svPnhX3/182ba453-ad71-4193-a54c-2b884d346618-removebg-preview.png",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/182ba453-ad71-4193-a54c-2b884d346618.jpg?quality=100&width=768&webp=1",
    companyId: 2,
    categoryId: 2,
  },
  {
    title: "Major Cake",
    slug: sluggy("Major Cake"),
    price: 34,
    stock: 12,
    description:
      "Dulce de leche, chocolate, and sambayón (egg yolk and wine) ice cream cake with a base of pionono (sponge cake), decorated with chantilly and chocolate.",
    featured: false,
    image: "https://i.ibb.co/3NBztQ6/Major-Cake.png",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/28f05d13-23b1-4bb6-96d0-7ff9ec61be18.jpg?quality=100&width=768&webp=1",
    companyId: 2,
    categoryId: 2,
  },
  {
    title: "Classic Hot Sandwich",
    slug: sluggy("Classic Hot Sandwich"),
    price: 8.625,
    stock: 15,
    description: "Chesse and ham, the classic hot Sandwich.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/470b0b30-6cf5-4782-ab84-38044410b1ce.jpg?quality=100&amp;width=248",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/470b0b30-6cf5-4782-ab84-38044410b1ce.jpg?quality=100&width=768&webp=1",
    companyId: 1,
    categoryId: 1,
  },
  {
    title: "Pineapple Sandwich",
    slug: sluggy("Pineapple Sandwich"),
    price: 13.625,
    stock: 10,
    description: "With pineapple, muzzarella and cherrys.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/cdf13045-06e3-4f30-ba53-2b4d41ab4574.jpg?quality=100&amp;width=248",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/cdf13045-06e3-4f30-ba53-2b4d41ab4574.jpg?quality=100&width=768&webp=1",
    companyId: 1,
    categoryId: 1,
  },
  {
    title: "Hot Dog",
    slug: sluggy("Hot Dog"),
    price: 3.7,
    stock: 30,
    description: "Classic hot dog, with mayonaisse, ketchup and mustard.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/ea552ac2-ec29-4648-af48-e23ee176e187.jpg?quality=100&amp;height=96&amp;width=96",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/ea552ac2-ec29-4648-af48-e23ee176e187.jpg?quality=100&width=768&webp=1",
    companyId: 1,
    categoryId: 1,
  },
  {
    title: "Slice of Pizza with Roquefort",
    slug: sluggy("Slice of Pizza with Roquefort"),
    price: 6.2,
    stock: 20,
    description: "Tomato sauce and roquefort cheese.",
    featured: true,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/8b5f2b1c-3149-4249-8e06-eda6e7f9bfed.jpg?quality=100&amp;height=96&amp;width=96",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/8b5f2b1c-3149-4249-8e06-eda6e7f9bfed.jpg?quality=100&width=768&webp=1",
    companyId: 1,
    categoryId: 1,
  },
  {
    title: "Figazza with Muzzarella",
    slug: sluggy("Figazza with Muzzarella"),
    price: 7.1,
    stock: 10,
    description: "Delicious dough covered with onions, bell pepper and muzarella.",
    featured: false,
    image:
      "https://images.deliveryhero.io/image/pedidosya/products/977dadb8-ce41-4b1b-8ea8-8a80d909b7da.jpg?quality=100&amp;height=96&amp;width=96",
    logo: "https://images.deliveryhero.io/image/pedidosya/products/977dadb8-ce41-4b1b-8ea8-8a80d909b7da.jpg?quality=100&width=768&webp=1",
    companyId: 1,
    categoryId: 1,
  },
  // Burger King API
  {
    title: "Cheesy Doritos Crispy Chicken",
    slug: sluggy("Cheesy Doritos Crispy Chicken"),
    price: 7.1,
    stock: 10,
    description:
      "The taste of Doritos®, twice as crunchy: Two pieces of a breaded Doritos® cheese snack on top of two of our legendary Crispy chicken, accompanied by cheddar cheese slices, Doritos® cheddar sauce, cheddar bread, and tomato.",
    featured: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/918754eb327683426211dbbe720c7dda/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/web-eats-v2/chain-pages/logo/burger-king-5c19d8a9-abfd-4a0f-9598-202e297d7eff.png",
    companyId: 4,
    categoryId: 3,
  },
  {
    title: "Menu Whopper Vegetal",
    slug: sluggy("Menu Whopper Vegetal"),
    price: 10.45,
    stock: 5,
    description:
      "100% Whopper. Vegetarian. If you're all about plants and not about meat, you're going to love the Vegetarian Whopper®. It's the same classic Whopper®, but made with plant-based ingredients. And yes, it's still flame-grilled. Can you tell the difference?.",
    featured: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/8e201c5119ba663b2b0c9da5f59f02e5/859baff1d76042a45e319d1de80aec7a.jpeg",
    logo: "https://tb-static.uber.com/prod/web-eats-v2/chain-pages/logo/burger-king-5c19d8a9-abfd-4a0f-9598-202e297d7eff.png",
    companyId: 4,
    categoryId: 3,
  },
  {
    title: "Menu Crispy Chicken",
    slug: sluggy("Menu Crispy Chicken"),
    price: 7.95,
    stock: 5,
    description:
      "Crispy on the outside, tender on the inside. The best chicken with a crispy and slightly spicy breading, freshly cut tomatoes, fresh lettuce, and mayonnaise on a freshly toasted seeded bread. An authentic masterpiece.",
    featured: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMzNmZDdmZGI1ZDIwYzk1OWFiM2Y3ZDkzY2ZiN2I1YWQvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://tb-static.uber.com/prod/web-eats-v2/chain-pages/logo/burger-king-5c19d8a9-abfd-4a0f-9598-202e297d7eff.png",
    companyId: 4,
    categoryId: 3,
  },
  {
    title: "Menu Double Cheese Bacon XXL",
    slug: sluggy("Menu Double Cheese Bacon XXL"),
    price: 10.45,
    stock: 5,
    description:
      "Double up your cheeseburger, add bacon and now increase its size... we know, it's impressive. Grilled beef patty just the way we like it at BURGER KING, pickles, ketchup, and mustard share the stage to show you this work of art.",
    featured: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZmZhNjdlOTYwNjAyNmQ3MmQ0N2Y3OTUyZmM5NWU2N2EvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://tb-static.uber.com/prod/web-eats-v2/chain-pages/logo/burger-king-5c19d8a9-abfd-4a0f-9598-202e297d7eff.png",
    companyId: 4,
    categoryId: 3,
  },
  {
    title: "Chicken Wrap",
    slug: sluggy("Chicken Wrap"),
    price: 5.5,
    stock: 5,
    description:
      "The most rolled option! Delicious tortilla filled with crispy chicken, cheddar cheese, tomato and fresh lettuce with a touch of mayonnaise",
    featured: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNmYwMTk5NmI0OWQ2ODVlYzM5YWUxNjcxYTMwODE1YjMvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://tb-static.uber.com/prod/web-eats-v2/chain-pages/logo/burger-king-5c19d8a9-abfd-4a0f-9598-202e297d7eff.png",
    companyId: 4,
    categoryId: 3,
  },
  {
    title: "Spicy Tuna Roll",
    slug: sluggy("Spicy Tuna Roll"),
    price: 6,
    stock: 23,
    description: "Four pieces. Tuna and green onion with spicy mayo sauce on top.",
    featured: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/6f447d8f97ffba2172a95be386ef2090/b4facf495c22df52f3ca635379ebe613.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/6f447d8f97ffba2172a95be386ef2090/b4facf495c22df52f3ca635379ebe613.jpeg",
    companyId: 6,
    categoryId: 4,
  },
  {
    title: "Sake Nigiri",
    slug: sluggy("Sake Nigiri"),
    price: 8,
    stock: 21,
    description: "Two pieces. Salmon.",
    featured: false,
    image: "https://d1ralsognjng37.cloudfront.net/57b898d5-6709-400c-9c32-cf4d58a60215.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/57b898d5-6709-400c-9c32-cf4d58a60215.jpeg",
    companyId: 6,
    categoryId: 4,
  },
  {
    title: "Craving Salmon Roll",
    slug: sluggy("Craving Salmon Roll"),
    price: 17.5,
    stock: 16,
    description:
      "Eight pieces. Deep fried shrimp, cucumber wrapped with layers of salmon, and avocado with teriyaki sauce and spicy mayo on top.",
    featured: false,
    image: "https://d1ralsognjng37.cloudfront.net/3d7ca8f8-8117-4540-b636-d88521b3ff3a.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/3d7ca8f8-8117-4540-b636-d88521b3ff3a.jpeg",
    companyId: 6,
    categoryId: 4,
  },
  {
    title: "Salmon and Avocado Roll",
    slug: sluggy("Salmon and Avocado Roll"),
    price: 5.5,
    stock: 19,
    description: "Four pieces. Salmon and avocado.",
    featured: false,
    image: "https://d1ralsognjng37.cloudfront.net/3f18d47c-f1c2-424c-a14f-b4a67dcbc542.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/3f18d47c-f1c2-424c-a14f-b4a67dcbc542.jpeg",
    companyId: 6,
    categoryId: 4,
  },
  {
    title: "Sweet Potato Roll",
    slug: sluggy("Sweet Potato Roll"),
    price: 4.5,
    stock: 18,
    description: "Four pieces. Mashed sweet potato and tempura flakes with yam chips on top.",
    featured: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/932e41c8cdb904333463a87dd1c299df/b4facf495c22df52f3ca635379ebe613.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/932e41c8cdb904333463a87dd1c299df/b4facf495c22df52f3ca635379ebe613.jpeg",
    companyId: 6,
    categoryId: 4,
  },
  {
    title: "Philadelphia Roll",
    slug: sluggy("Philadelphia Roll"),
    price: 5.25,
    stock: 24,
    description: "Four pieces. Smoked salmon, cream cheese, avocado, and cucumber.",
    featured: false,
    image: "https://d1ralsognjng37.cloudfront.net/f72568e0-c48d-4147-bb6f-005e11e3a889.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/f72568e0-c48d-4147-bb6f-005e11e3a889.jpeg",
    companyId: 6,
    categoryId: 4,
  },
  {
    title: "Crunchy California Roll",
    slug: sluggy("Crunchy California Roll"),
    price: 4.75,
    stock: 22,
    description:
      "Four pieces. Crab stick, avocado, cucumber, and tempura flakes with spicy mayo sauce.",
    featured: false,
    image: "https://d1ralsognjng37.cloudfront.net/c4b6e046-b301-430a-98a1-7f641d61d28c.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/c4b6e046-b301-430a-98a1-7f641d61d28c.jpeg",
    companyId: 6,
    categoryId: 4,
  },
  {
    title: "Veggie One Roll",
    slug: sluggy("Veggie One Roll"),
    price: 4.5,
    stock: 36,
    description: "Four pieces. Lettuce, fried tofu, avocado, and cucumber.",
    featured: false,
    image: "https://d1ralsognjng37.cloudfront.net/cee55df0-a551-4f03-a2b4-ac4ae63a7000.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/cee55df0-a551-4f03-a2b4-ac4ae63a7000.jpeg",
    companyId: 6,
    categoryId: 4,
  },
  {
    title: "Salmon Teriyaki Roll",
    slug: sluggy("Salmon Teriyaki Roll"),
    price: 5.5,
    stock: 23,
    description:
      "Four pieces. Roasted salmon, avocado, and tempura flakes with teriyaki sauce on top.",
    featured: false,
    image: "https://d1ralsognjng37.cloudfront.net/9b795f7b-689a-45ad-8ca0-5eabd0c31509.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/9b795f7b-689a-45ad-8ca0-5eabd0c31509.jpeg",
    companyId: 6,
    categoryId: 4,
  },
  {
    title: "Kamikaze Salmon Roll (10pcs)",
    slug: sluggy("Kamikaze Salmon Roll (10pcs)"),
    price: 6,
    stock: 6,
    description:
      "10 pieces. Salmon and mix of tempura flakes with spicy mayo, crab stick, avocado, and cucumber.",
    featured: false,
    image: "https://d1ralsognjng37.cloudfront.net/762f5f8f-9869-48c0-a64c-6f24cae32f36",
    logo: "https://d1ralsognjng37.cloudfront.net/762f5f8f-9869-48c0-a64c-6f24cae32f36",
    companyId: 6,
    categoryId: 4,
  },
  {
    title: "Imperial Roll",
    slug: sluggy("Imperial Roll"),
    price: 23,
    stock: 23,
    description: "Mixed crab and avocado rolled in soy paper. Topped with guacamole and tuna poke.",
    featured: false,
    image: "https://d1ralsognjng37.cloudfront.net/643e0c80-f73e-416d-8e05-e73d2c950e6f",
    logo: "https://d1ralsognjng37.cloudfront.net/643e0c80-f73e-416d-8e05-e73d2c950e6f",
    companyId: 7,
    categoryId: 4,
  },
  {
    title: "6 pcs Sashimi and 6 pcs Sushi",
    slug: sluggy("6 pcs Sashimi and 6 pcs Sushi"),
    price: 32,
    stock: 23,
    description: "Served with miso soup or green salad.",
    featured: false,
    image: "https://d1ralsognjng37.cloudfront.net/dd8785cb-f42e-45c3-b0fb-ee50b9093dd6",
    logo: "https://d1ralsognjng37.cloudfront.net/dd8785cb-f42e-45c3-b0fb-ee50b9093dd6",
    companyId: 7,
    categoryId: 4,
  },
  {
    title: "Dragon",
    slug: sluggy("Dragon"),
    price: 15.4,
    stock: 23,
    description:
      "Tempura shrimp, crab meats, asparagus, masago, and spicy mayonnaise topped with avocado and eel sauce.",
    featured: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/fd09f99398bf3393e7e9980fb0d8bb0b/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/fd09f99398bf3393e7e9980fb0d8bb0b/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 7,
    categoryId: 4,
  },
  {
    title: "Miami Heat Roll",
    slug: sluggy("Miami Heat Roll"),
    price: 17.6,
    stock: 23,
    description:
      "Shrimp tempura, cream cheese, and crab salad. Topped with baked salmon, spicy mayonnaise, & topped with crunch. Served with eel sauce.",
    featured: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/fd09f99398bf3393e7e9980fb0d8bb0b/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/fd09f99398bf3393e7e9980fb0d8bb0b/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 7,
    categoryId: 4,
  },
  {
    title: "JB Roll",
    slug: sluggy("JB Roll"),
    price: 11,
    stock: 23,
    description: "Salmon, cream cheese, and scallions.",
    featured: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/9cf142257090d6a9fcebe0f082785daa/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/9cf142257090d6a9fcebe0f082785daa/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 7,
    categoryId: 4,
  },
  {
    title: "Hibachi Chicken",
    slug: sluggy("Hibachi Chicken"),
    price: 26.4,
    stock: 23,
    description: "Chicken Breast Hibachi- Grilled with Sesame Seeds and Lemon",
    featured: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/a1eef9e452601f6c7b68b6f4c7ca4bce/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/a1eef9e452601f6c7b68b6f4c7ca4bce/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 7,
    categoryId: 4,
  },
  {
    title: "Spicy Tuna Temaki",
    slug: sluggy("Spicy Tuna Temaki"),
    price: 7.7,
    stock: 23,
    description: "",
    featured: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/3c7bf5df341facf1c5a21b6aea21faea/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/3c7bf5df341facf1c5a21b6aea21faea/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 7,
    categoryId: 4,
  },
  {
    title: "California Eel Temaki",
    slug: sluggy("California Eel Temaki"),
    price: 8.8,
    stock: 23,
    description: "",
    featured: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/a823838d3c22b1e7506d9de16c332094/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/a823838d3c22b1e7506d9de16c332094/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 7,
    categoryId: 4,
  },
  {
    title: "Chicken Katsu",
    slug: sluggy("Chicken Katsu"),
    price: 20.9,
    stock: 23,
    description: "With Steamed white rice",
    featured: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/eb782adbfa31d4cf9d31d07852d151f3/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/eb782adbfa31d4cf9d31d07852d151f3/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 7,
    categoryId: 4,
  },
  {
    title: "Shrimp Katsu",
    slug: sluggy("Spicy Tuna Roll"),
    price: 24.2,
    stock: 23,
    description: "With Steamed white rice",
    featured: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/4882f95c177414a333c7e92821578934/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/4882f95c177414a333c7e92821578934/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 7,
    categoryId: 4,
  },
];
module.exports = async () => {
  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
