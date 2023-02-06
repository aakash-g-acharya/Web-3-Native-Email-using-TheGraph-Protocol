// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract Ownable
{
    address owner;
    
     constructor() public 
    {
        
        owner=msg.sender;
    }

    modifier onlyOwner()
    {
        require(msg.sender==owner,'must be owner');
        _;
    }
}


contract MyContract is Ownable
{
    string secret;
    

    constructor(string memory _secret) public 
    {
        secret=_secret;
        super;
    }

   

//only owner can call this function. Others are restricted 
    function getSecret () public view onlyOwner returns(string memory)
    {
        return secret;
    }
}