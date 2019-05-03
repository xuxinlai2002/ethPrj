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

var arguments = process.argv.splice(2);

let constractAddr = arguments[0];
let toAddr = arguments[1];

//
let data = fs.readFileSync('./MetaCoin.sol');
let output = solc.compile(data.toString(), 1);

let bytecode = output.contracts[':MetaCoin'].bytecode;
let abi = output.contracts[':MetaCoin'].interface;


// 相对于部署合约，多了第二个参数，即合约地址
const myContract = new web3Obj.eth.Contract(JSON.parse(abi), constractAddr, {
    // 非必填，合约的bytecode
    data: bytecode,
    // 非必填，合约的创建者
    from: "0xDED1626C15F18bb35048BCf1068158634F628201",
    //Gas limit
    gas: 4712388,
    gasPrice: '1000000'
});

// 调用合约中的sendCoin方法
myContract.methods.sendCoin(toAddr, 100).send({
    //非必填，该合约方法的调用者
    from: '0xDED1626C15F18bb35048BCf1068158634F628201'
}).on('transactionHash', function (hash) {
    console.log(hash)
}).on('receipt', function (receipt) {
    console.log(receipt)
}).on('confirmation', function (confirmationNumber, receipt) {
    console.log(confirmationNumber)
}).on('error', console.error)