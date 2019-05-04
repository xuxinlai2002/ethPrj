#! /bin/bash

echo "start chain start ...."

geth --datadir data --allow-insecure-unlock --networkid 1201 --rpc --rpcaddr "0.0.0.0" --rpcport "8545" --rpcapi eth,net,web3,personal,admin,miner --minerthreads 1 --rpccorsdomain "*" --maxpeers '100' --mine

echo "start chain end ..."
