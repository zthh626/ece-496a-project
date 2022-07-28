// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
contract SealedEnvelopeAuction {
    address seller;

    IERC721 public erc721Contract;
    uint256 tokenId;
    uint256 public endOfBidding;
    uint256 public endOfRevealing;

    // Balances of bidders
    mapping(address => uint256) public balances;
    // Hashed bids of bidders
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
        require(msg.sender == seller);
        require(erc721Contract.ownerOf(_tokenId) == address(this));

        // A token id that is being auctioned
        tokenId = _tokenId;

        // starts the auction
        endOfBidding = block.timestamp + biddingPeriod;
        endOfRevealing = endOfBidding + revealingPeriod;

        isStarted = true;
    }

    // The hash is the bid + a nonce
    function placeHashedBid(bytes32 hash) public payable isAuctionStarted {
        // If the bid is placed after the bidding has ended, throw an error
        hashes[msg.sender] = hash;
        balances[msg.sender] = msg.value;
    }

    function revealBid(uint256 amount, uint256 nonce) public isAuctionStarted hasSellerNotWithdraw {
        // hashes the amount and nonce together
        uint256 prehashedValue = amount + nonce;
        string memory hashedString = Strings.toString(prehashedValue);
        bytes32 hash = keccak256(abi.encode(hashedString));
        // checks that the user's hash and the reveal are the same
        require(hash == hashes[msg.sender], "Incorrect amount or nonce found.");

        // If the bid is placed after the bidding has ended, throw an error
        require(block.timestamp < endOfRevealing, "Revealing has ended");

        if (amount > highestBid) {
            highestBid = amount;
            highestBidder = msg.sender;
            console.log("You are currently the highest bidder");
        }else{
            console.log("You were not the highest bidder");
        }
    }

    function sellerWithdraw() public {
        // Only the owner can withdraw
        require(msg.sender == seller);

        // only withdraw after the revealing is finshed
        require(block.timestamp > endOfRevealing, "Revealing has not finished");

        // Transfer the auctioned NFT to the highestBidder
        erc721Contract.transferFrom(address(this), highestBidder, tokenId);
        
        // Transfer the highest bid to the seller
        payable(seller).transfer(balances[highestBidder]);
        
        balances[highestBidder] = 0;
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
    modifier hasSellerNotWithdraw(){
        require(!isWithdrawn);
        _;
    }
}


