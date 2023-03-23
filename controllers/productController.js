const { Company, Product } = require("../models");
const { Op } = require("sequelize");

async function index(req, res) {
  const { companyId, featured } = req.query;
  console.log(companyId);
  if (req.query) {
    const products = await Product.findAll({
      where: {
        /*  [Op.and]: [*/
        companyId: companyId ? companyId : "*",
        /*{ featured: featured === "true" ? true : "*" },*/
        /*  ],*/
      },
    });
    return res.json(products);
  } else {
    const products = await Product.findAll();
    return res.json(products);
  }
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
