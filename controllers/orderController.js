const { Order, OrderProduct } = require("../models");

async function index(req, res) {
  const orders = await Order.findAll({ order: [["createdAt", "DESC"]] });
  return res.json(orders);
}

// Display the specified resource.
async function show(req, res) {
  const order = await Order.findByPk(req.params.id);
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
  if (Math.abs(total - total_price) < 0.02) {
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
    console.log(order);
    return res.status(201).json(order);
  }
  return res.status(406).json("Error");
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  edit,
  update,
  destroy,
};
