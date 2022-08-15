require("@nomicfoundation/hardhat-chai-matchers");
require("dotenv").config();

const API_URL = process.env.STAGING_INFURA_URL;
const PRIVATE_KEY = process.env.STAGING_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: API_URL,
      accounts:[`0x${PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};