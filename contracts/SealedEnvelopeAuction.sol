// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract SealedEnvelopeAuction {
    address seller;

    IERC721 public erc721Contract;
    uint256 tokenId;
    uint256 public endOfBidding;
    uint256 public endOfRevealing;

    mapping(address => uint256) public balances;
    mapping(address => bytes32) public hashes;

    address highestBidder;
    uint256 highestBid;

    bool isWithdrawn;
    // Only true once the erc721 token is deposited
    bool isStarted;

    // initializes contract with the erc721 contract
    constructor(IERC721 _erc721Contract) {
        erc721Contract = _erc721Contract;

        seller = msg.sender;

        // sets variables
        highestBid = 0;
        isWithdrawn = false;
        isStarted = false;
    }

    // Makes sure that the token is owned by this contract
    // then starts the contracts
    function startAuction(
        uint256 _tokenId,
        uint256 biddingPeriod,
        uint256 revealingPeriod
    ) public {
        require(erc721Contract.ownerOf(tokenId) == address(this));

        tokenId = _tokenId;

        // starts the auction
        endOfBidding = block.timestamp + biddingPeriod;
        endOfRevealing = endOfBidding + revealingPeriod;

        isStarted = true;
    }

    // The hash is the bid + a nonce
    function placeHashedBid(bytes32 hash) public payable isAuctionStarted {
        // If the bid is placed after the bidding has ended, throw an error
        require(block.timestamp < endOfBidding, "Bidding has ended");

        // Don't let a user bid twice
        require(balances[msg.sender] > 0);

        hashes[msg.sender] = hash;
        balances[msg.sender] = msg.value;
    }

    function revealBid(uint256 amount, uint256 nonce) public isAuctionStarted {
        // hashes the amount and nonce together
        uint256 prehashedValue = amount + nonce;
        bytes32 hash = keccak256(abi.encode(prehashedValue));

        // checks that the user's has and the reveal are the same
        require(hash == hashes[msg.sender]);

        // If the bid is placed after the bidding has ended, throw an error
        require(block.timestamp < endOfRevealing, "Revealing has ended");

        if (amount > highestBid) {
            highestBid = amount;
            highestBidder = msg.sender;
        }
    }

    function sellerWithdraw() public {
        // Only the owner can withdraw
        require(msg.sender == seller);

        // only withdraw after the revealing is finshed
        require(block.timestamp > endOfRevealing, "Revealing has not finished");

        erc721Contract.transferFrom(address(this), highestBidder, tokenId);
        payable(seller).transfer(balances[highestBidder]);

        isWithdrawn = true;
    }

    // At the end of auction, everyone can withdraw their funds
    function bidderWithdraw() public hasSellerWithdrawn {
        require(balances[msg.sender] > 0);
        payable(msg.sender).transfer(balances[msg.sender]);
    }

    function isWinner() public view hasSellerWithdrawn returns (bool) {
        return highestBidder == msg.sender;
    }

    modifier isAuctionStarted() {
        require(isStarted);
        _;
    }

    modifier hasSellerWithdrawn() {
        require(isWithdrawn);
        _;
    }
}
