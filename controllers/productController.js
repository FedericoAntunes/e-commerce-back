const { Company, Product, Category } = require("../models");
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
      include: [Company, Category],
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
async function store(req, res) {
  const form = formidable({
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
    multiples: true,
  });

  form.parse(req, async (err, fields, files) => {
    const products = await Product.findAll();
    if (
      fields.title === "" ||
      fields.price === "" ||
      fields.description === "" ||
      fields.featured === "" ||
      fields.companyId === "" ||
      fields.categoryId === "" ||
      fields.stock === ""
    ) {
      return res.json("Fill all the fields.");
    } else {
      const unavailableProduct = products.some((u) => u.title === fields.title);

      if (unavailableProduct) {
        return res.json("Product already exist.");
      } else {
        const image = files.image ? `/img/${files.image.newFilename}` : "/img/default.jpg";
        const logo = files.logo ? `/img/${files.logo.newFilename}` : "/img/default.jpg";

        await Product.create({
          title: fields.title,
          price: Number(fields.price),
          description: fields.description,
          featured: fields.featured,
          slug: "",
          stock: fields.stock,
          companyId: fields.companyId,
          categoryId: fields.categoryId,
          image,
          logo,
        });
        return res.status(201).json("Product stored.");
      }
    }
  });
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  const products = await Product.findAll();

  const productId = req.params.id;

  const filteredProducts = products.filter((product) => {
    return product.id !== Number(productId);
  });

  const form = formidable({
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
    multiples: true,
  });

  form.parse(req, async (err, fields, files) => {
    const unavailableProduct = filteredProducts.some((u) => u.title === fields.title);
    const image = files.image && `/img/${files.image.newFilename}`;
    const logo = files.logo && `/img/${files.logo.newFilename}`;

    if (unavailableProduct) {
      res.json("Product name already in use.");
    } else {
      const updatedProduct = {
        title: fields.title,
        price: Number(fields.price),
        description: fields.description,
        featured: fields.featured,
        stock: fields.stock,
        categoryId: fields.categoryId,
        image,
        logo,
      };
      if (!image) delete updatedProduct.image;
      if (!logo) delete updatedProduct.logo;

      const product = await Product.findByPk(productId);

      await product.update(updatedProduct);
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
