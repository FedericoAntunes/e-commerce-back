function runSeeders(req, res) {
  require("../seeders/runAllSeeders");
  return res.json("Seeders had run.");
}
module.exports = {
  runSeeders,
};
