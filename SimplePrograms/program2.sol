//SPDX-License-Identifier: MIT
pragma solidity^0.8.8;

contract SimpleStorage2
{
    struct People
    {
        uint256 favNum;
        string name;
    }

//dynamic array
    People[] public people;

//calldata,memory variables exist temporarily
//calldata->TEMPORARY variables that CAN'T be modified
//memory->TEMPORARY variables that CAN be modified

//storage->PERMANENT variables that CAN be modified

//struct , array, string(array of bytes), maps require special keyword 'memory' when they are declared in parameters
    function adddPerson (string memory _name, uint _favNum) public 
    {
        people.push(People(_favNum,_name));
    }
}