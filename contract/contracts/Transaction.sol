//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0; //choose version

contract Transactions {
    uint256 transactionCount; //variable

   struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timeStamp;
        string keyWord;
    }

    TransferStruct[] transactions;

    //each transactions have - transfer
    event transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timeStamp,
        string keyWord
    );

 

    function addToBlockchain(address payable receiver, uint256 amount,string memory message, string memory keyWord ) public {
        transactionCount++;
        transactions.push(TransferStruct(msg.sender,receiver,amount,message,block.timestamp,keyWord));
        //call event to transfer
        emit transfer(msg.sender,receiver,amount,message,block.timestamp,keyWord);
    }

    function getAllTransaction() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
