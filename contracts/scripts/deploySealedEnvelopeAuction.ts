import { ethers } from "hardhat";

async function main() {
  const address = "0x9F1d984307F1B77F7D9c6FE27472AAbc40aE5683";
  const SealedEnvelopeAuction = await ethers.getContractFactory(
    "SealedEnvelopeAuction"
  );
  const sealedEnvelopeAuction = await SealedEnvelopeAuction.deploy(address);

  await sealedEnvelopeAuction.deployed();

  console.log(
    "SealedEnvelopeAuction contract deployed to",
    sealedEnvelopeAuction.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
