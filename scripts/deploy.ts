import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`\nDeploying onchain NFT with account: ${deployer.address}`);
  
  // Deploy EbubeOnChainNFT contract
  const EbubeOnChainNFT = await ethers.getContractFactory("EbubeOnChainNFT");
  const onchainNFT = await EbubeOnChainNFT.deploy("EbubeOnChainNFT", "ENFT", deployer.address);
  await onchainNFT.waitForDeployment();
  const deployedAddress = await onchainNFT.getAddress();
  console.log(`\nOnchain NFT deployed to: ${deployedAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
