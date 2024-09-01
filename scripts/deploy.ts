import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Get the balance of the deployer using the provider
  const balance = await deployer.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.formatEther(balance));

  // Make sure to replace "GoofyGoober" with your own ERC-20 contract name
  const Token = await ethers.getContractFactory("GoofyGoober");
  const token = await Token.deploy();

  console.log("Token address:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
