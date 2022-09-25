// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import '@openzeppelin/contracts/access/Ownable.sol';

contract NFTcontract is ERC721, Ownable {

    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnable;
    string  internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints; // keep trak of all the mints that are down
    
    constructor() payable ERC721('NFTcontract', 'NP') {  //NP e simbolul

        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 2;
        //set withrow wallet if u want

    } 

    function setIsPublicMintEnable (bool isPublicMintEnable_) external onlyOwner {
        isPublicMintEnable = isPublicMintEnable_;
    }

    function setBaseTokenUri (string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

    function tokenURI (uint256 tokenId_) public view override returns (string memory) {
        require(_exists(tokenId_), 'token does not exists');
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
    }

    function withdraw() external onlyOwner {
        (bool succes, ) = withdrawWallet.call{ value: address(this).balance }('');
        require(succes, 'withrow failed');
    }

    function mint(uint256 quantity_) public payable {
        require(isPublicMintEnable, 'mint not live');
        require(msg.value == quantity_ * mintPrice, 'wrong mint value');
        require(totalSupply + quantity_ <= maxSupply, 'soldout');
        require(walletMints[msg.sender] + quantity_ <= maxPerWallet, 'exceed max wallet');

        for (uint256 i= 0; i < quantity_; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }


}