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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: true,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: true,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: true,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: false,
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
    in_offer: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/6f447d8f97ffba2172a95be386ef2090/b4facf495c22df52f3ca635379ebe613.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/6f447d8f97ffba2172a95be386ef2090/b4facf495c22df52f3ca635379ebe613.jpeg",
    companyId: 7,
    categoryId: 21,
  },
  {
    title: "Sake Nigiri",
    slug: sluggy("Sake Nigiri"),
    price: 8,
    stock: 21,
    description: "Two pieces. Salmon.",
    in_offer: false,
    image: "https://d1ralsognjng37.cloudfront.net/57b898d5-6709-400c-9c32-cf4d58a60215.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/57b898d5-6709-400c-9c32-cf4d58a60215.jpeg",
    companyId: 7,
    categoryId: 21,
  },
  {
    title: "Craving Salmon Roll",
    slug: sluggy("Craving Salmon Roll"),
    price: 17.5,
    stock: 16,
    description:
      "Eight pieces. Deep fried shrimp, cucumber wrapped with layers of salmon, and avocado with teriyaki sauce and spicy mayo on top.",
    in_offer: false,
    image: "https://d1ralsognjng37.cloudfront.net/3d7ca8f8-8117-4540-b636-d88521b3ff3a.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/3d7ca8f8-8117-4540-b636-d88521b3ff3a.jpeg",
    companyId: 7,
    categoryId: 21,
  },
  {
    title: "Salmon and Avocado Roll",
    slug: sluggy("Salmon and Avocado Roll"),
    price: 5.5,
    stock: 19,
    description: "Four pieces. Salmon and avocado.",
    in_offer: false,
    image: "https://d1ralsognjng37.cloudfront.net/3f18d47c-f1c2-424c-a14f-b4a67dcbc542.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/3f18d47c-f1c2-424c-a14f-b4a67dcbc542.jpeg",
    companyId: 7,
    categoryId: 21,
  },
  {
    title: "Sweet Potato Roll",
    slug: sluggy("Sweet Potato Roll"),
    price: 4.5,
    stock: 18,
    description: "Four pieces. Mashed sweet potato and tempura flakes with yam chips on top.",
    in_offer: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/932e41c8cdb904333463a87dd1c299df/b4facf495c22df52f3ca635379ebe613.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/932e41c8cdb904333463a87dd1c299df/b4facf495c22df52f3ca635379ebe613.jpeg",
    companyId: 7,
    categoryId: 21,
  },
  {
    title: "Philadelphia Roll",
    slug: sluggy("Philadelphia Roll"),
    price: 5.25,
    stock: 24,
    description: "Four pieces. Smoked salmon, cream cheese, avocado, and cucumber.",
    in_offer: false,
    image: "https://d1ralsognjng37.cloudfront.net/f72568e0-c48d-4147-bb6f-005e11e3a889.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/f72568e0-c48d-4147-bb6f-005e11e3a889.jpeg",
    companyId: 7,
    categoryId: 21,
  },
  {
    title: "Crunchy California Roll",
    slug: sluggy("Crunchy California Roll"),
    price: 4.75,
    stock: 22,
    description:
      "Four pieces. Crab stick, avocado, cucumber, and tempura flakes with spicy mayo sauce.",
    in_offer: false,
    image: "https://d1ralsognjng37.cloudfront.net/c4b6e046-b301-430a-98a1-7f641d61d28c.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/c4b6e046-b301-430a-98a1-7f641d61d28c.jpeg",
    companyId: 7,
    categoryId: 21,
  },
  {
    title: "Veggie One Roll",
    slug: sluggy("Veggie One Roll"),
    price: 4.5,
    stock: 36,
    description: "Four pieces. Lettuce, fried tofu, avocado, and cucumber.",
    in_offer: false,
    image: "https://d1ralsognjng37.cloudfront.net/cee55df0-a551-4f03-a2b4-ac4ae63a7000.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/cee55df0-a551-4f03-a2b4-ac4ae63a7000.jpeg",
    companyId: 7,
    categoryId: 21,
  },
  {
    title: "Salmon Teriyaki Roll",
    slug: sluggy("Salmon Teriyaki Roll"),
    price: 5.5,
    stock: 23,
    description:
      "Four pieces. Roasted salmon, avocado, and tempura flakes with teriyaki sauce on top.",
    in_offer: false,
    image: "https://d1ralsognjng37.cloudfront.net/9b795f7b-689a-45ad-8ca0-5eabd0c31509.jpeg",
    logo: "https://d1ralsognjng37.cloudfront.net/9b795f7b-689a-45ad-8ca0-5eabd0c31509.jpeg",
    companyId: 7,
    categoryId: 21,
  },
  {
    title: "Kamikaze Salmon Roll (10pcs)",
    slug: sluggy("Kamikaze Salmon Roll (10pcs)"),
    price: 6,
    stock: 6,
    description:
      "10 pieces. Salmon and mix of tempura flakes with spicy mayo, crab stick, avocado, and cucumber.",
    in_offer: false,
    image: "https://d1ralsognjng37.cloudfront.net/762f5f8f-9869-48c0-a64c-6f24cae32f36",
    logo: "https://d1ralsognjng37.cloudfront.net/762f5f8f-9869-48c0-a64c-6f24cae32f36",
    companyId: 7,
    categoryId: 21,
  },
  {
    title: "Imperial Roll",
    slug: sluggy("Imperial Roll"),
    price: 23,
    stock: 23,
    description: "Mixed crab and avocado rolled in soy paper. Topped with guacamole and tuna poke.",
    in_offer: false,
    image: "https://d1ralsognjng37.cloudfront.net/643e0c80-f73e-416d-8e05-e73d2c950e6f",
    logo: "https://d1ralsognjng37.cloudfront.net/643e0c80-f73e-416d-8e05-e73d2c950e6f",
    companyId: 8,
    categoryId: 21,
  },
  {
    title: "6 pcs Sashimi and 6 pcs Sushi",
    slug: sluggy("6 pcs Sashimi and 6 pcs Sushi"),
    price: 32,
    stock: 23,
    description: "Served with miso soup or green salad.",
    in_offer: false,
    image: "https://d1ralsognjng37.cloudfront.net/dd8785cb-f42e-45c3-b0fb-ee50b9093dd6",
    logo: "https://d1ralsognjng37.cloudfront.net/dd8785cb-f42e-45c3-b0fb-ee50b9093dd6",
    companyId: 8,
    categoryId: 21,
  },
  {
    title: "Dragon",
    slug: sluggy("Dragon"),
    price: 15.4,
    stock: 23,
    description:
      "Tempura shrimp, crab meats, asparagus, masago, and spicy mayonnaise topped with avocado and eel sauce.",
    in_offer: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/fd09f99398bf3393e7e9980fb0d8bb0b/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/fd09f99398bf3393e7e9980fb0d8bb0b/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 8,
    categoryId: 21,
  },
  {
    title: "Miami Heat Roll",
    slug: sluggy("Miami Heat Roll"),
    price: 17.6,
    stock: 23,
    description:
      "Shrimp tempura, cream cheese, and crab salad. Topped with baked salmon, spicy mayonnaise, & topped with crunch. Served with eel sauce.",
    in_offer: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/fd09f99398bf3393e7e9980fb0d8bb0b/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/fd09f99398bf3393e7e9980fb0d8bb0b/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 8,
    categoryId: 21,
  },
  {
    title: "JB Roll",
    slug: sluggy("JB Roll"),
    price: 11,
    stock: 23,
    description: "Salmon, cream cheese, and scallions.",
    in_offer: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/9cf142257090d6a9fcebe0f082785daa/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/9cf142257090d6a9fcebe0f082785daa/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 8,
    categoryId: 21,
  },
  {
    title: "Hibachi Chicken",
    slug: sluggy("Hibachi Chicken"),
    price: 26.4,
    stock: 23,
    description: "Chicken Breast Hibachi- Grilled with Sesame Seeds and Lemon",
    in_offer: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/a1eef9e452601f6c7b68b6f4c7ca4bce/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/a1eef9e452601f6c7b68b6f4c7ca4bce/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 8,
    categoryId: 21,
  },
  {
    title: "Spicy Tuna Temaki",
    slug: sluggy("Spicy Tuna Temaki"),
    price: 7.7,
    stock: 23,
    description: "",
    in_offer: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/3c7bf5df341facf1c5a21b6aea21faea/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/3c7bf5df341facf1c5a21b6aea21faea/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 8,
    categoryId: 21,
  },
  {
    title: "California Eel Temaki",
    slug: sluggy("California Eel Temaki"),
    price: 8.8,
    stock: 23,
    description: "",
    in_offer: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/a823838d3c22b1e7506d9de16c332094/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/a823838d3c22b1e7506d9de16c332094/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 8,
    categoryId: 21,
  },
  {
    title: "Chicken Katsu",
    slug: sluggy("Chicken Katsu"),
    price: 20.9,
    stock: 23,
    description: "With Steamed white rice",
    in_offer: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/eb782adbfa31d4cf9d31d07852d151f3/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/eb782adbfa31d4cf9d31d07852d151f3/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 8,
    categoryId: 21,
  },
  {
    title: "Shrimp Katsu",
    slug: sluggy("Shrimp Katsu"),
    price: 24.2,
    stock: 23,
    description: "With Steamed white rice",
    in_offer: false,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/4882f95c177414a333c7e92821578934/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/4882f95c177414a333c7e92821578934/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    companyId: 8,
    categoryId: 21,
  },
  {
    //Burrito Gringo API:
    title: "Quesadilla",
    slug: sluggy("Quesadilla"),
    price: 12,
    stock: 20,
    description:
      "Tortilla Of Your Choice, Selected Beans, Sauteed Fajita Peppers & Onions, Fillings (Veggies/Proteins), Homemade Salsas, Cheese & Side Sour Cream. Vegetarian Guacamole Included (Tofu Excluded).",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80NGI1N2Y0Mi0wNWUxLTQwNDQtYmJiMS1hZmY3MmVkNDIyY2UuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80NGI1N2Y0Mi0wNWUxLTQwNDQtYmJiMS1hZmY3MmVkNDIyY2UuanBlZw==",
    companyId: 12,
    categoryId: 4,
  },
  {
    title: "Taco",
    slug: sluggy("Taco"),
    price: 5,
    stock: 10,
    description:
      "Choice Of Soft Corn, Flour Tortilla Or Crispy U Shape Shell, Add Pinto, Black Beans Or Vegan Refried Beans, Sauteed Fajita Peppers & Onions, Choice Of Fillings (Veggies/Proteins) Homemade Salsa, Cheese & Sour Cream. Vegetarian Guacamole Included (Tofu Excluded).",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80OTE2ODQ1ZS01MGViLTRkYTktYjdkOC01NTMwYTg5NTFhZDQuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80OTE2ODQ1ZS01MGViLTRkYTktYjdkOC01NTMwYTg5NTFhZDQuanBlZw==",
    companyId: 12,
    categoryId: 4,
  },
  {
    title: "Nachos-Gluten Free",
    slug: sluggy("Nachos-Gluten Free"),
    price: 13,
    stock: 15,
    description:
      "Tortilla Of Your Choice, Selected Beans, Sauteed Fajita Peppers & Onions, Fillings (Veggies/Proteins), Homemade Salsas, Cheese & Side Sour Cream. Vegetarian Guacamole Included (Tofu Excluded).",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xODNlYWMxMC1jNTNjLTQyYmMtOWY4NC05YjQ5YjFiYWQ4MTkuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xODNlYWMxMC1jNTNjLTQyYmMtOWY4NC05YjQ5YjFiYWQ4MTkuanBlZw==",
    companyId: 12,
    categoryId: 4,
  },
  {
    title: "Salad Bowl",
    slug: sluggy("Salad Bowl"),
    price: 16,
    stock: 17,
    description:
      "Served In A Baked Tortilla Bowl, Romaine Lettuce, Sauteed Fajita Peppers & Onions, Selected Beans, Choice Of Fillings (Veggies/Proteins) Salsa, Cheese, Sour Cream & Choice Of Dressings. Vegetarian Guacamole Included (Tofu Excluded).",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zMzMwZDVhNC1iYWE0LTQzZjQtODgwOC05MGNkZTQ1ZWU4NWYuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zMzMwZDVhNC1iYWE0LTQzZjQtODgwOC05MGNkZTQ1ZWU4NWYuanBlZw==",
    companyId: 12,
    categoryId: 4,
  },
  {
    title: "Burrito Bowl",
    slug: sluggy("Burrito Bowl"),
    price: 13,
    stock: 32,
    description:
      "Same Ingredients As A Burrito, Served In A Takeout Bowl Container, 6(Inch) Flour Or Soft Corn Tortilla Comes On The Side. Vegetarian Bowl Guacamole Included (Tofu Excluded).",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC83Mjg1OWIxZi1mZGMwLTQxY2ItOTVkMS0yNDg5ZDQ4ZTdlNTQuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC83Mjg1OWIxZi1mZGMwLTQxY2ItOTVkMS0yNDg5ZDQ4ZTdlNTQuanBlZw==",
    companyId: 12,
    categoryId: 4,
  },
  {
    title: "Guacamole",
    slug: sluggy("Guacamole"),
    price: 2.85,
    stock: 32,
    description:
      "All Natural Ingredients Homemade Guacamole 100% Free Food Fillings-glutenn Free-vegan.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yODdjMTQzOC1kZjc5LTQ4ZTctOWIyYy01MDY3ODgxOGQyODIuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yODdjMTQzOC1kZjc5LTQ4ZTctOWIyYy01MDY3ODgxOGQyODIuanBlZw==",
    companyId: 12,
    categoryId: 4,
  },
  {
    title: "Jarritos Bottled Soda",
    slug: sluggy("Jarritos Bottled Soda"),
    price: 3.95,
    stock: 22,
    description: "Authentic Mexican Cola With Natural Ingredients.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iMGFhMGY2Ny1jMDY3LTQ3YzItYWY0MS02ZWY0MWM1MzZmYmUuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iMGFhMGY2Ny1jMDY3LTQ3YzItYWY0MS02ZWY0MWM1MzZmYmUuanBlZw==",
    companyId: 12,
    categoryId: 4,
  },
  {
    title: "Burrito",
    slug: sluggy("Burrito"),
    price: 9.95,
    stock: 12,
    description:
      "Tortilla Of Your Choice, Add Pinto, Black Beans Or Vegan Refried Beans, Sauteed Fajita Peppers & Onions, Mexican Lime Rice, Choice Of Fillings (Veggies/Proteins) Homemade Salsa, Cheese & Sour Cream. Vegetarian Guacamole Included (Tofu Excluded).",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC84NzNjMzE1Yi02NTQ3LTQxOTUtOGE2YS0yMmM3NGE0OTYzM2UuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC84NzNjMzE1Yi02NTQ3LTQxOTUtOGE2YS0yMmM3NGE0OTYzM2UuanBlZw==",
    companyId: 12,
    categoryId: 4,
  },
  {
    title: "Homemade Salsa",
    slug: sluggy("Homemade Salsa"),
    price: 2.25,
    stock: 16,
    description: "All-Natural Homemade Fresh Salsas & Fire Roasted-gluten Free-vegan.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9mY2M3YWZmOC0wOGVlLTQ5OTItYjRlYy0yNjg4MDY2YTA0NmMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9mY2M3YWZmOC0wOGVlLTQ5OTItYjRlYy0yNjg4MDY2YTA0NmMuanBlZw==",
    companyId: 12,
    categoryId: 4,
  },
  {
    title: "Homemade Cookies",
    slug: sluggy("Homemade Cookies"),
    price: 2.99,
    stock: 40,
    description: "Made With Real Butter, Chocolate Chips & Organic Coconut.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80YWFmNTc4ZC1mZTRlLTQ1ZGEtYTdmZC01YTBhNGE3ZmM0ZGYuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80YWFmNTc4ZC1mZTRlLTQ1ZGEtYTdmZC01YTBhNGE3ZmM0ZGYuanBlZw==",
    companyId: 12,
    categoryId: 4,
  },
  {
    // La Fiesta Latina
    title: "Tacos with Fries",
    slug: sluggy("Tacos with Fries"),
    price: 18,
    stock: 20,
    description:
      "Make it a meal with 3 tacos and fresh potatoes fries. Tasty and delicious. Your choices beef, chicken, pork or vegetarian or vegan,",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNWEwMzRlNC02YzE2LTQ5YmItYWViYi0wOWVhMDAzOWY3MmQuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNWEwMzRlNC02YzE2LTQ5YmItYWViYi0wOWVhMDAzOWY3MmQuanBlZw==",
    companyId: 11,
    categoryId: 4,
  },
  {
    title: "Mexican Chicken Fajitas",
    slug: sluggy("Mexican Chicken Fajitas"),
    price: 23,
    stock: 59,
    description:
      "Sizzling fajitas of your choice beef or chorizo or chicken with fresh slices of sweet papers and onion. Serve with rice, beans, warm corn tortillas, and spicy sauces.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC84NTQ4ZTE2OS00MjI5LTRlNGUtODQ4Zi00NzI5MGVhMmUxM2QuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC84NTQ4ZTE2OS00MjI5LTRlNGUtODQ4Zi00NzI5MGVhMmUxM2QuanBlZw==",
    companyId: 11,
    categoryId: 4,
  },
  {
    title: "Authentic Big Handmade 2 Quesadillas",
    slug: sluggy("Authentic Big Handmade 2 Quesadillas"),
    price: 20,
    stock: 19,
    description:
      "Real and Authentic of Handmade in our restaurant QUESADILLAS gluten free and fully loaded with cheese and your favorite topping to chose, with side of guacamole and fresh spicy salsa.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC84MDRkNTFlMS02OTA5LTQ1YjctOWNiZS0zNWYzYzgyZWM2YjcuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC84MDRkNTFlMS02OTA5LTQ1YjctOWNiZS0zNWYzYzgyZWM2YjcuanBlZw==",
    companyId: 11,
    categoryId: 4,
  },
  {
    title: "Picada",
    slug: sluggy("Picada"),
    price: 25,
    stock: 48,
    description:
      "Large Mexican Appetizer for the Amigos or Big Familia. Chicharron, Yuca Frita, Plantain,Tortilla chips, Chorizo, Salsas and Guacamole. You will Enjoy it!",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC84OGY2YjYwZi0xOTc4LTQ5NzQtOTkxMC01ODFjYWE0MmNkZTEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC84OGY2YjYwZi0xOTc4LTQ5NzQtOTkxMC01ODFjYWE0MmNkZTEuanBlZw==",
    companyId: 11,
    categoryId: 4,
  },
  {
    title: "El Ranchero",
    slug: sluggy("El Ranchero"),
    price: 22,
    stock: 34,
    description:
      "Feeling Mexican cowboy, try slices of steak with 2 eggs, refried caramelized beans , Mexican rice, Fresh cut chips and salsas.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNTJhYjA2MS1iNTBiLTQ5YTktYWE5NS01N2UwY2IyYWE2NGMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNTJhYjA2MS1iNTBiLTQ5YTktYWE5NS01N2UwY2IyYWE2NGMuanBlZw==",
    companyId: 11,
    categoryId: 4,
  },
  {
    title: "Nachos for Everyone",
    slug: sluggy("Nachos for Everyone"),
    price: 20,
    stock: 34,
    description:
      "Fresh and crispy nachos fully loaded with tons of veggies and chorizo. Spicy sauces on the side.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNWM5ODk0Nzk4ZjBmOWY4ODAxNjhmY2Y2NTM3YmU4Y2YvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNWM5ODk0Nzk4ZjBmOWY4ODAxNjhmY2Y2NTM3YmU4Y2YvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    companyId: 11,
    categoryId: 4,
  },
  {
    title: "Mexican Panini",
    slug: sluggy("Mexican Panini"),
    price: 19,
    stock: 26,
    description:
      "Scrumptious panini with your favorite meat choice beef or cochinita pibil or chorizo or ham or cheese. Fries on the side.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMWIyMzk2OWUwMzFlOGI1ZDY4YThhODVlOTFhNTBjODIvYjRmYWNmNDk1YzIyZGY1MmYzY2E2MzUzNzllYmU2MTMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMWIyMzk2OWUwMzFlOGI1ZDY4YThhODVlOTFhNTBjODIvYjRmYWNmNDk1YzIyZGY1MmYzY2E2MzUzNzllYmU2MTMuanBlZw==",
    companyId: 11,
    categoryId: 4,
  },
  {
    title: "Pollo con Mole",
    slug: sluggy("Pollo con Mole"),
    price: 20,
    stock: 18,
    description: "Popular dish, chicken with mole sauce, tasty refried beans, and Mexican rice.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMWIyMzk2OWUwMzFlOGI1ZDY4YThhODVlOTFhNTBjODIvYjRmYWNmNDk1YzIyZGY1MmYzY2E2MzUzNzllYmU2MTMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMWIyMzk2OWUwMzFlOGI1ZDY4YThhODVlOTFhNTBjODIvYjRmYWNmNDk1YzIyZGY1MmYzY2E2MzUzNzllYmU2MTMuanBlZw==",
    companyId: 11,
    categoryId: 4,
  },
  {
    title: "Enchiladas Rojas with chicken",
    slug: sluggy("Enchiladas Rojas with chicken"),
    price: 18,
    stock: 53,
    description:
      "Red tomatoes sauce with jalapeno, spices and nicely cooked and pour over three fresh tortillas stuffed with shredded chicken with a mozzarella cheese and , queso fresco and sour cream, cilantro and onions. Rice on the side.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC82MDljMGI2Mi1lZjA2LTQ5ODAtYTAxYi1jNjY3NjcwYjk3MjkuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC82MDljMGI2Mi1lZjA2LTQ5ODAtYTAxYi1jNjY3NjcwYjk3MjkuanBlZw==",
    companyId: 11,
    categoryId: 4,
  },
  {
    title: "Chilaquiles with Egg",
    slug: sluggy("Chilaquiles with Egg"),
    price: 18,
    stock: 34,
    description:
      "Enjoy crispy corn tortilla 100% Gluten free, bathed in Spicy RED tomato or GREEN Tomatillo Sauce with cheese and sour cream. 2 Eggs on the side and refried beans.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81ZTVjZWZlYy0xOWY2LTQzMGMtYjljZC0zZmU1YmU1YmI0MDAuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC81ZTVjZWZlYy0xOWY2LTQzMGMtYjljZC0zZmU1YmU1YmI0MDAuanBlZw==",
    companyId: 11,
    categoryId: 4,
  },
  {
    title: "Turkey Croissant Sandwich",
    slug: sluggy("Turkey Croissant Sandwich"),
    price: 8,
    stock: 12,
    description:
      "Fresh butter croissant, garlic aioli, sliced deli turkey,arugula,smoked cheddar cheese,red onions, tomatoes.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZTEwMzJhMTA4M2NkNjE4YzQzMTYxMmNmNWUxZWU3ZjQvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/e1032a1083cd618c431612cf5e1ee7f4/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    companyId: 13,
    categoryId: 13,
  },
  {
    title: "Flavored Lemonade",
    slug: sluggy("Flavored Lemonade"),
    price: 4,
    stock: 24,
    description: "Delicious and beatiful Flavored Lemonade.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNzlmMDk3NmZkNTk0N2NjZmQ4MzZjYWRlYTQwMWNlMDIvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/79f0976fd5947ccfd836cadea401ce02/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    companyId: 13,
    categoryId: 2,
  },
  {
    title: "Custard and Strawberry Filled Croissant",
    slug: sluggy("Custard and Strawberry Filled Croissant"),
    price: 9,
    stock: 34,
    description: "Croissant full of delicious Custards and Strawberries.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMWM1MzM0NDM4NWMwODU2MzY3OTA0ZjE1MmRhZWI1ZGIvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/1c53344385c0856367904f152daeb5db/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    companyId: 13,
    categoryId: 13,
  },
  {
    title: "Nutella and Strawberry Filled Croissant",
    slug: sluggy("Nutella and Strawberry Filled Croissant"),
    price: 9,
    stock: 26,
    description: "Croissant with Nutella and Strawberries, an absolute manjar.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYmM5YTI3NjAyZGE1MGU0NGVlMzMwYjEyMzE2OTA1MzMvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/bc9a27602da50e44ee330b1231690533/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    companyId: 13,
    categoryId: 13,
  },
  {
    title: "Mango Mania",
    slug: sluggy("Mango Mania"),
    price: 7.5,
    stock: 12,
    description: "Beatiful looking ice cream of mango.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYWQwZjdkMWRiNGFiOGFiMDcwNTlhM2Y2MWU4YmJjZmQvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/ad0f7d1db4ab8ab07059a3f61e8bbcfd/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    companyId: 13,
    categoryId: 13,
  },
  {
    title: "Flavored Latte",
    slug: sluggy("Flavored Latte"),
    price: 6.2,
    stock: 15,
    description: "Sweet Latte with vainilla.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZWI5ZjAwMDhiZGI1YjhlMjY2YjBjNGQyOTE1N2ZkZWQvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/eb9f0008bdb5b8e266b0c4d29157fded/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    companyId: 13,
    categoryId: 2,
  },
  {
    title: "Bloom Flower Espresso",
    slug: sluggy("Bloom Flower Espresso"),
    price: 6.2,
    stock: 15,
    description: "Delicious Cafe Expresso.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMDQ3MWFkZTRmMDY4MjhlNjI5OGQxZGNhMDQ1M2I0NDIvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/0471ade4f06828e6298d1dca0453b442/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    companyId: 13,
    categoryId: 2,
  },
  {
    title: "Strawberry Banana",
    slug: sluggy("Strawberry Banana"),
    price: 7.5,
    stock: 5,
    description: "Smoothy of Strawberry with Banana.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNzBmNTNjMDc4NmJhOTg2MjJjYTJjNzA0ODI5OGVkN2QvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/70f53c0786ba98622ca2c7048298ed7d/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    companyId: 13,
    categoryId: 19,
  },
  {
    title: "Chocolate Truffle Mousse",
    slug: sluggy("Chocolate Truffle Mousse"),
    price: 6.5,
    stock: 7,
    description: "Astonishing beatiful Chocolate Truffle Mousse cake.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvM2MwYzc0Y2E0YzFlODQxZjNiMThjYjE1N2M1YjNiYTMvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/3c0c74ca4c1e841f3b18cb157c5b3ba3/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    companyId: 13,
    categoryId: 13,
  },
  {
    title: "Vegan Chocolate Brownie Cake",
    slug: sluggy("Vegan Chocolate Brownie Cake"),
    price: 6.5,
    stock: 19,
    description: "Vegan brownie with chocolate.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNjEyN2Y5Y2UxMTFlMDhmODg0ODU2NTRiNDBjMzBlZDYvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/6127f9ce111e08f88485654b40c30ed6/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    companyId: 13,
    categoryId: 20,
  },
  {
    title: "Vegetarian Croissant Sandwich",
    slug: sluggy("Vegetarian Croissant Sandwich"),
    price: 8,
    stock: 12,
    description:
      "Fresh butter croissant, garlic aioli, arugula, smoked cheddar cheese, red onions, tomatoes cucumber, salt, pepper.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvN2ZkY2RkZTYyYjAwYTkzNDRkMWNjMDg2ZTMyYzEwZTcvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/7fdcdde62b00a9344d1cc086e32c10e7/4218ca1d09174218364162cd0b1a8cc1.jpeg",
    companyId: 13,
    categoryId: 2,
  },
  // PIZZA C.O.
  {
    title: "The Adelaide",
    price: 23,
    stock: 15,
    description: "White Sauce, Fior Di Latte, Smoked provolone, Mushrooms, Spinach, Truffle Oil.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvN2ZjNzMzMjRhNGM2MTQ1NjI2ZWE5YTg4M2ZlYWRhZjMvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images4.alphacoders.com/276/276908.jpg",
    companyId: 9,
    categoryId: 16,
  },
  {
    title: "Yorkville Special",
    price: 23,
    stock: 8,
    description:
      "Olive Oil, Fior Di Latte, Goat Cheese, Crushed Walnuts, Honey, Truffle Oil and Kosher Salt.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZTRjNThiNDM5YjE4OWZjNTdmNTYzN2M1MmE3MmRkM2MvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images4.alphacoders.com/276/276908.jpg",
    companyId: 9,
    categoryId: 16,
  },
  {
    title: "Danforth Pi",
    price: 20,
    stock: 25,
    description:
      "Pesto Sauce, Mozzarella Cheese, Feta Cheese, Kalamata Olives, Mushrooms, Grilled Chicken, Cherry Tomatoes.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOWViZWNiZjliMjAyMmEyYjNkM2UzNTE3YzQwM2M0ZWIvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images4.alphacoders.com/276/276908.jpg",
    companyId: 9,
    categoryId: 16,
  },
  {
    title: "Cheese Pi",
    price: 16,
    stock: 31,
    description: "Classic pizza with cheese.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZTY2Mjg2MjdjNzY1ZThjMDRmYmZiN2Q4M2E5ZTI5NDgvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images4.alphacoders.com/276/276908.jpg",
    companyId: 9,
    categoryId: 16,
  },
  {
    title: "The Avenue",
    price: 20,
    stock: 14,
    description:
      "San Marzano tomato sauce, mozzarella cheese, smoked provolone, beef brisket & BBQ sauce drizzle.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYmI5Zjk4ODM1NzE1MWNlNGI3ZGY2YWZhMjI4YTNiYmYvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images4.alphacoders.com/276/276908.jpg",
    companyId: 9,
    categoryId: 16,
  },
  {
    title: "Main Salad",
    price: 18,
    stock: 36,
    description:
      "Choose your greens, two protein topping selections & unlimited choice of salad toppings.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTA1OGQ3OGU5YjU3MjU3YTM3MTZiOWRlZjJiMzIxYjEvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images4.alphacoders.com/276/276908.jpg",
    companyId: 9,
    categoryId: 8,
  },
  {
    title: "Side Salad",
    price: 13,
    stock: 22,
    description:
      "Choose your greens, two protein topping selections & unlimited choice of salad toppings.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNTg2OWIyNTY2NThlMTYxYmVkMWNmMzM0YjRlNmU2YjUvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images4.alphacoders.com/276/276908.jpg",
    companyId: 9,
    categoryId: 8,
  },
  {
    title: "Chocolate Chip",
    price: 3.5,
    stock: 59,
    description: "One Chocolate Chip cookie.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZTliMGNjNzFmZTRkYTNiYWRkNjI4YjI0ZjA3NmU3OTgvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images4.alphacoders.com/276/276908.jpg",
    companyId: 9,
    categoryId: 19,
  },
  {
    title: "Mill St. Organic",
    price: 8,
    stock: 20,
    description: "341ml bottle Alc: 4.20%",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZDU0OWUzMmIzNzA0NjhmNDkyMWU5OTk1NjliNzJkZmYvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images4.alphacoders.com/276/276908.jpg",
    companyId: 9,
    categoryId: 12,
  },
  {
    title: "Stella Artois",
    price: 8,
    stock: 14,
    description: "330ml bottle Alc:5%",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMzJiMTNkMjFiZjFhMmVkNTViNjBjZmIxMDlhZDlkNjkvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images4.alphacoders.com/276/276908.jpg",
    companyId: 9,
    categoryId: 12,
  },
  // PIZZA NERDS
  {
    title: "Gladstone - Calabrese Pizza",
    price: 20,
    stock: 34,
    description: "Tomato, slightly spicy calabrese sausage, and arugula, cheese!",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvY2ZiZTI5NGJlZTU3YzQyNWU2NmQ1MjVkODQwZDY0MTQvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images7.alphacoders.com/596/596343.jpg",
    companyId: 10,
    categoryId: 16,
  },
  {
    title: "Queen Elizabeth - Goat Cheese Pizza",
    price: 21,
    stock: 8,
    description: "Tomato sauce with local cheese, basil, goat cheese, and spicy honey.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvODRkYzgxYzkzYWU3NDBhNGE4ZmRjODIzM2I4NGQwYzYvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images7.alphacoders.com/596/596343.jpg",
    companyId: 10,
    categoryId: 16,
  },
  {
    title: "Bank - Mushroom Pizzai",
    price: 22,
    stock: 25,
    description:
      "White pizza with cheese, marinated portabello mushrooms, cracked black pepper, parmesan and truffle oil.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYTdmYzAyZDc4N2JhOGU3YTZiNzg5ZGE1MWE3MmQyZmYvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images7.alphacoders.com/596/596343.jpg",
    companyId: 10,
    categoryId: 16,
  },
  {
    title: "Lyon - Nerd Pizza",
    price: 19,
    stock: 31,
    description:
      "Black-pepper-molasses bacon, local cheese, pickled red onion and chili basil honey.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOGU1ZThmZDlkMmU3MzkzMGZiZGQ0YmI3ZTIzNDlhNTkvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images7.alphacoders.com/596/596343.jpg",
    companyId: 10,
    categoryId: 16,
  },
  {
    title: "Hank - Kale Caesar Salad",
    price: 12,
    stock: 14,
    description: "Kale, caesar dressing, lemon, bacon, panko and parmesan.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTkyY2Y4YmZjY2ZmMGQzMDQzZWViZmE0OTgxYmYxZWYvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images7.alphacoders.com/596/596343.jpg",
    companyId: 10,
    categoryId: 8,
  },
  {
    title: "Frank - 'Deluxe' Pizza",
    price: 24,
    stock: 36,
    description:
      "Tomato sauce with local cheese, handmade sausage, charred green peppers and marinated mushrooms.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYzA4NGIyNDI4NmU5MTJjMTBkMDFkMmQwNDg1MGFlNzYvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images7.alphacoders.com/596/596343.jpg",
    companyId: 10,
    categoryId: 16,
  },
  {
    title: "Gilmour - Hawaiian Pizza",
    price: 21,
    stock: 22,
    description:
      "Tomato sauce, local cheese, roasted pineapple, dry cured bacon and zesty bbq drizzle.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTE4YmNmYzVhMTU3OTFiMTA2NWM1MzI4ZmE3Mjk3YmYvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images7.alphacoders.com/596/596343.jpg",
    companyId: 10,
    categoryId: 16,
  },
  {
    title: "Artizen Kombucha (Raspberry Hibiscus)",
    price: 6,
    stock: 59,
    description: "Artizen is a smooth, small batch artisan kombucha. Made locally.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvN2RkYmUwY2UzOTYwMmIxZDI0YTAyZjBiMmIzOWU4YmEvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images7.alphacoders.com/596/596343.jpg",
    companyId: 10,
    categoryId: 12,
  },
  {
    title: "Artizen Kombucha (Lemon Ginger)",
    price: 6,
    stock: 20,
    description: "Artizen is a smooth, small batch artisan kombucha. Made locally",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvM2I4ZjViZDNmMDdiYjc2OWE5NDYyYmY2ODJkZWVmOGYvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images7.alphacoders.com/596/596343.jpg",
    companyId: 10,
    categoryId: 12,
  },
  {
    title: "California IPA (473ml) ABV 6.4%",
    price: 6,
    stock: 35,
    description:
      "Like a juicier west coast IPA. It's a collaboration that pairs great with pizza!!",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOGIwOWQwM2VhYzY0OGViMzRkNDBiZmUyM2NkZjc2YjkvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://images7.alphacoders.com/596/596343.jpg",
    companyId: 10,
    categoryId: 12,
  },
  // Chinese Products:  Mr. Luo Noodle House & Hey Niu Niu 罗罐中米粉
  {
    title: "Golden Soup Beef Brisket Rice Noodle 金汤牛腩米粉",
    price: 13.99,
    stock: 15,
    description:
      "123",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC85ZWMxYWJhNy01Nzk3LTRmZTctYTQ4My1mOTQxMmNmOGZlNDIuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC85ZWMxYWJhNy01Nzk3LTRmZTctYTQ4My1mOTQxMmNmOGZlNDIuanBlZw==",
    companyId: 14,
    categoryId: 5,
  },
  {
    title: "Tomato Beef Brisket Rice Noodle 番茄牛腩米粉",
    price: 13.99,
    stock: 25,
    description:
      "123",
    in_offer: true,
    image:
      " https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8wMzBkMjQ0Yy05NzI0LTRiYjQtOTQ1Yi1hMDk3ZmEwN2RjZTguanBlZw==",
    logo: " https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8wMzBkMjQ0Yy05NzI0LTRiYjQtOTQ1Yi1hMDk3ZmEwN2RjZTguanBlZw==",
    companyId: 14,
    categoryId: 5,
  },
  {
    title: "Signature Fish Soup Rice Noodle 原味鱼汤米粉",
    price: 12.50,
    stock: 3,
    description:
      "123",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80MzcwZWE5NC0zYzQ2LTQ0ODMtOTQ3NS04Y2Y5YjA5NzBkNDcuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80MzcwZWE5NC0zYzQ2LTQ0ODMtOTQ3NS04Y2Y5YjA5NzBkNDcuanBlZw==",
    companyId: 14,
    categoryId: 5,
  },
  {
    title: "Bone Soup Minced Meat Rice Noodle 骨汤肉沫米粉",
    price: 11.99,
    stock: 43,
    description:
      "123",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xMTE3NWRlMi1hZGEyLTQxNDUtYTAwOS1iNjYwZjVkNjQ2YTQuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xMTE3NWRlMi1hZGEyLTQxNDUtYTAwOS1iNjYwZjVkNjQ2YTQuanBlZw==",
    companyId: 14,
    categoryId: 5,
  },
  {
    title: "Chinese Sauerkraut Fish Fillet Rice Noodle 酸菜鱼片米粉",
    price: 12.99,
    stock: 12,
    description:
      "123",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC82YTc0ODA0Ny1lYjY1LTRmNjUtODk5Ny00ODBkOTNiOTNiMWYuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC82YTc0ODA0Ny1lYjY1LTRmNjUtODk5Ny00ODBkOTNiOTNiMWYuanBlZw==",
    companyId: 14,
    categoryId: 5,
  },
  {
    title: "Spicy Pork Intestine Rice Noodle 麻辣肥肠米粉",
    price: 14.99,
    stock: 67,
    description:
      "123",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80NTk5MTg2ZS1iNjA0LTRjOGUtYjIzYy1iYTI5ZThlODJlMDYuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80NTk5MTg2ZS1iNjA0LTRjOGUtYjIzYy1iYTI5ZThlODJlMDYuanBlZw==",
    companyId: 14,
    categoryId: 5,
  },
  {
    title: "Kimchi with Beef Slice Rice Noodle 泡菜肥牛米粉",
    price: 12.99,
    stock: 89,
    description:
      "123",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC85NzhlNDUwNS0zZWM4LTQ0MjAtYWQ5OC02ZjY3MjIzYmI3NTEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC85NzhlNDUwNS0zZWM4LTQ0MjAtYWQ5OC02ZjY3MjIzYmI3NTEuanBlZw==",
    companyId: 14,
    categoryId: 5,
  },
  {
    title: "Braised Pork Rice Bowl 红烧肉饭",
    price: 13.99,
    stock: 7,
    description:
      "123",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTQ3ZDYwMGQ1Zjk4OTRkNjJiNWE5ZTliYWU0ZmI1ZWQvYjRmYWNmNDk1YzIyZGY1MmYzY2E2MzUzNzllYmU2MTMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTQ3ZDYwMGQ1Zjk4OTRkNjJiNWE5ZTliYWU0ZmI1ZWQvYjRmYWNmNDk1YzIyZGY1MmYzY2E2MzUzNzllYmU2MTMuanBlZw==",
    companyId: 14,
    categoryId: 5,
  },
  {
    title: "Stir-fried Pork Rice Bowl 小炒肉饭",
    price: 13.99,
    stock: 70,
    description:
      "123",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZDRiNWFiOTI4ODNiMWQ0OWZlZTFjYWFlNWMyODYwZDEvYjRmYWNmNDk1YzIyZGY1MmYzY2E2MzUzNzllYmU2MTMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZDRiNWFiOTI4ODNiMWQ0OWZlZTFjYWFlNWMyODYwZDEvYjRmYWNmNDk1YzIyZGY1MmYzY2E2MzUzNzllYmU2MTMuanBlZw==",
    companyId: 14,
    categoryId: 5,
  },
  {
    title: "Pork Bone Stew 特色酱骨头饭",
    price: 14.99,
    stock: 26,
    description:
      "123",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNDZlN2U0MjhiMTI0MmUzMWVmOTQ3NWNkOTk3MzJhOGYvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNDZlN2U0MjhiMTI0MmUzMWVmOTQ3NWNkOTk3MzJhOGYvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    companyId: 14,
    categoryId: 5,
  },
  // Lucky Chinese Restaurant
  {
    title: "Lucky Chilli Chicken Boneless",
    price: 14.94,
    stock: 42,
    description:
      "Server with steam rice. Spicy.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvN2YzYjI3YzI1MWI1ZjNiZjhmMjNjNDNkY2UzYzlkNTEvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvN2YzYjI3YzI1MWI1ZjNiZjhmMjNjNDNkY2UzYzlkNTEvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    companyId: 15,
    categoryId: 5,
  },
  {
    title: "Chicken Pakora ( 8pcs )",
    price: 16.00,
    stock: 22,
    description:
      "Crunchy chicken 8 pcs",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNzQxYThjODc0MzcwMzY5MTQ1Nzc3MTM3NjZjMTIzYzEvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNzQxYThjODc0MzcwMzY5MTQ1Nzc3MTM3NjZjMTIzYzEvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    companyId: 15,
    categoryId: 5,
  },
  {
    title: "Beef with Broccoli",
    price: 16.67,
    stock: 39,
    description:
      "Server with steam rice.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMzZjNmM0YWY2Yzg3ZjU2ZDRhY2UwOGRiNTU2NTA4NGUvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMzZjNmM0YWY2Yzg3ZjU2ZDRhY2UwOGRiNTU2NTA4NGUvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    companyId: 15,
    categoryId: 5,
  },
  {
    title: "Manchurian Chicken Fried Rice",
    price: 14.94,
    stock: 65,
    description:
      "Spicy. Server with steam rice.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNjI0NGU0NjkyMzU0NWVmOTRkYzQ5MzMyMzRjYmI3ZTkvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNjI0NGU0NjkyMzU0NWVmOTRkYzQ5MzMyMzRjYmI3ZTkvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    companyId: 15,
    categoryId: 5,
  },
  {
    title: "Chicken Fried Wonton (12 pcs)",
    price: 11.49,
    stock: 12,
    description:
      "Fried chicken.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYjM5NzZiYTlmZDBhZGQ4ZDg0NjhlODRlOGE5ZWRiNjMvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYjM5NzZiYTlmZDBhZGQ4ZDg0NjhlODRlOGE5ZWRiNjMvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    companyId: 15,
    categoryId: 5,
  },
  {
    title: "Chilli Tofu",
    price: 14.94,
    stock: 12,
    description:
      "Our special tofu",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZjg4MTU2YjdlYTVhMzQzNTgwODE1OTM4MjcyNzVjZjgvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZjg4MTU2YjdlYTVhMzQzNTgwODE1OTM4MjcyNzVjZjgvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    companyId: 15,
    categoryId: 5,
  },
  {
    title: "Lucky Hakka Noodle",
    price: 16.09,
    stock: 12,
    description:
      "Soft noodle",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOTM0ZDBlYjNlNmZjZWZjMzA1Mzg1NzQxMTk3NTkyMDAvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOTM0ZDBlYjNlNmZjZWZjMzA1Mzg1NzQxMTk3NTkyMDAvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    companyId: 15,
    categoryId: 5,
  },
  {
    title: "Steam Rice",
    price: 3.44,
    stock: 12,
    description:
      "Special rice.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMjQyMmQ5ZWQ4NGMyY2I2YTRmMmJhZDNkMGYwODFmODMvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMjQyMmQ5ZWQ4NGMyY2I2YTRmMmJhZDNkMGYwODFmODMvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    companyId: 15,
    categoryId: 5,
  },
  {
    title: "3 kinds of Meat Curry Fried Rice",
    price: 17.82,
    stock: 98,
    description:
      "Curry spicy.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYTUwMjhjODk5N2NiYjI1YjJhZWZmZTMxOTM5YzdiOGIvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYTUwMjhjODk5N2NiYjI1YjJhZWZmZTMxOTM5YzdiOGIvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==",
    companyId: 15,
    categoryId: 5,
  },
  //Japanese Restaurant:  Bikkuri Japanese Restaurant [SMB]
  {
    title: "Dynamite Maki(8pcs)",
    price: 13.99,
    stock: 23,
    description:
      "Shrimp tempura, avocado, cucumber, and spicy mayo",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMmZiNzRlZjhkMDkwYmFmNmU3OGU5YzY0MmE1NzcyMGUvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMmZiNzRlZjhkMDkwYmFmNmU3OGU5YzY0MmE1NzcyMGUvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    companyId: 16,
    categoryId: 6,
  },
  {
    title: "Spicy Tuna Maki",
    price: 7.99,
    stock: 34,
    description:
      "Chopped tuna with spicy mayo.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMzdiZDQ5NzQwNDhjZTE4MGRhZTg1NTQ5OTg3ZjhlNmUvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMzdiZDQ5NzQwNDhjZTE4MGRhZTg1NTQ5OTg3ZjhlNmUvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    companyId: 16,
    categoryId: 6,
  },
  {
    title: "California Roll",
    price: 7.50,
    stock: 47,
    description:
      "California roll sushi.",
    in_offer: true,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZWQ1Y2U5OGY5YzVjZjE3ODMxZjg5M2M5MjJjZGRmNDEvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZWQ1Y2U5OGY5YzVjZjE3ODMxZjg5M2M5MjJjZGRmNDEvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    companyId: 16,
    categoryId: 6,
  },
  {
    title: "Spring Roll",
    price: 5.50,
    stock: 68,
    description:
      "Deep fried vegetables spring roll.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvY2QzN2U3MmU2MzY0OTUwM2IwMjZmOTZmMDY0MTI0ZDQvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvY2QzN2U3MmU2MzY0OTUwM2IwMjZmOTZmMDY0MTI0ZDQvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    companyId: 16,
    categoryId: 6,
  },
  {
    title: "Ebi Tempura Appetizer",
    price: 12.99,
    stock: 75,
    description:
      "Five  pieces of shrimp tempura.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMWFkYTg0ZDU5YWZlNmExMDFjZjdmNzdiOTEyMGU1NWQvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMWFkYTg0ZDU5YWZlNmExMDFjZjdmNzdiOTEyMGU1NWQvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    companyId: 16,
    categoryId: 6,
  },
  {
    title: "Age Gyoza (deep fried)",
    price: 6.50,
    stock: 12,
    description:
      "Deep fried vegetable dumpling (5 pcs)",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZTk3NzhmMDdiZTJjYjE2ZDQ4ZThmNTQ3MGQ3YzAxZDkvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZTk3NzhmMDdiZTJjYjE2ZDQ4ZThmNTQ3MGQ3YzAxZDkvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    companyId: 16,
    categoryId: 6,
  },
  {
    title: "Chicken Karaage",
    price: 9.99,
    stock: 98,
    description:
      "Deep fried chicken.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNGVjZmFjM2RmZjdiNTZiNzEzMTE1YzhjMjlhZTc0OTkvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNGVjZmFjM2RmZjdiNTZiNzEzMTE1YzhjMjlhZTc0OTkvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    companyId: 16,
    categoryId: 6,
  },
  {
    title: "Tempura Appetizer",
    price: 11.99,
    stock: 5,
    description:
      "Three pieces of shrimp and vegetable tempura.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOGFlOWIxZDE1ZmFhMjRiNTFkYTBiOGM1ZmY0ZGVlOWUvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOGFlOWIxZDE1ZmFhMjRiNTFkYTBiOGM1ZmY0ZGVlOWUvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    companyId: 16,
    categoryId: 6,
  },
  {
    title: "Vegetable Tempura Appetizer",
    price: 10.99,
    stock: 42,
    description:
      "Mixed vegetable tempura.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZDAxNTliNjA0YmUxODdiZGI3OGIzMDVhM2JlNjVmYzgvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZDAxNTliNjA0YmUxODdiZGI3OGIzMDVhM2JlNjVmYzgvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    companyId: 16,
    categoryId: 6,
  },
  {
    title: "Agedashi Tofu",
    price: 5.50,
    stock: 22,
    description:
      "Deep fried tofu.",
    in_offer: false,
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMjBkNjQzMGI0Nzk3ZWZkNzVmNGMxOWFiM2JlZDczZGMvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMjBkNjQzMGI0Nzk3ZWZkNzVmNGMxOWFiM2JlZDczZGMvNDIxOGNhMWQwOTE3NDIxODM2NDE2MmNkMGIxYThjYzEuanBlZw==",
    companyId: 16,
    categoryId: 6,
  },











 
];

module.exports = async () => {
  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
