pragma solidity ^0.4.17;

import './ELink.sol';


contract Test {

    function Test() public {

    }

    function testTransfer(address contAddr, address _to, uint256 value) public {
        ELink(contAddr).transfer(_to, value);
    }
}
