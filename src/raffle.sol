// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

/**
 * @title A sample Raffle contract 
 * @author ginat101bone 
 * @dev impliments the chianlink vrf 
 */


contract raffle {

    uint256 private immutable i_entryFee ;

    constructor(uint256 entryfee){
        i_entryFee = entryfee;
    }

    
    function enterRaffle() public payable {

    }


    function pickWinner() public {

    }


    function getEntranceFee() external view returns (uint256){

        return i_entryFee ;


    }




}