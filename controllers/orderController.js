const { Order, OrderProduct, Product } = require("../models");

async function index(req, res) {
  const orders = await Order.findAll({ order: [["updatedAt", "DESC"]] });
  return res.json(orders);
}

// Display the specified resource.
async function show(req, res) {
  const order = await Order.findOne({
    where: { userId: req.auth.id },
    order: [["createdAt", "DESC"]],
  });
  return res.json(order);
}

// Store a newly created resource in storage.
async function store(req, res) {
  const { shippingData, total_price } = req.body;

  const { products, address, payment_method, payment_info } = shippingData;
  let total = 0;
  for (const product of products) {
    total += product.price * product.quantity;
  }

  if (
    address.firstname === "" ||
    address.address === "" ||
    address.lastname === "" ||
    address.city === "" ||
    address.province === "" ||
    address.postal_code === "" ||
    payment_info.card_number === "" ||
    payment_info.name_card === "" ||
    payment_info.expiration_date === "" ||
    payment_info.cvv === ""
  ) {
    return res.status(402).json("Fill all fields.");
  } else {
    if (
      Math.abs(
        total + total * Number(process.env.TAX) + Number(process.env.SHIPPING) - total_price,
      ) < 0.02
    ) {
      const order = await Order.create({
        status: "In process",
        address,
        total_price,
        payment_method,
        payment_info,
        userId: req.auth.id,
      });
      const orderProducts = [];
      for (const product of products) {
        await Product.update(
          { stock: product.stock - product.quantity },
          { where: { id: product.id } },
        );
        const orderProduct = {
          qty: product.quantity,
          unit_price: product.price,
          product_name: product.title,
          orderId: order.id,
          productId: product.id,
          image: product.image,
        };
        orderProducts.push(orderProduct);
        await OrderProduct.create(orderProduct);
      }
      order.dataValues.products = orderProducts;
      return res.status(201).json(order);
    }
  }
  return res.status(406).json({ Error: "Error" });
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...
async function userOrders(req, res) {
  const orders = await Order.findAll({
    order: [["createdAt", "DESC"]],
    where: { userId: req.auth.id },
    include: [{ model: OrderProduct, include: [{ model: Product }] }],
  });
  return res.json(orders);
}

module.exports = {
  index,
  show,
  store,
  edit,
  update,
  destroy,
  userOrders,
};
