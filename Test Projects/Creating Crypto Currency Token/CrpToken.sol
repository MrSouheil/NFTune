// SPDX-License-Identifier: MIT
//Coded in Remix IDE
pragma solidity ^0.8.0; //Specify Solidity Version

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol"; //Import Standing ERC20 Token

contract CrpToken is ERC20 { //Specify contract is an instance ERC20
    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
        _mint(msg.sender, 10 * 10 ** 18);
    }
}

//Compile and Run through Remix VM Goerli TestNet, specify name and symbol under Run and Deploy tab, then accept transaction from Metamask extension