require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const mnemonic = "purity inherit install sense abstract secret proof woman tackle leopard canyon cupboard";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      gas: 7500000,
      accounts: {mnemonic: mnemonic}
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    }, 
    matictestnet: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/C3U5HLIr_fquQAKPyUvyYmhBbz7FIbuy",
      chainId: 80001,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    }, 
    fantomtestnet: {
      url: "https://rpc.testnet.fantom.network/",
      chainId: 4002, 
      gasPrice: 50000000000, 
      accounts: {mnemonic: mnemonic}
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: "FVFVXMDPGN6NPWII66E9XYAJ2J4FA6G6M5",//bscscan
    // apiKey: "ERD4CBR4TE95MSZ43V98VJ2ISSMM4ZR2VX",//polygonscan
    // apiKey: '5U4M1GAVKJ14A856IDCVTU9833AYPBZ1YC' //ftmscan
  },
};
