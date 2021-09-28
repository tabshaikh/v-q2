const { ethers, upgrades } = require("hardhat");

async function main() {
  const ERC20 = await ethers.getContractFactory("ERC20");
  const erc20proxy = await upgrades.deployProxy(ERC20, ["Test Token", "TT"], {initializer: "initialize"});
  await erc20proxy.deployed();
  console.log("ERC20 deployed to:", erc20proxy.address);
}

main();
