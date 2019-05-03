let Web3 = require('web3');
let solc = require('solc');
let fs = require('fs');
let web3Obj

if (typeof web3Obj !== 'undefined') {
    web3Obj = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3Obj = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
    //web3Obj = new Web3(new Web3.providers.WebsocketProvider("ws://127.0.0.1:7545"));
}

// web3Obj.eth.getAccounts().then(function (value) { 
//     console.log(value[0]) 
// })

let data = fs.readFileSync('./MetaCoin.sol');
let output = solc.compile(data.toString(), 1);

let bytecode = output.contracts[':MetaCoin'].bytecode;
console.log("----------bytecode start ----------")
console.log(bytecode)
console.log("----------bytecode end ----------")

let abi = output.contracts[':MetaCoin'].interface;
//console.log("----------abi----------")
console.log(abi)

let myContract = new web3Obj.eth.Contract(JSON.parse(abi), '', {
    defaultAccount: '0xDED1626C15F18bb35048BCf1068158634F628201', // default from address
    defaultGasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});

myContract.deploy({
    data: bytecode,
    arguments: []
})
.send({
    from: '0xDED1626C15F18bb35048BCf1068158634F628201',
    gas: 1500000,
    gasPrice: '30000000000000'
},(error, transactionHash) => {
        console.log("1")
        console.log(transactionHash)
        console.log(error)

 });

