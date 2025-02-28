import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require ('dotenv').config();
require('@openzeppelin/hardhat-upgrades');

const { 
  ALCHEMY_SEPOLIA_API_KEY_URL, 
  ACCOUNT_PRIVATE_KEY, 
  ETHERSCAN_API_KEY, 
  ALCHEMY_BASE_API_KEY_URL,
  ALCHEMY_LISK_SEPOLIA_API_KEY_URL,
} = process.env

const config: HardhatUserConfig = {
  solidity: "0.8.28",

  networks: {
    sepolia: {
      url: ALCHEMY_SEPOLIA_API_KEY_URL,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
    lisk_sepolia:{
      url: ALCHEMY_LISK_SEPOLIA_API_KEY_URL,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    // apiKey: ETHERSCAN_API_KEY,
    apiKey: {
      "lisk_sepolia": "empty"
    },
    customChains: [
      {
        network: "lisk_sepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com"
        }
      }
    ]
  },
  sourcify: {
    enabled: false
  }
};

export default config;