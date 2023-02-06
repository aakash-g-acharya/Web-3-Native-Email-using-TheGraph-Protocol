//SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorage
{
    uint256 public  favouriteNum;

    function store(uint256 _favouriteNumber)public returns(uint256)
    {
        favouriteNum=_favouriteNumber;

//costs gas since this function is called inside store function
        return retrieve();
    }

//view/ pure function doesnt cost gas 
    function retrieve() public view returns(uint256)
    {
        return favouriteNum;
    }
}