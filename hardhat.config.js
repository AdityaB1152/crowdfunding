require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "-4o8aP9047-qs0Blmy-ZBIK2f-dvpbti"
const SEPOLIA_PRIVATE_KEY = '99f795bc73862b03351e5a9234c6e5733b84a8dabde78b26be2fb847f1021931'
const CONTRACT_ADDRESS = '0x47029ba83F193FB0885F9CA09eA7d3D73733537A'
const ETHERSCAN_API_KEY = 'QB252N8D6Y451HYJAJN2CTCIH4PWURGX99'

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks : {
    sepolia : {
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[SEPOLIA_PRIVATE_KEY]
    }
  },
  etherscan:{
    apiKey:ETHERSCAN_API_KEY
  }
};
