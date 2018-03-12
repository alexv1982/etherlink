var SafeMathMod = artifacts.require("./SafeMathMod.sol");
var ELink = artifacts.require("./ELink.sol");
var Test = artifacts.require("./Test.sol");

module.exports = function(deployer, network) {
  deployer.deploy(SafeMathMod);
  deployer.link(SafeMathMod, ELink);
  deployer.deploy(ELink);
  if(network !== "live") {
    deployer.deploy(Test);
  }
};
