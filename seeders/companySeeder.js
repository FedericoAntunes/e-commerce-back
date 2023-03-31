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
    description: `Welcome to La Pasiva! As you step inside, you'll be greeted with a warm and inviting atmosphere that sets the perfect tone for a delightful dining experience. I can already smell the delicious aroma of Uruguayan cuisine wafting through the air.
    At La Pasiva, we're proud to serve up classic South American dishes that are sure to satisfy your cravings. Our chivito sandwiches are a fan favorite, made with tender beef, ham, bacon, mozzarella cheese, lettuce, tomato, and mayo. They're served on a fresh bun that perfectly complements the flavors of the sandwich.
    As you peruse the menu, you'll notice a variety of other dishes that showcase the unique flavors of Uruguayan cuisine. Our empanadas, for example, are filled with a savory meat mixture and baked to crispy perfection. And of course, no meal at La Pasiva would be complete without trying our famous dulce de leche ice cream.
    Whether you're joining us for a quick bite or a leisurely meal with friends and family, we strive to make your experience at La Pasiva unforgettable. Our friendly staff will go above and beyond to ensure that your meal is nothing short of excellent. We hope you'll join us soon for a taste of Uruguay right here in our restaurant.`,
    logo: "https://images.rappi.com.uy/restaurants_logo/lapasiva-centro-1581453375579.png?e=webp&q=80&d=200x200",
    background:
      "https://images.deliveryhero.io/image/pedidosya/header-backgrounds/mobile/pizza-4.jpg?quality=100&width=550&webp=1",
  },
  {
    name: "La Cigale",
    slug: sluggy("La Cigale"),
    description: `La Cigale is a well-established artisanal ice cream chain in Uruguay, known for its dedication to crafting high-quality, purely artisanal ice cream using only the finest ingredients. With a strong presence in almost every neighborhood in Montevideo and also in Canelones, La Cigale has become a household name and a favorite indulgence for locals year-round.
    Despite its growth in the number of locations, La Cigale has maintained its artisanal processes, which is what makes it unique. The chain combines tradition, innovation, and dedication in its flavors, offering a wide variety of indulgent options that cater to different tastes.
    La Cigale is committed to providing its customers with an excellent experience that goes beyond just its high-quality products. The chain also places great importance on creating an attractive and inviting environment that invites customers to indulge in their ice cream creations. As such, La Cigale is always in search of new ways to innovate, whether it be in the development of new flavors, products, territories, machinery, or distribution. Innovation is and always will be an essential part of La Cigale's essence.
    `,
    logo: "https://images.deliveryhero.io/image/pedidosya/restaurants/la-cigale-nuevo-centro.jpg?quality=100&width=100",
    background:
      "https://images.deliveryhero.io/image/pedidosya/profile-headers/la-cigale-pocitos-custom-header.jpg?quality=70&width=1280&webp=1",
  },
  {
    name: "Mc Donald's",
    slug: sluggy("Mc Donald's"),
    description: `Welcome to McDonald's Uruguay! As soon as you walk through our doors, you'll be greeted by the familiar smell of our delicious burgers and fries. We're proud to offer our customers a wide variety of options that cater to all tastes and preferences.
    Our menu features classic favorites like the Big Mac and Quarter Pounder with Cheese, as well as a range of sandwiches, wraps, and salads. We also offer a breakfast menu that includes items such as Egg McMuffins and hotcakes. And let's not forget about our famous fries - crispy and golden on the outside, fluffy on the inside.
    At McDonald's, we're committed to providing our customers with a fast and convenient dining experience. Whether you're in a hurry and need to grab something on the go or are looking to sit down and enjoy a meal with family and friends, we have options for you.
    We also take great pride in our commitment to sustainability and responsibility. We're always looking for ways to reduce waste and our environmental impact, and we use only the highest-quality ingredients that meet our strict standards.
    At McDonald's Uruguay, we strive to provide our customers with delicious, high-quality food that's served with a smile. We hope you'll come visit us soon and see what we have to offer!`,
    logo: "https://images.rappi.com.uy/restaurants_logo/111919-1543425311.png?e=webp&d=100x100&q=100",
    background:
      "https://images.deliveryhero.io/image/pedidosya/profile-headers/mc-donalds-uruguay-header-custom-2020.jpg?quality=100&width=1440&webp=1",
  },
  {
    name: "Burger King",
    slug: sluggy("Burger King"),
    description: `Welcome to Burger King Uruguay! As soon as you step inside, you'll be greeted by the mouth-watering aroma of our flame-grilled burgers. We're proud to offer our customers a wide variety of options that cater to all tastes and preferences.
    Our menu features classic burgers like the Whopper and Cheeseburger, as well as a range of chicken sandwiches, salads, sides, and desserts. We also have a breakfast menu that includes items such as croissan'wiches and pancakes.
    At Burger King, we're committed to using only the freshest ingredients and serving food that's always hot and fresh. We take great care in grilling our burgers to perfection, and our flame-grilled technique is what sets us apart from other fast food restaurants.
    We're also committed to providing our customers with a fast and convenient dining experience. Whether you're in a hurry and need to grab something on the go or are looking to sit down and enjoy a meal with family and friends, we have options for you.
    At Burger King Uruguay, we believe in making a positive impact in our communities. We're always looking for ways to give back and support local organizations and initiatives.
    We're proud to be a part of the Burger King family and to serve our customers with delicious, high-quality food. Come visit us today and taste the difference for yourself!`,
    logo: "https://images.rappi.com.uy/restaurants_logo/nuevo-logo-bk-1610117467515.png?e=webp&d=5x5&q=100",
    background:
      "https://images.deliveryhero.io/image/pedidosya/profile-headers/burger-king-ejido-custom-header.jpg?quality=70&width=1280&webp=1",
  },
  {
    name: "Medialunas Calentitas",
    slug: sluggy("Medialunas Calentitas"),
    description: ``,
    logo: "https://images.rappi.com.uy/restaurants_logo/mediaslunascalentitas-logo-1-1567609569925.png?e=webp&d=100x100&q=100",
    background:
      "https://images.rappi.com.uy/restaurants_background/uymedialunascalentitass-1666634475880.jpg?e=webp&d=700x100&q=100",
  },
  {
    name: "Avenida Bar",
    slug: sluggy("Avenida Bar"),
    description: ``,
    logo: "https://images.rappi.com.uy/restaurants_logo/avenidabar-1568314996192.png?e=webp&d=100x100&q=100",
    background:
      "https://images.rappi.com.uy/restaurants_background/uyavenidabar-1665777769766.jpg?e=webp&d=700x100&q=100",
  },
  {
    name: "Kochu Restaurant",
    slug: sluggy("kochu"),
    description: `Kochu is a contemporary Korean restaurant that serves dishes with a modern twist. The restaurant offers a variety of Korean-inspired small plates and entrees, including dishes such as Korean fried chicken, bibimbap, and kimchi pancake. They also offer a selection of craft cocktails and a wine list that features both international and local wines. The restaurant has a modern and elegant atmosphere with wooden accents and minimalist decor. It has been praised for its friendly service and innovative take on Korean cuisine. Kochu is located at 204 Queen Street West in Milky Way, Universe.`,
    logo: "https://d1ralsognjng37.cloudfront.net/5b3857e2-a009-4ae3-8761-576e8a3584e3",
    background:
      "https://duyt4h9nfnj50.cloudfront.net/resized/c4cae0bc90b6dbb83abc9072a0ba389b-w1080-cc.jpg",
  },
  {
    name: "Hokkaido Sushi",
    slug: sluggy("hokkaido-sushi"),
    description: `Hokkaido Sushi is a sushi restaurant located in Vancouver, Canada. The restaurant specializes in traditional Japanese cuisine, particularly sushi and sashimi. The menu at Hokkaido Sushi includes a variety of sushi rolls, nigiri, and sashimi options, as well as hot dishes such as udon noodles and teriyaki chicken. Some of the most popular dishes at the restaurant include the dynamite roll, the spicy tuna roll, and the salmon sashimi. The atmosphere at Hokkaido Sushi is described as cozy and intimate, with a minimalist decor that features traditional Japanese accents. The restaurant is known for its friendly and attentive service, and its commitment to using fresh and high-quality ingredients in its dishes. Overall, Hokkaido Sushi is a well-regarded sushi restaurant in Vancouver, offering a range of traditional Japanese dishes in a welcoming and relaxed atmosphere. It is located at 2120 W Broadway in Vancouver, British Columbia.`,
    logo: "https://tb-static.uber.com/prod/image-proc/processed_images/e614f5c15137da551394c7e0767e818b/97ef7458dde62fa918635bc21265d9f5.jpeg",
    background: "https://d1ralsognjng37.cloudfront.net/3def8874-649e-4e5e-ad10-3946dc6c43fa.jpeg",
  },
  {
    name: "Pi Co. Pizza Bar",
    slug: sluggy("Pi Co. Pizza Bar"),
    description: `Pi Co. Pizza Bar is a fast-casual pizza restaurant chain with locations across Canada. The restaurant is known for its freshly made Neapolitan-style pizzas, which are cooked in a wood-fired oven for a crispy, charred crust and topped with high-quality ingredients.
      At Pi Co., customers can customize their pizzas by choosing from a variety of sauces, cheeses, meats, vegetables, and toppings. The restaurant also offers a selection of signature pizzas, such as the classic Margherita, the spicy Diavola, and the meaty Carnivoro.  
      In addition to pizza, Pi Co. also serves salads, sandwiches, and desserts. The restaurant has a modern and minimalist decor with an open kitchen where customers can watch their pizzas being made. Pi Co. is also committed to sustainability, using eco-friendly packaging and sourcing ingredients from local farmers whenever possible.
      Overall, Pi Co. Pizza Bar is a great choice for anyone looking for delicious, customizable pizza in a casual and contemporary setting.`,
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hYTFkN2U4NC04NTc0LTQ5NDgtYWRjZS01YTYzM2U5NjIyODIuanBlZw==",
    background:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=640/height=512/quality=100/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hYTFkN2U4NC04NTc0LTQ5NDgtYWRjZS01YTYzM2U5NjIyODIuanBlZw==",
  },
  {
    name: "Pizza Nerds",
    slug: sluggy("Pizza Nerds"),
    description: `Pizza Nerds is a casual dining restaurant that specializes in gourmet pizza. The restaurant offers its food for delivery, allowing customers to enjoy their delicious pizzas in the comfort of their own homes.
      The menu at Pizza Nerds features a variety of pizza options with unique and creative toppings, such as the "Prosciutto & Fig" pizza with fresh figs, prosciutto, goat cheese, and balsamic glaze, or the "Vegan Dragon" pizza with vegan cheese, dragon sauce, and veggies. In addition to pizza, the restaurant also offers appetizers like garlic knots and salads, as well as drinks like soda and beer.`,
    logo: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTU1NTQ4MTBkODc4N2JlYjQ2NDViNTNmOGY3M2NiMDMvYTcwZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==",
    background:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=100/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTU1NTQ4MTBkODc4N2JlYjQ2NDViNTNmOGY3M2NiMDMvYTcwZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==",
  },
  {
    name: "La Fiesta Latina",
    slug: sluggy("La Fiesta Latina"),
    description: `La Fiesta Latina Restaurant is a vibrant and authentic Mexican food destination located in Canada. As soon as you step through the doors, you'll be transported to the heart of Mexico, with its warm and inviting atmosphere, colorful decor, and lively music that will make you feel like you're in a fiesta.
    The menu at La Fiesta Latina Restaurant is bursting with traditional Mexican dishes made with fresh, high-quality ingredients. Whether you're craving savory tacos, zesty enchiladas, or flavorful fajitas, you'll find it all here. The restaurant also offers a range of vegetarian and gluten-free options, so everyone can indulge in the delicious flavors of Mexico..`,
    logo: "https://d1ralsognjng37.cloudfront.net/4adb042e-a7b4-46af-9359-7d03018091cf.jpeg",
    background: "https://d1ralsognjng37.cloudfront.net/4adb042e-a7b4-46af-9359-7d03018091cf.jpeg",
  },
  {
    name: "Burrito Gringo (566 Bronson Ave)",
    slug: sluggy("Burrito Gringo (566 Bronson Ave)"),
    description: `Burrito Gringo is a popular Mexican food destination located on 566 Bronson Ave in Canada. As soon as you enter the restaurant, you'll be greeted with a friendly and welcoming atmosphere, with a fun and modern decor that perfectly captures the spirit of Mexican street food.
    The star of the show at Burrito Gringo is, of course, their delicious burritos. These hearty, overstuffed burritos are made with your choice of protein, such as savory shredded beef or tender grilled chicken, and piled high with fresh toppings like crisp lettuce, juicy tomatoes, and tangy salsa. Each burrito is wrapped in a warm flour tortilla and served with a side of crispy tortilla chips, making for a satisfying and delicious meal.`,
    logo: "https://d1ralsognjng37.cloudfront.net/4adb042e-a7b4-46af-9359-7d03018091cf.jpeg",
    background: "https://d1ralsognjng37.cloudfront.net/4adb042e-a7b4-46af-9359-7d03018091cf.jpeg",
  },
];

module.exports = async () => {
  await Company.bulkCreate(companies);
  console.log("[Database] Se corrió el seeder de Companies.");
};
