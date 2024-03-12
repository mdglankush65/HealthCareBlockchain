
var optHealthCare = artifacts.require("../contracts/optimized_healthCare.sol");
var docAddRecord = artifacts.require("../contracts/DoctorAddRecord.sol");
var simpleStorage = artifacts.require("../contracts/SimpleStorage.sol");
module.exports = function(deployer) {
  deployer.deploy(optHealthCare);
  deployer.deploy(docAddRecord);
  deployer.deploy(simpleStorage, "Temporary Data");
};
