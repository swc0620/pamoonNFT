# Pamoon NFT
## 1. Install packages
```
git clone <this repository>
cd pamoonNFT
yarn install
```
## 2. Set .env file
* add .env file under pamoonNFT/
* add \<mnemonic==\<your kaikas wallet mnemonic>> to .env file

## 3. Run if test code works
```
yarn hardhat compile
yarn hardhat test ./test/pamoonNFT.test.ts
```