const { Company } = require("../models");

async function index(req, res) {
  const companies = await Company.findAll();
  return res.json(companies);
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
