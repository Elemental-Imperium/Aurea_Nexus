// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Compliance {
    enum Stage { Pending, Approved, Rejected }
    mapping(address => Stage) public userStages;

    function setUserStage(address _addr, Stage _stage) public {
        userStages[_addr] = _stage;
    }

    function getUserStage(address _addr) public view returns(Stage) {
        return userStages[_addr];
    }
}
