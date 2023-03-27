const { Category, Company, Product } = require("../models");
const sequelize = require("../db");

async function index(req, res) {
  const searchArray = decodeURIComponent(req.query.q).split(" ");
  console.log(searchArray);

  let query = "SELECT * FROM products JOIN categories JOIN companies WHERE (";
  for (let i = 0; i < searchArray.length; i++) {
    const word = searchArray[i];
    if (i !== 0) query += " AND";
    query += ` categories.name LIKE '%${word}%'`;
    query += ` OR products.title LIKE '%${word}%'`;
    query += ` OR companies.name LIKE '%${word}%'`;
  }
  query += ")";

  const search = await sequelize.query(query);

  return res.json(search);
}

// Display the specified resource.
async function show(req, res) {
  const category = await Category.findByPk(req.params.id);
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
