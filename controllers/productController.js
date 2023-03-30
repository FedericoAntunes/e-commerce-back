const { Company, Product } = require("../models");
const { Op } = require("sequelize");
const formidable = require("formidable");

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

  let products = [];
  try {
    products = await Product.findAll({
      where: {
        [Op.and]: query,
      },
      include: Company,
    });
  } catch (error) {
    console.log(error);
  }

  return res.json(products);
}

// Display the specified resource.
async function show(req, res) {
  const companyId = req.query.id;
  const companyProducts = await Product.findAll({ where: { companyId } });

  return res.json(companyProducts);
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  const productId = req.params.id;

  const form = formidable({
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
    multiples: true,
  });
  form.parse(req, async (err, fields, files) => {
    if (false) {
      res.json("Fill all the fields.");
    } else {
      const image = files.image;
      const logo = files.logo;
      const product = await Product.findByPk(productId);

      await product.update({
        title: fields.title,
        price: fields.price,
        description: fields.description,
        featured: fields.featured,
        stock: fields.stock,
        image,
        logo,
      });
      return res.status(201).json("Product updated");
    }
  });
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const productId = req.params.id;
  await Product.destroy({
    where: {
      id: productId,
    },
  });
  return res.json("Product deleted");
}

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
