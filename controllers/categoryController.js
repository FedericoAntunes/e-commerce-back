const { Category } = require("../models");

async function index(req, res) {
  const categories = await Category.findAll();
  return res.json(categories);
}

// Display the specified resource.
async function show(req, res) {
  const { slug } = req.params;
  const category = await Category.findOne({ where: { slug } });
  return res.json(category);
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

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
  create,
  store,
  edit,
  update,
  destroy,
};
