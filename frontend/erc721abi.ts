// The ERC-721 ABI
export const erc721Abi = [
  "function balanceOf(address owner) view returns (uint)",
  "function ownerOf(uint tokenId) view returns (uint)",
  "function transferFrom(address from, address to, uint tokenId)",
  "event Transfer(address indexed from, address indexed to, uint tokenId)",
  "function tokenURI(uint256 tokenId) view returns(string)",
];
