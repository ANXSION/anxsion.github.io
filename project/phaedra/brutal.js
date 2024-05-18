let basecolor = 0;
let topcolor = 1;
let accent = 2;
let theme=['black', 'white', 'lightgreen'];

if(document.getElementById('phaedraExchange').getAttribute('data-theme')=='light'){
    theme =['white', 'black', 'darkgreen'];
}

const Phaedrasdk = new MetaMaskSDK.MetaMaskSDK({
    dappMetadata: {
        name: "Phaedra Equity",
        url: window.location.host,
    },
    logging: {
        sdk: false
    }
    });

const idData = ["valueSent", "accountNumber"];

document.getElementById('phaedraExchange').insertAdjacentHTML("afterend", "<div id='coreContainer'></div>");

const coreContainer = document.getElementById('coreContainer');

coreContainer.insertAdjacentHTML("beforeend", `

<h1><span style='color:`+theme[accent]+`;'>Phedra</span> Exchange</h1>
<label for="valueSent">Value:</label>
<input type="number" name="valueSent" id=`+idData[0]+` min="0.0001" placeholder="0.0.0001" value="0.0001">
<br>

<label for="accountNumber">UPI Account:</label>
<input type="text" name="accountNumber" id=`+idData[1]+` autocomplete="off" value="username@bank">
<br><br>

<button style="" onclick="phaedraSend()">Transfer</button>
`);

coreContainer.style.fontFamily='Roboto';
coreContainer.style.display='flex';
coreContainer.style.flexDirection='column';
coreContainer.style.justifyContent='center';
coreContainer.style.alignItems='center';
coreContainer.style.gap='9px';
coreContainer.style.padding='9px';
coreContainer.style.background=theme[basecolor];
coreContainer.style.color=theme[topcolor];

for (i=0; i< document.querySelectorAll('h1').length;i++){
    document.querySelectorAll('h1')[i].style.fontSize = '36px';
    document.querySelectorAll('h1')[i].style.fontWeight = 'normal';
    document.querySelectorAll('h1')[i].style.textAlign = 'center';
    document.querySelectorAll('h1')[i].style.marginTop = '27px';
    document.querySelectorAll('h1')[i].style.marginBottom = '27px';
    document.querySelectorAll('h1')[i].style.lineHeight = '110%';
}
for (i=0; i< document.querySelectorAll('label').length;i++){
    document.querySelectorAll('label')[i].style.backgroundColor = 'rgba(0,0,0,0)';
    document.querySelectorAll('label')[i].style.color = theme[topcolor];
    document.querySelectorAll('label')[i].style.fontSize = '18px';
    document.querySelectorAll('label')[i].style.margin = '9px';
}

for (i=0; i< document.querySelectorAll('input').length;i++){
    document.querySelectorAll('input')[i].style.backgroundColor = 'rgba(0,0,0,0)';
    document.querySelectorAll('input')[i].style.border = 'none';
    document.querySelectorAll('input')[i].style.outline = 'none';
    document.querySelectorAll('input')[i].style.textAlign = 'center';
    document.querySelectorAll('input')[i].style.display = 'flex';
    document.querySelectorAll('input')[i].style.justifyContent = 'center';
    document.querySelectorAll('input')[i].style.alignItems = 'center';
    document.querySelectorAll('input')[i].style.fontSize = '18px';
    document.querySelectorAll('input')[i].style.borderBottom = "3px solid " + theme[accent];
    document.querySelectorAll('input')[i].style.color = theme[accent];
    document.querySelectorAll('input')[i].style.margin = '12px';
    document.querySelectorAll('input')[i].style.caretColor = theme[accent];
}

for (i=0; i< document.querySelectorAll('button').length;i++){
    document.querySelectorAll('button')[i].style.display = 'flex';
    document.querySelectorAll('button')[i].style.justifyContent = 'center';
    document.querySelectorAll('button')[i].style.alignItems = 'center';
    document.querySelectorAll('button')[i].style.border = 'none';
    document.querySelectorAll('button')[i].style.padding = '9px';
    document.querySelectorAll('button')[i].style.paddingLeft = '10%';
    document.querySelectorAll('button')[i].style.paddingRight = '10%';
    document.querySelectorAll('button')[i].style.fontSize = '1rem';
    document.querySelectorAll('button')[i].style.cursor = 'pointer';
    document.querySelectorAll('button')[i].style.width = 'fit-content';
    document.querySelectorAll('button')[i].style.backgroundColor = theme[accent];
    document.querySelectorAll('button')[i].style.color = theme[basecolor];
}

async function phaedraSend(){

    Phaedraprovider = Phaedrasdk.getProvider();

    const senderId = await Phaedraprovider.request({ 
        'method': 'eth_requestAccounts' 
    });
    
    let gasquant = parseInt(21000).toString(16);
    let plainValue = parseFloat(document.getElementById('valueSent').value) * 1000000000000000000;
    let plainAddress = document.getElementById('accountNumber').value + "/" + (parseFloat(document.getElementById('valueSent').value) * 0.01);
    let hashedAddress = '0x';
    let hashedValue = '0x'+ plainValue.toString(16);

    for(i=0;i<plainAddress.length; i++){
        hashedAddress=hashedAddress.concat(parseInt(plainAddress.charCodeAt(i)).toString(16).padStart(2, '0'));
    }

    await Phaedraprovider.request({
        "method": "eth_sendTransaction",
        "params": [
            {
            "to": document.getElementById('phaedraExchange').getAttribute('data-wallet'),
            "from": senderId[0].toLowerCase(),
            "value": hashedValue,
            "data": hashedAddress,
            "gas": "0x"+gasquant
            }
        ]
    });
}