// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract KYC {
    mapping(address => bool) public approved;

    function setKYCCompleted(address _addr) public {
        approved[_addr] = true;
    }

    function setKYCRevoked(address _addr) public {
        approved[_addr] = false;
    }

    function isKYCCompleted(address _addr) public view returns(bool) {
        return approved[_addr];
    }
}
