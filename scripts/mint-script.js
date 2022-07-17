const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "QmZdAxdqFnKqBM1TYokyZeo6bfFKA6cFay6XtxtYozFjrb"
  const WALLET_ADDRESS = "0xA21017658d860DA0068011Af417D494aee713FB7"
  const CONTRACT_ADDRESS = "0x0f6Ae7B0a84A48E6A938ACBf82300cc8e669d642"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT cunhado:", contract);
}
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});