// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract HelloWorld {
  
  function sayHello(string calldata content) public pure returns (string memory) {
    return content;
  }

}
