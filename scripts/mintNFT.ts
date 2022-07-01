import hardhat from 'hardhat';
import PamoonNFTArtifact from  "../artifacts/contracts/PamoonNFT.sol/PamoonNFT.json";

async function main() {
    console.log("mint start");

    const pamoonNFTContract = await hardhat.ethers.getContractAt(PamoonNFTArtifact.abi, '0xD0F0136Bea0D547c271462D0295965BB4d7705AE');
    await pamoonNFTContract.mint('0xD0F0136Bea0D547c271462D0295965BB4d7705AE', 1, "https://drive.google.com/file/d/1L4OV24IjiX4iIOOqE5FTIqwCfsz54ZF9/view?usp=sharing");
    
    console.log("mint succeeded")
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});