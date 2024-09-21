const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const CrowdFundingModule = buildModule("CrowdFundingModule", (m)=>{
    const crowdFunding = m.contract("CrowdFunding");

    return {crowdFunding}
});

module.exports = CrowdFundingModule;