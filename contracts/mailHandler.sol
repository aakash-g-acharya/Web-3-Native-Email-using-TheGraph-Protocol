// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

struct User{
    bytes publicKey;    
}

contract mailHandler{
    mapping (address => bytes32) private publicKeyRecord;
    
    event transactionLog(address indexed to ,  bytes32 hash);

    function checkRegisteredKey(address _address) public view returns (bool) {
        return publicKeyRecord[_address].length != 0;
    }

    function registerPublicKey() public {
        if(!checkRegisteredKey(msg.sender)){
            publicKeyRecord[msg.sender] = msg.sig;
        }
    }

    function getPublicKey(address _address) public view returns (bytes32) {
        return publicKeyRecord[_address];
    }

    function makeTransfer(address to , bytes32 hash) public{
        emit transactionLog(to , hash);
    }



}