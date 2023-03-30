const { Order, OrderProduct } = require("../models");

async function index(req, res) {
  const orders = await Order.findAll();
  return res.json(orders);
}

// Display the specified resource.
async function show(req, res) {
  const order = await Order.findByPk(req.params.id);
  return res.json(order);
}

// Store a newly created resource in storage.
async function store(req, res) {
  const { products, address, payment_method, payment_info } = req.body;
  const order = await Order.create({
    status: "In process",
    address,
    payment_method,
    payment_info,
    userId : req.auth.id,
  });
  for (const product of products) {
    await OrderProduct.create({
      qty: product.quantity,
      unit_price: product.price,
      product_name: product.title,
      orderId: order.id,
      productId: product.id,
    });
  }
  return res.status(201).json("Order created successfully");
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
