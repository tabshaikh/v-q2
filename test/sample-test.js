const { expect } = require("chai");

describe("ERC20", function () {
  it("works", async () => {
    const ERC20 = await ethers.getContractFactory("ERC20");
    const BoxV2 = await ethers.getContractFactory("BoxV2");

    const instance = await upgrades.deployProxy(Box, [42]);
    const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);

    const value = await upgraded.value();
    expect(value.toString()).to.equal("42");
  });
});
