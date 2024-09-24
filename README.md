# Decentralized Crowdfunding Application

This is a decentralized crowdfunding application built with **React**, **Solidity**, **Ethers.js**, and **Alchemy**. It allows users to create and contribute to crowdfunding campaigns securely and transparently on the Ethereum blockchain.

## Features

- **Create Campaigns**: Users can create crowdfunding campaigns with target funding goals and deadlines.
- **Contribute to Campaigns**: Contributors can send funds to campaigns via Ethereum.
- **Decentralized & Transparent**: All contributions and campaign details are stored on the Ethereum blockchain, ensuring trust and transparency.
- **Campaign Status Updates**: Real-time updates on campaign funding status.
- **Smart Contract**: Written in Solidity and deployed to Ethereum Sepolia testnet using Alchemy.

## Tech Stack

- **Frontend**: React.js
- **Blockchain**: Ethereum, Solidity
- **Library**: Ethers.js for blockchain interaction
- **Deployment**: Alchemy (Sepolia testnet)

## Prerequisites

- Node.js
- MetaMask wallet
- Alchemy API Key (for deploying smart contracts)

## Getting Started

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/crowdfunding-app.git
    cd crowdfunding-app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory with the following variables:

    ```bash
    REACT_APP_ALCHEMY_API_KEY=your-alchemy-api-key
    REACT_APP_CONTRACT_ADDRESS=your-deployed-contract-address
    ```

4. **Start the development server**:

    ```bash
    npm start
    ```

5. **Deploy the smart contract**:

    - Navigate to the `contracts` folder and use `Hardhat` to compile and deploy your contract to the Sepolia testnet using Alchemy.

    ```bash
    npx hardhat run scripts/deploy.js --network sepolia
    ```

    - Copy the deployed contract address and update it in the `.env` file.

## Smart Contract Overview

The **Crowdfunding Smart Contract** is written in Solidity and deployed on the Ethereum Sepolia testnet. It handles:

- Campaign creation with funding goals and deadlines.
- Secure contributions from users.
- Automatic refunds if campaign goals are not met by the deadline.
- Transfer of funds to campaign owners if the goal is reached.

## Usage

1. **Create a Campaign**: Navigate to the "Create Campaign" section, input details, and submit.
2. **Contribute to a Campaign**: Browse active campaigns and contribute by sending ETH through MetaMask.
3. **Monitor Campaigns**: Check the progress of campaigns in real-time.

## Deployment

This application is deployed to the Sepolia Ethereum testnet. The smart contract can be verified on [Etherscan](https://sepolia.etherscan.io/address/0x47029ba83F193FB0885F9CA09eA7d3D73733537A)).

## License

This project is licensed under the MIT License.
