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
];

module.exports = async () => {
  await Company.bulkCreate(companies);
  console.log("[Database] Se corrió el seeder de Companies.");
};
