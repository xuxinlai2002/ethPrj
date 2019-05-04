#for alloc
1)console
geth --datadir data --nodiscover console
nodiscover 代表该链条不希望被其他节点发现

2)add two accounts
personal.newAccount("123456")
personal.newAccount("123456")

3)set the alloc account

4)removedb
geth removedb --datadir data

5)init
geth --datadir data init genesis.json

6)get balance
geth --datadir data --nodiscover console
eth.getBalance(eth.accounts[0])
eth.getBalance(eth.accounts[1])


personal.unlockAccount(eth.accounts[0],"123456",0)
eth.sendTransaction({from:eth.accounts[0],to:"0xDED1626C15F18bb35048BCf1068158634F628201",value:web3.toWei(2,"ether")})

//
docker build -t xuxinlai2002/gnode:v1.0 .
docker run -it xuxinlai2002/gnode:v1.0 -p 8545:8545 -v ~/chain: