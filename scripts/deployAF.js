const hre = require("hardhat");

async function main() {
  const SimpleAccountFactory = await hre.ethers.getContractFactory("WalletFactory");
  const simpleAccountFactory = await SimpleAccountFactory.deploy('0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789');

  await simpleAccountFactory.deployed();

  console.log(`AF deployed to ${simpleAccountFactory.address}`);

  //console.log(`AF deployed to ${simpleAccountFactory.target}`);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
