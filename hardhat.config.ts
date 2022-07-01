import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import { HardhatUserConfig } from "hardhat/types";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: {
      version: "0.8.1",
  },
  networks: {
    baobab: {
      url: "https://kaikas.baobab.klaytn.net:8651",
      chainId: 1001,
      accounts: {
        initialIndex: 0,
        mnemonic: process.env.mnemonic,
        accountsBalance: "100000000000000",
      },
    },
    cypress: {
      url: "https://public-node-api.klaytnapi.com/v1/cypress",
      chainId: 8217,
      accounts: {
        initialIndex: 0,
        mnemonic: process.env.mnemonic,
        accountsBalance: "100000000000000",
      },
      gas: 8500000,
      gasPrice: 250000000000
    }
  }
};

export default config;