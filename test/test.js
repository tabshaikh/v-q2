const { expect } = require("chai");

describe("ERC20", function () {
  it("works", async () => {
    const ERC20 = await ethers.getContractFactory("contracts/ERC20.sol:ERC20");
    const ERC20V2 = await ethers.getContractFactory(
      "contracts/ERC20V2.sol:ERC20"
    );

    const instance = await upgrades.deployProxy(ERC20, ["Test Token", "TT"], {
      initializer: "initialize",
    });

    let decimals = await instance.decimals();
    expect(decimals).to.equal(18);

    const upgraded = await upgrades.upgradeProxy(instance.address, ERC20V2);

    decimals = await upgraded.decimals();
    expect(decimals).to.equal(8);
  });
});
