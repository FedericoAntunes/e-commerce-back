const { Company, Product, Category } = require("../models");
const { Op } = require("sequelize");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

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
      order: [["updatedAt", "DESC"]],
    });
  } catch (error) {
    console.log(error);
  }

  return res.json(products);
}

// Display the specified resource.
async function show(req, res) {
  const productId = req.params.id;

  const product = await Product.findOne({
    where: { id: productId },
    include: [{ model: Category }],
  });

  return res.json(product);
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
      fields.in_offer === "" ||
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
        if (files.image) {
          const ext = path.extname(files.image.filepath);
          const newFileName = `image_${Date.now()}${ext}`;
          const { data, error } = await supabase.storage
            .from("no-hunger-bucket")
            .upload(newFileName, fs.createReadStream(files.image.filepath), {
              cacheControl: "3600",
              upsert: false,
              contentType: files.image.mimetype,
              duplex: "half",
            });
          console.log(data);
          await Product.create({
            title: fields.title,
            price: Number(fields.price),
            description: fields.description,
            in_offer: fields.in_offer,
            slug: "",
            stock: fields.stock,
            companyId: fields.companyId,
            categoryId: fields.categoryId,
            image: data.path,
          });
          return res.status(201).json("Product stored.");
        }
        await Product.create({
          title: fields.title,
          price: Number(fields.price),
          description: fields.description,
          in_offer: fields.in_offer,
          slug: "",
          stock: fields.stock,
          companyId: fields.companyId,
          categoryId: fields.categoryId,
          image: "default-product.jpg",
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
    return Number(product.id) !== Number(productId);
  });

  const form = formidable({
    keepExtensions: true,
    multiples: true,
  });

  form.parse(req, async (err, fields, files) => {
    const unavailableProduct = filteredProducts.some((u) => u.title === fields.title);

    if (unavailableProduct) return res.json("Product name already in use.");

    if (
      fields.title === "" ||
      fields.price === "" ||
      fields.in_offer === "" ||
      fields.companyId === "" ||
      fields.categoryId === "" ||
      fields.stock === ""
    ) {
      return res.json("Fill all the fields.");
    } else {
      if (files.image) {
        const ext = path.extname(files.image.filepath);
        const newFileName = `image_${Date.now()}${ext}`;
        const { data, error } = await supabase.storage
          .from("no-hunger-bucket")
          .upload(newFileName, fs.createReadStream(files.image.filepath), {
            cacheControl: "3600",
            upsert: false,
            contentType: files.image.mimetype,
            duplex: "half",
          });
        console.log(data);
        await Product.update({
          title: fields.title,
          price: Number(fields.price),
          description: fields.description,
          in_offer: fields.in_offer,
          stock: fields.stock,
          categoryId: fields.categoryId,
          image: data.path,
        });
        return res.status(201).json("Product updated.");
      }
      const updatedProduct = {
        title: fields.title,
        price: Number(fields.price),
        description: fields.description,
        in_offer: fields.in_offer,
        stock: fields.stock,
        categoryId: fields.categoryId,
        image: "default-product.jpg",
      };

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
