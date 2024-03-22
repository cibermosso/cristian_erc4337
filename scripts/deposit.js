const hre = require("hardhat");

const EP_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
const WALLET = "0x92EDa8f6390521d2d01E220a4fb894221eC48685";
const PAYMASTER = "0x5033ac6A5a6431a2dc0cd84EE5db692801c925d9";

async function main() {
  const entryPoint = await hre.ethers.getContractAt("EntryPoint", EP_ADDRESS);

  await entryPoint.depositTo(PAYMASTER, {
    value: hre.ethers.parseEther("0.95"),
  });

  console.log("deposit was successful!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});