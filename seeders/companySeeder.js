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
    name: "Kochu Restaurant",
    slug: sluggy("kochu"),
    description: `Kochu is a contemporary Korean restaurant that serves dishes with a modern twist. The restaurant offers a variety of Korean-inspired small plates and entrees, including dishes such as Korean fried chicken, bibimbap, and kimchi pancake. They also offer a selection of craft cocktails and a wine list that features both international and local wines. The restaurant has a modern and elegant atmosphere with wooden accents and minimalist decor. It has been praised for its friendly service and innovative take on Korean cuisine. Kochu is located at 204 Queen Street West in Milky Way, Universe.`,
    logo: "https://d1ralsognjng37.cloudfront.net/5b3857e2-a009-4ae3-8761-576e8a3584e3",
    background:
      "https://duyt4h9nfnj50.cloudfront.net/resized/c4cae0bc90b6dbb83abc9072a0ba389b-w1080-cc.jpg",

    valoration: (Math.random() + 4).toFixed(1),
    tags: "Sushi • Asian • Korean",
  },
  {
    name: "Hokkaido Sushi",
    slug: sluggy("hokkaido-sushi"),
    description: `Hokkaido Sushi is a sushi restaurant located in Vancouver, Canada. The restaurant specializes in traditional Japanese cuisine, particularly sushi and sashimi. The menu at Hokkaido Sushi includes a variety of sushi rolls, nigiri, and sashimi options, as well as hot dishes such as udon noodles and teriyaki chicken. Some of the most popular dishes at the restaurant include the dynamite roll, the spicy tuna roll, and the salmon sashimi. The atmosphere at Hokkaido Sushi is described as cozy and intimate, with a minimalist decor that features traditional Japanese accents. The restaurant is known for its friendly and attentive service, and its commitment to using fresh and high-quality ingredients in its dishes. Overall, Hokkaido Sushi is a well-regarded sushi restaurant in Vancouver, offering a range of traditional Japanese dishes in a welcoming and relaxed atmosphere. It is located at 2120 W Broadway in Vancouver, British Columbia.`,
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/e614f5c15137da551394c7e0767e818b/97ef7458dde62fa918635bc21265d9f5.jpeg",
    background: "https://d1ralsognjng37.cloudfront.net/3def8874-649e-4e5e-ad10-3946dc6c43fa.jpeg",

    valoration: (Math.random() + 4).toFixed(1),
    tags: "Sushi • Asian • Japanese",
  },
  {
    name: "Pi Co. Pizza Bar",
    slug: sluggy("Pi Co. Pizza Bar"),
    description: `Pi Co. Pizza Bar is a fast-casual pizza restaurant chain with locations across Canada. The restaurant is known for its freshly made Neapolitan-style pizzas, which are cooked in a wood-fired oven for a crispy, charred crust and topped with high-quality ingredients.
      At Pi Co., customers can customize their pizzas by choosing from a variety of sauces, cheeses, meats, vegetables, and toppings. The restaurant also offers a selection of signature pizzas, such as the classic Margherita, the spicy Diavola, and the meaty Carnivoro.  
      In addition to pizza, Pi Co. also serves salads, sandwiches, and desserts. The restaurant has a modern and minimalist decor with an open kitchen where customers can watch their pizzas being made. Pi Co. is also committed to sustainability, using eco-friendly packaging and sourcing ingredients from local farmers whenever possible.
      Overall, Pi Co. Pizza Bar is a great choice for anyone looking for delicious, customizable pizza in a casual and contemporary setting.`,
    logo: "https://images4.alphacoders.com/276/276908.jpg",
    background: "https://images4.alphacoders.com/276/276908.jpg",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Pizza • Healthy • Drinks",
  },
  {
    name: "Pizza Nerds",
    slug: sluggy("Pizza Nerds"),
    description: `Pizza Nerds is a casual dining restaurant that specializes in gourmet pizza. The restaurant offers its food for delivery, allowing customers to enjoy their delicious pizzas in the comfort of their own homes.
      The menu at Pizza Nerds features a variety of pizza options with unique and creative toppings, such as the "Prosciutto & Fig" pizza with fresh figs, prosciutto, goat cheese, and balsamic glaze, or the "Vegan Dragon" pizza with vegan cheese, dragon sauce, and veggies. In addition to pizza, the restaurant also offers appetizers like garlic knots and salads, as well as drinks like soda and beer.`,
    logo: "https://images7.alphacoders.com/596/596343.jpg",
    background: "https://images7.alphacoders.com/596/596343.jpg",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Pizza • Healthy • Drinks",
  },
  {
    name: "La Fiesta Latina",
    slug: sluggy("La Fiesta Latina"),
    description: `La Fiesta Latina Restaurant is a vibrant and authentic Mexican food destination located in Canada. As soon as you step through the doors, you'll be transported to the heart of Mexico, with its warm and inviting atmosphere, colorful decor, and lively music that will make you feel like you're in a fiesta.
    The menu at La Fiesta Latina Restaurant is bursting with traditional Mexican dishes made with fresh, high-quality ingredients. Whether you're craving savory tacos, zesty enchiladas, or flavorful fajitas, you'll find it all here. The restaurant also offers a range of vegetarian and gluten-free options, so everyone can indulge in the delicious flavors of Mexico..`,
    logo: "https://d1ralsognjng37.cloudfront.net/c8109a01-ffba-40a5-86e6-1b18a3cf1ea5.jpeg",
    background: "https://d1ralsognjng37.cloudfront.net/c8109a01-ffba-40a5-86e6-1b18a3cf1ea5.jpeg",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Mexican",
  },
  {
    name: "Burrito Gringo (566 Bronson Ave)",
    slug: sluggy("Burrito Gringo (566 Bronson Ave)"),
    description: `Burrito Gringo is a popular Mexican food destination located on 566 Bronson Ave in Canada. As soon as you enter the restaurant, you'll be greeted with a friendly and welcoming atmosphere, with a fun and modern decor that perfectly captures the spirit of Mexican street food.
    The star of the show at Burrito Gringo is, of course, their delicious burritos. These hearty, overstuffed burritos are made with your choice of protein, such as savory shredded beef or tender grilled chicken, and piled high with fresh toppings like crisp lettuce, juicy tomatoes, and tangy salsa. Each burrito is wrapped in a warm flour tortilla and served with a side of crispy tortilla chips, making for a satisfying and delicious meal.`,
    logo: "https://d1ralsognjng37.cloudfront.net/4d4db85e-a5d9-4ecd-9e92-dec6882cf7c4",
    background: "https://d1ralsognjng37.cloudfront.net/4d4db85e-a5d9-4ecd-9e92-dec6882cf7c4",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Mexican • Healthy • Drinks",
  },
  {
    name: "Luxe Blooms Flower Cafe",
    slug: sluggy("Luxe Blooms Flower Cafe"),
    description: `CAFÉ & FLOWER SHOP @luxe.blooms flowers shop • coffee • pastries • desserts • balloons NOW OPEN 254 Dalhousie Street • Calling all brides and bachelorettes!`,
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMzM0YjNlYWM4ZTRhNWMyODYwNTk0ZDU3NDhjZDBkMjIvYTcwZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==",
    background:
      "https://tb-static.uber.com/prod/image-proc/processed_images/334b3eac8e4a5c2860594d5748cd0d22/93b5fd796682c6d5302cd5bec164fe90.jpeg",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Bakery",
  },
  // Chinese Food Companies:
  {
    name: "Mr. Luo Noodle House & Hey Niu Niu 罗罐中米粉",
    slug: sluggy("Mr. Luo Noodle House & Hey Niu Niu 罗罐中米粉"),
    description: ``,
    logo: "https://d1ralsognjng37.cloudfront.net/66e6c7c6-dfaf-41a4-84ed-1ec3f20a6791.jpeg",
    background: "https://d1ralsognjng37.cloudfront.net/66e6c7c6-dfaf-41a4-84ed-1ec3f20a6791.jpeg",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Chinese",
  },
  {
    //15
    name: "Lucky Chinese Restaurant (3774 Lawrence)",
    slug: sluggy("Lucky Chinese Restaurant (3774 Lawrence)"),
    description: ``,
    logo: " https://d1ralsognjng37.cloudfront.net/7e62f3b9-cdd6-44a8-9bb4-143bf009b917.jpeg",
    background: " https://d1ralsognjng37.cloudfront.net/7e62f3b9-cdd6-44a8-9bb4-143bf009b917.jpeg",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Chinese",
  },
  // Japanese Restaurants
  {
    //15
    name: "Bikkuri Japanese Restaurant [SMB]",
    slug: sluggy("Bikkuri Japanese Restaurant [SMB]"),
    description: ``,
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/ad3d620c368e20881077838515ec7c21/1d4135bf27b924efdd528452baa17174.webp",
    background:
      "https://tb-static.uber.com/prod/image-proc/processed_images/ad3d620c368e20881077838515ec7c21/1d4135bf27b924efdd528452baa17174.webp",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Sushi • Japanese",
  },
  {
    //16
    name: "J San Sushi Bar",
    slug: sluggy("J San Sushi Bar"),
    description: ``,
    logo: "https://d1ralsognjng37.cloudfront.net/e719559d-99c9-4e87-9876-5b2929c7a9cc.jpeg",
    background: "https://d1ralsognjng37.cloudfront.net/e719559d-99c9-4e87-9876-5b2929c7a9cc.jpeg",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Sushi • Japanese",
  },
  // Korean Restaurants CategoryId: 17, CompanyId: 12
  {
    name: "The Owl of Minerva",
    slug: sluggy("The Owl of Minerva"),
    description: ``,
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zYWM5YTkyZS00NTRkLTQwNTAtYjMyNi1mODhjMzM5MGU4YzYuanBlZw==",
    background:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zYWM5YTkyZS00NTRkLTQwNTAtYjMyNi1mODhjMzM5MGU4YzYuanBlZw==",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Korean",
  },
  // CategoryId: 17, CompanyId: 13
  {
    name: "Suhan Dumplings",
    slug: sluggy("Suhan Dumplings"),
    description: ``,
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9jOGE0ODgxMS0yY2VlLTQ5OGUtYjVjOS1kNzg0YzYzMDcxNWE=",
    background:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9jOGE0ODgxMS0yY2VlLTQ5OGUtYjVjOS1kNzg0YzYzMDcxNWE=",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Korean",
  },
  // Indian  My Roti Place food CategoryId: 10 , CompanyId: 14
  {
    name: "My Roti Place",
    slug: sluggy("My Roti Place"),
    description: ``,
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3Jlc2l6ZWQvMTUyODEzNTgyNTk4OC13NTUwLTZjLmpwZw==",
    background:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3Jlc2l6ZWQvMTUyODEzNTgyNTk4OC13NTUwLTZjLmpwZw==",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Indian",
  },
  // Indian  La SANI GRILL DUNDAS food CategoryId: 10 , CompanyId: 15
  {
    name: "La Sani Grill Dundas",
    slug: sluggy("La Sani Grill Dundas"),
    description: ``,
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYWQ2OGEwODc4ODEyMzBmZDdmMmE5Zjg4NTdjNTNlMjYvYTcwZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==",
    background:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYWQ2OGEwODc4ODEyMzBmZDdmMmE5Zjg4NTdjNTNlMjYvYTcwZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Indian",
  },
  //Nonna's Best Italian | CompanyId: 16
  {
    name: "Nonna's Best Italian",
    description: ``,
    logo: "https://d1ralsognjng37.cloudfront.net/f4d5efec-1bea-4f66-b915-6ed4cb1152f2.jpeg",
    background: "https://d1ralsognjng37.cloudfront.net/f4d5efec-1bea-4f66-b915-6ed4cb1152f2.jpeg",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Italian • Pizza",
  },
  // The Grand Pizzeria & Bar | CompanyId: 17
  {
    name: "The Grand Pizzeria & Bar",
    description: ``,
    logo: "https://d1ralsognjng37.cloudfront.net/4ad9ddb6-49e5-4c09-96f1-b1eb507ed9d4.jpeg",
    background: "https://d1ralsognjng37.cloudfront.net/4ad9ddb6-49e5-4c09-96f1-b1eb507ed9d4.jpeg",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Italian • Pizza",
  },
  {
    name: "Ichiban Bakery",
    description: ``,
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC84NDZjMWNjMi0yYTAwLTRjNDgtYmEzNC01OWNhYmRkZGZiYzkuanBlZw==",
    background: "https://thumbs.dreamstime.com/b/rich-bakery-9883921.jpg",
    valoration: (Math.random() + 4).toFixed(1),
    tags: "Bakery",
  },
];

module.exports = async () => {
  await Company.bulkCreate(companies);
  console.log("[Database] Se corrió el seeder de Companies.");
};
