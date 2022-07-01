//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.1;

import "@klaytn/contracts/KIP/token/KIP17/extensions/KIP17URIStorage.sol";
import "@klaytn/contracts/access/Ownable.sol";

contract PamoonNFT is KIP17URIStorage, Ownable {
    constructor(
        string memory name_,
        string memory symbol_
    ) KIP17(name_, symbol_) {}

    function mint(address _to, uint256 _tokenId, string calldata _tokenURI) external onlyOwner returns (uint256) {
        super._safeMint(_to, _tokenId);
        super._setTokenURI(_tokenId, _tokenURI);

        return _tokenId;
    }
}