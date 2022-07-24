import { ethers } from "hardhat";

const carURIs = [
  "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
  "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1601679147136-22d1032399e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80",
];

async function main() {
  const CarNFT = await ethers.getContractFactory("CarNFT");
  const carNFT = await CarNFT.attach(
    "0x9F1d984307F1B77F7D9c6FE27472AAbc40aE5683"
  );

  const tokenIds: string[] = [];

  for (let i = 0; i < carURIs.length; i++) {
    const carURI = carURIs[i];
    const tokenId = await carNFT.mintCar(carURI);

    tokenIds.push(tokenId.data);
  }

  console.log("CarNFT created with tokenId", tokenIds);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
