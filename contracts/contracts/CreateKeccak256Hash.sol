// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
contract CreateKeccak256Hash {
    
    // A mapping that will store the hash
    mapping(address => bytes32) public hashes;

    constructor() {}

    // The hash is the bid + a nonce
    function findHashOfAmount(uint256 amount, uint256 nonce) public isAuctionStarted {
        uint256 prehashedValue = amount + nonce;
        string memory hashedString = Strings.toString(prehashedValue);
        bytes32 hash = keccak256(abi.encode(hashedString));
        hashes[msg.sender] = hash;
    }
}
