const runAllSeeders = require("../seeders/runAllSeeders");

function runSeeders(req, res) {
  runAllSeeders();
  return res.json("Seeders had run.");
}
module.exports = {
  runSeeders,
};
