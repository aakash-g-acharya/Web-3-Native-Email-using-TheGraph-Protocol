// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract funders{
    address public owner;
    
    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner{
        require(msg.sender == owner , "Not Owner");
        _;
    }

    function deposit() external payable{}

    function getBalance() external view returns(uint){
        return address(this).balance / 1e18 ;
    }

    function withdrawBalance() external onlyOwner {
        (bool success , ) =  payable(msg.sender).call{value : address(this).balance}("");
        require(success , "Payment Failed");
    }  


}