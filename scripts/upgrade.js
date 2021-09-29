
const { ethers, upgrades } = require("hardhat");

async function main() {
  const PROXY_ADDRESS = "0xdAd7eE9143f476FB64f2f1BdE10b89b1c8c174DD"; // Change this to the Proxy address of your contract
  console.log("Proxy address: ", PROXY_ADDRESS);
  const ERC20V2 = await ethers.getContractFactory(
    "contracts/ERC20V2.sol:ERC20"
  ); // updated the ERC20.sol, replace this up the artifact for your upgraded contract
  const upgraded = await upgrades.upgradeProxy(PROXY_ADDRESS, ERC20V2);
}

main();
