import { waffle } from "hardhat";
import { expect } from "chai";

import PamoonNFTArtifact from  "../artifacts/contracts/PamoonNFT.sol/PamoonNFT.json";
import { PamoonNFT } from "../typechain-types/contracts/PamoonNFT";

const { deployContract } = waffle;

describe("PamoonNFT", () => {
    let pamoonNFT: PamoonNFT;

    const provider = waffle.provider;
    const [admin, user1] = provider.getWallets();

    beforeEach(async () => {
        pamoonNFT = await deployContract(
            admin,
            PamoonNFTArtifact,
            [
                "2022SummerConcertPamoonIRang", "PamoonIRang"
            ]
        ) as PamoonNFT;
    });

    context('new NFT minted', async () => {
        it('has given data', async () => {
            expect(await pamoonNFT.name()).to.be.equal("2022SummerConcertPamoonIRang");
            expect(await pamoonNFT.symbol()).to.be.equal("PamoonIRang");
        });

        it('mints new NFT and transfers it to the user1', async () => {
            await pamoonNFT.mint(user1.address, 1, "https://www.naver.com");
            expect(await pamoonNFT.ownerOf(1)).to.be.equal(user1.address);
            expect(await pamoonNFT.tokenURI(1)).to.be.equal("https://www.naver.com");

            await expect(pamoonNFT.mint(user1.address, 1, "https://www.naver.com")).to.be.reverted;
        });
    });
});