// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GoofyGoober is ERC20, Ownable {
    uint constant _initial_supply = 100 * (10**18);

    constructor()
        ERC20("GoofyGoober", "GG")
        Ownable(msg.sender)
    {
        mint(msg.sender, _initial_supply);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}