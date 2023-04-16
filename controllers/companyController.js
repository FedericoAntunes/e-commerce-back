const { Company, Product } = require("../models");
const formidable = require("formidable");
const { Op, Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function index(req, res) {
  const { tag } = req.query;
  if (tag) {
    const filteredCompanies = await Company.findAll({
      where: { tags: { [Op.match]: Sequelize.fn("to_tsquery", tag) } },
    });
    return res.json(filteredCompanies);
  }
  const companies = await Company.findAll({ order: [["updatedAt", "DESC"]] });
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
        let logo = "";
        let background = "";
        if (files.logo) {
          const extLogo = path.extname(files.logo.filepath);
          const newLogoFileName = `logo_${Date.now()}${extLogo}`;
          const { data, error } = await supabase.storage
            .from("no-hunger-bucket")
            .upload(newLogoFileName, fs.createReadStream(files.logo.filepath), {
              cacheControl: "3600",
              upsert: false,
              contentType: files.logo.mimetype,
              duplex: "half",
            });
          logo = data.path;
        }
        if (files.background) {
          const extBg = path.extname(files.background.filepath);
          const newBgFileName = `background_${Date.now()}${extBg}`;
          const { data, error } = await supabase.storage
            .from("no-hunger-bucket")
            .upload(newBgFileName, fs.createReadStream(files.background.filepath), {
              cacheControl: "3600",
              upsert: false,
              contentType: files.background.mimetype,
              duplex: "half",
            });
          background = data.path;
        }

        if (background !== "" && logo !== "") {
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

        await Company.create({
          name: fields.name,
          description: fields.description,
          slug: "",
          estimated_time: `20–35 min • $1.49 Delivery Fee • $ `,
          background: "default-company.jpg",
          logo: "default-company.jpg",
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

  const company = await Company.findByPk(companyId);

  const filteredCompanies = companies.filter((item) => {
    return Number(item.id) !== Number(companyId);
  });

  const form = formidable({
    keepExtensions: true,
    multiples: true,
  });

  form.parse(req, async (err, fields, files) => {
    const unavailableComapanyName = filteredCompanies.some((u) => u.name === fields.name);
    if (fields.name === "") return res.json("Company needs a name.");

    if (unavailableComapanyName) {
      return res.json("Unavailable comapany name");
    } else {
      let logo = "";
      let background = "";

      if (files.logo) {
        const extLogo = path.extname(files.logo.filepath);
        const newLogoFileName = `logo_${Date.now()}${extLogo}`;
        const { data, error } = await supabase.storage
          .from("no-hunger-bucket")
          .upload(newLogoFileName, fs.createReadStream(files.logo.filepath), {
            cacheControl: "3600",
            upsert: false,
            contentType: files.logo.mimetype,
            duplex: "half",
          });
        logo = data.path;
      }
      if (files.background) {
        const extBg = path.extname(files.background.filepath);
        const newBgFileName = `background_${Date.now()}${extBg}`;
        const { data, error } = await supabase.storage
          .from("no-hunger-bucket")
          .upload(newBgFileName, fs.createReadStream(files.background.filepath), {
            cacheControl: "3600",
            upsert: false,
            contentType: files.background.mimetype,
            duplex: "half",
          });
        background = data.path;
      }

      await company.update({
        name: fields.name,
        description: fields.description,
        estimated_time: `20–35 min • $1.49 Delivery Fee • $ `,
        background: background === "" ? company.background : background,
        logo: logo === "" ? company.logo : logo,
      });
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
