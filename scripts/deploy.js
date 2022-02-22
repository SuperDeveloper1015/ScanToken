const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Token = await ethers.getContractFactory("SCANDEFIv2");
    // const token = await Token.deploy();
    const token = await Token.deploy("0x8e97bCe3e1ba755fbF49aB812cE9b6CC48D80A6B", "0x8e97bCe3e1ba755fbF49aB812cE9b6CC48D80A6B");

    // const Token = await ethers.getContractFactory("Election");
    // const token = await Token.deploy();

    // const ICOcontract = await ethers.getContractFactory("Presale");
    // const token = await ICOcontract.deploy("0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832", "0xc3Ef8752569Fa34476C872df8a76A809c0BcA905", "0xdD3091c79342569C46B323A86f3fecEb457C85c4");
    console.log("Contract address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
});