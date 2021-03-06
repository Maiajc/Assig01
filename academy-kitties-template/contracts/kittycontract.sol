pragma solidity ^0.5.12;

import"./IERC271.sol";
import"./Owable.sol";


contract kittycontract is IERC721, Ownable {
    
    uint256 public constant CREATION_LIMIT_GEN0 = 10;
    string public constant Name = "CreepyKitty";
    string public constant Symbol = "CRPY";

    event Birth(
        address owner,
        uint256 kittenId,
        uint256 mumId,
        uint256 dadId,
        uint256 genes
    )

    struct kitty {
        uint256 genes;
        uint64 birthtime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Kitty[] creepykitty;

    mapping(uint256=> address) public kittyIndexToOwner;
    mapping(address => uint256) ownershipTokenCount;

    uint256 public gen0counter;

    function getKitty(uint256 _id) external view return(
        uint256 genes,
        uint256 birthtime,
        uint256 mumId,
        uint256 dadId,
        uint256 generation,
    )
    {
        kitty storage kitty = kitties[_id];

        
        birthtime = uint256(kitty.birthTime);
        mumId = uint256(kitty.mumId);
        dadId = uint256(kitty.dadId);
        generation = uint256(kitty.generation);
        genes = kitty.genes
    }

    function createKittyGen0(uint256 _genes) public onlyOwner returns (uint256) {
        require (gen0counter < CREATION_LIMIT_GEN0);

        gen0Counter++;

        //Gen0 have no owners they are own by the contract
        return _createKitty(0,0,0, _genes, msg.sender);
    }

    function _createKitty(
        uint256 _mumId,
        uint256 _dadId,
        uint256 _generation,
        uint256 _genes,
        address _owner,
    ) private returns (uint256) {
        kitty memory _kitty = kitty({
            genes: _genes,
            birthTime: uint64(now),
            mumId: uint32(_mumId),
            dadId: uint32(_dadId),
            generation: uint16(_generation),
        });

        uint256 newKittenId = kitty.push(_kitty) - 1;

        emit Birth(_owner, _newKittenId, _mumId, _dadId, _genes);

        _transfer(address(0)), _owner, newKittenId)
             return newKittenId;

    }
          
    function balanceOf(address owner) external view returns (uint256 balance);
        return ownershipTokenCount [owner];

    
    function totalSupply() public view returns (uint) {
        return creepykitty.length;   
    }
         
    function ownerOf(uint256 tokenId) external view returns (address)
    {
        return kittyIndexToOwner[_tokenId];
    }

    function transfer(address _to, uint256 _tokenId) external 
    {
        require(_to != address(0));
        require(_to != address(this));
        require(_owns(msg.sender, _to, _tokenId));

        _transfer(msg.sender, _to, _tokenId);
    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal {

        ownershipTokenCount[_to]++;

        kittyIndexToOwner[_tokenId] = _to;

        if (_from != address(0)) {
            ownershipTokenCount[_from]--;
        }
        emit transfer(_from,_to, _tokenId);
    }

    function _owns(address_claimant, uint256 _tokenId) internal view returns (bool) {
        return kittyIndexToOwner[_tokenId] == _claimant;
    }
  
}
