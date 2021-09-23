var web3 = new web3(web3.givenProvider);

var instance;
var user;
var contractAdress;

$(document).ready(function(){
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
        user = accounts[0];

        console.log(instance);
    })
})