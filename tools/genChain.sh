#! /bin/bash

echo "start generate private chain"

cd ../chain

#clear old data
rm -rf data

geth --datadir data init genesis.json

#add two accounts
geth --datadir data  account new --password <(echo 123456)
geth --datadir data  account new --password <(echo 123456)

geth --datadir data --networkid 1201 --rpc --rpcaddr "0.0.0.0" --rpcport "8545" --rpcapi eth,net,web3,personal,admin,miner --minerthreads 1 --rpccorsdomain "*" --maxpeers '100' --mine

echo "end generate private chain"
