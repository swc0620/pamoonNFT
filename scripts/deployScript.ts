import hardhat from 'hardhat';

async function main() {
    console.log("deploy start");

    const PamoonNFT = await hardhat.ethers.getContractFactory("PamoonNFT");
    const pamoonNFT = await PamoonNFT.deploy(
        "PamoonNFT", "PMNFT"
    );
    console.log(`PamoonNFT address:${pamoonNFT.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});