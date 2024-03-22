const { HardhatUserConfig } = require('hardhat/config');
require('hardhat-deploy');
require('@nomiclabs/hardhat-etherscan');
require("dotenv").config();
require('@nomiclabs/hardhat-waffle');
require('@typechain/hardhat');
require('solidity-coverage');
const fs = require('fs');

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

const mnemonicFileName = process.env.MNEMONIC_FILE || `${process.env.HOME}/.secret/testnet-mnemonic.txt`;
let mnemonic = 'test '.repeat(11) + 'junk';
if (fs.existsSync(mnemonicFileName)) { mnemonic = fs.readFileSync(mnemonicFileName, 'ascii'); }

function getNetwork1(url) {
  return {
    url,
    accounts: { mnemonic }
  };
}

const optimizedComilerSettings = {
  version: '0.8.19',
  settings: {
    optimizer: { enabled: true, runs: 1000000 },
    viaIR: true
  }
};

const config = {
  solidity: {
    compilers: [{
      version: '0.8.19',
      settings: {
        optimizer: { enabled: true, runs: 1000000 }
      }
    }],
    overrides: {
      'contracts/core/EntryPoint.sol': optimizedComilerSettings,
      'contracts/samples/SimpleAccount.sol': optimizedComilerSettings
    }
  },
  networks: {
    sepolia: {
      url: `https://arbitrum-sepolia.infura.io/v3/5a296f5e8f59423f9dff5f02170770a2`, 
      accounts:[`f967b8292272abf5eb33cc532a42272746741b775d2d1209bd57fe8a963863bd`]
      //accounts: [`f8da9cd8ee35d9da851b768c3ea8997cb7c2f54f4960b2938f314ba243f0111d`]
    }
  },
  mocha: {
    timeout: 10000
  },
  etherscan: {
    apiKey: 'A3T3YJ3TG95DQHVH3SRJMXTSC6T41T4BV6'
  },
  sourcify: {
    enabled: true
  }
};

if (process.env.COVERAGE != null) {
  config.solidity = config.solidity.compilers[0];
}

module.exports = config;
