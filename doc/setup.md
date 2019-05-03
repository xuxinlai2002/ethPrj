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

