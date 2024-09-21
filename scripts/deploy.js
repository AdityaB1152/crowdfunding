const { ethers } = require("hardhat");



async function main() {
    const [deployer] = await ethers.getSigners();

    const CrowdFunding = await ethers.getContractFactory("CrowdFunding");
    const crowdfunding = await CrowdFunding.deploy() ;
    console.log("Contract Address:",crowdfunding.getAddress())
}

main().then(()=>{
    process.exit(0);
}).catch((error)=>{
    console.error(error)
})