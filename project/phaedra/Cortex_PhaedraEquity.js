import { clients } from "./lib/clientFactor.js";
import { Web3 } from 'web3';

const datapoints = new Map();

for (let i=0;i<clients.length; i++){
    datapoints.set(clients[i][0], clients[i][1]);
}

const sdk = new MetaMaskSDK.MetaMaskSDK({
    dappMetadata: {
        name: "Phaedra Equity",
        url: window.location.host,
    },
    logging: {
        sdk: false
    }
});

window.userWalletAddress = null;

const loginPanel = document.getElementById('loginPanel');
    const AccountData = document.getElementById('AccountData');
    const loginButton = document.getElementById('loginButton');
    const unregistered = document.getElementById('unregistered');
    const registered = document.getElementById('registered');
    const userWallet = document.getElementById('userWallet');
    const fundBalance = document.getElementById('fundBalance');
    const exchange = document.getElementById('exchange');
    const exchangeNotice = document.getElementById('exchangeNotice');

    loginPanel.style.display = 'flex';
    AccountData.style.display = 'none';

    registered.style.display = 'none';
    unregistered.style.display = 'none';

    exchange.style.display = 'none';
    exchangeNotice.style.display = 'block';

    if(localStorage.getItem("connectionID")!=null){

        fundBalance.innerText = parseFloat(AUM * datapoints.get(localStorage.getItem("connectionID"))).toFixed(2);
        if (datapoints.get(localStorage.getItem("connectionID")) != undefined){
            if(AUM >= pastAUM){
                fundBalance.setAttribute('grow','bull');
            }
            else{
                fundBalance.setAttribute('grow','bear');
            }
            userWallet.innerText = localStorage.getItem("connectionID");
            loginPanel.style.display = 'none';
            AccountData.style.display = 'flex';
            registered.style.display = 'flex';
            exchange.style.display = 'flex';
            exchangeNotice.style.display = 'none';
        }
        else{
            loginPanel.style.display = 'none';
            AccountData.style.display = 'flex';
            unregistered.style.display = 'flex';
            exchange.style.display = 'flex';
        }
    }