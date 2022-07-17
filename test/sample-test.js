const { expect } = require("chai");

describe("NFT", function() {
  it("O contrato deve ser implantado, o token cunhado, e a resolução feita para a URI correta", async function() {
    const NFT = await ethers.getContractFactory("MyNFT");
    const nft = await NFT.deploy();
    const URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv";
    await nft.deployed();
    await nft.mint("0x7028f6756a9b815711bc2d37e8d5be23fdac846d", URI)

    expect (awai nft.tokenURI(1)).to.equal(URI)
  });
});