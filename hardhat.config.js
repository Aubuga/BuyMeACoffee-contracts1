
require('dotenv').config({path:__dirname+'/.env'})
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
 require('hardhat-deploy');
 require("@nomiclabs/hardhat-ethers");
 require("@nomiclabs/hardhat-waffle");
 
const EnvGOERLI_URL = process.env.GOERLI_URL;
const EnvPRIVATE_KEY = process.env.PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 


  module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: EnvGOERLI_URL,
      accounts: [EnvPRIVATE_KEY]

    },
  }
};