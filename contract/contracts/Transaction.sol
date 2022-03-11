//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0; //choose version

contract transactions {
    uint256 transactionCounter; //variable

    //each transactions have - transfer
    event transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timeStamp,
        string keyWord
    );

    struct transferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timeStamp;
        string keyWord;
    }

    transferStruct[] transactions;

    function addToBlockchain() public {}

    function getAllTransaction() public view returns (transferStruct[] memory) {
        //return transaction
    }

    function addToBlockchain() public {}
}
