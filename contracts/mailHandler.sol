// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

struct User {
    bytes publicKey;
}

contract mailHandler {
    mapping(address => string) private publicKeyRecord;

    event transactionLog(address indexed to, bytes32 hash);

    function checkRegisteredKey(address _address) public view returns (bool) {
        return bytes(publicKeyRecord[_address]).length != 0;
    }

    function registerPublicKey(
        address _address,
        string memory publicKey
    ) public {
        if (!checkRegisteredKey(_address)) {
            publicKeyRecord[_address] = publicKey;
        }
    }

    function registerPublicKey(string memory publicKey) public {
        if (!checkRegisteredKey(msg.sender)) {
            publicKeyRecord[msg.sender] = publicKey;
        }
    }

    function getPublicKey(
        address _address
    ) public view returns (string memory) {
        return publicKeyRecord[_address];
    }

    function makeTransfer(address to, bytes32 hash) public {
        emit transactionLog(to, hash);
    }
}
