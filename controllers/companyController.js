const { Company, Product } = require("../models");
const formidable = require("formidable");

async function index(req, res) {
  const companies = await Company.findAll({ order: [["createdAt", "DESC"]] });
  return res.json(companies);
}

// Display the specified resource.
async function show(req, res) {
  const company = await Company.findOne({ where: { slug: req.params.slug } });
  return res.json(company);
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
    const companies = await Company.findAll();
    if (fields.name === "" || fields.description === "") {
      return res.json("Fill all the fields.");
    } else {
      const unavailableCompany = companies.some((u) => u.name === fields.name);

      if (unavailableCompany) {
        return res.json("Company name already exist.");
      } else {
        const background = files.background
          ? `/img/${files.background.newFilename}`
          : "/img/default.jpg";
        const logo = files.logo ? `/img/${files.logo.newFilename}` : "/img/default.jpg";

        await Company.create({
          name: fields.name,
          description: fields.description,
          slug: "",
          estimated_time: `20–35 min • $1.49 Delivery Fee • $ `,
          background,
          logo,
        });
        return res.status(201).json("Company stored.");
      }
    }
  });
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  const companies = await Company.findAll();

  const companyId = req.params.id;

  const filteredCompanies = companies.filter((company) => {
    return company.id !== Number(companyId);
  });

  const form = formidable({
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
    multiples: true,
  });

  form.parse(req, async (err, fields, files) => {
    const unavailableComapanyName = filteredCompanies.some((u) => u.name === fields.name);

    if (unavailableComapanyName) {
      return res.json("Unavailable comapany name");
    } else {
      const background = files.background && `/img/${files.background.newFilename}`;

      const logo = files.logo && `/img/${files.logo.newFilename}`;

      const company = await Company.findByPk(companyId);

      const updatedCompany = {
        name: fields.name,
        description: fields.description,
        estimated_time: `20–35 min • $1.49 Delivery Fee • $ `,
        background,
        logo,
      };

      if (!background) delete updatedCompany.background;
      if (!logo) delete updatedCompany.logo;

      await company.update(updatedCompany);
      return res.status(201).json("Company updated");
    }
  });
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const companyId = req.params.id;
  await Product.destroy({
    where: {
      companyId,
    },
  });
  await Company.destroy({
    where: {
      id: companyId,
    },
  });
  return res.json("Company deleted");
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
