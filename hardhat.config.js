require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const INFURA_API_KEY = ""
const MAINNET_PRIVATE_KEY = "";
const ETHERSCAN_API_KEY = "";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: `${ETHERSCAN_API_KEY}`,
  },
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`${MAINNET_PRIVATE_KEY}`]
    },
    bsc: {
      url: `https://bsc-dataseed1.binance.org`,
      accounts: [`${MAINNET_PRIVATE_KEY}`]
    }
  }
};
