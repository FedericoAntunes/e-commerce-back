const { Company, Product } = require("../models");
const { Op } = require("sequelize");

async function index(req, res) {
  const query = [];
  for (const key in req.query) {
    const element = req.query[key];
    const prop = {};
    if (element === "true") {
      prop[key] = true;
    } else if (element === "false") {
      prop[key] = false;
    } else {
      prop[key] = element;
    }
    query.push(prop);
  }

  console.log(query);
  let products = [];
  try {
    products = await Product.findAll({
      where: {
        [Op.and]: query,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return res.json(products);
}

// Display the specified resource.
async function show(req, res) {
  const company = await Company.findByPk(req.params.id);

  return res.json(company);
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
