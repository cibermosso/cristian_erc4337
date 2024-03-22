const {ethers} = require('hardhat');

const ADDRESS_SCW = "0x0e2F26fa1289094515F6EF5Bb66401cC051d79f7";

async function main() {
  const WalletInstance = await ethers.getContractAt('Wallet', ADDRESS_SCW);
  console.log(WalletInstance);

  try {
    const walletInstance = await WalletInstance.getOwners();
    console.log(walletInstance);
  } catch (error) {
    console.error("Error al obtener propietarios:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
