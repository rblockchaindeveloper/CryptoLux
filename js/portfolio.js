appId = "EJALHA5FruaAIsbdRhW8wYPLMZ2NkX45hGIPT6gc";
serverUrl = "https://1zozt2vkykrm.usemoralis.com:2053/server";
Moralis.start({ serverUrl, appId });

document.getElementById('attentionAlert').style.display = 'none';

let bscLogo = `
    <svg class="me-1" width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
        d="M0 10C0 4.47715 4.47715 0 10 0H20C25.5228 0 30 4.47715 30 10V20C30 25.5228 25.5228 30 20 30H10C4.47715 30 0 25.5228 0 20V10Z"
        fill="#F3BA2F" />
        <path
        d="M11.3588 13.5038L15 9.8625L18.6431 13.5056L20.7619 11.3869L15 5.625L9.24 11.385L11.3588 13.5038ZM5.625 15L7.74375 12.8812L9.8625 15L7.74375 17.1188L5.625 15ZM11.3588 16.4963L15 20.1375L18.6431 16.4944L20.7619 18.6122L15 24.375L9.24 18.615L9.23719 18.6122L11.3588 16.4963ZM20.1375 15L22.2563 12.8812L24.375 15L22.2563 17.1188L20.1375 15ZM17.1488 14.9981H17.1506V15L15 17.1506L12.8522 15.0037L12.8484 15L12.8522 14.9972L13.2281 14.6203L13.4109 14.4375L15 12.8494L17.1497 14.9991L17.1488 14.9981Z"
        fill="white" />
    </svg>
`;

let ethLogo = `
<svg class="me-1" width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M0 10C0 4.47715 4.47715 0 10 0H20C25.5228 0 30 4.47715 30 10V20C30 25.5228 25.5228 30 20 30H10C4.47715 30 0 25.5228 0 20V10Z"
    fill="#627EEA"
    />
    <path
    d="M15.0294 3.75V12.0656L22.0578 15.2062L15.0294 3.75Z"
    fill="white"
    fillOpacity="0.602"
    />
    <path d="M15.0294 3.75L8 15.2062L15.0294 12.0656V3.75Z" fill="white" />
    <path
    d="M15.0294 20.595V26.2453L22.0625 16.515L15.0294 20.595Z"
    fill="white"
    fillOpacity="0.602"
    />
    <path d="M15.0294 26.2453V20.594L8 16.515L15.0294 26.2453Z" fill="white" />
    <path
    d="M15.0294 19.2872L22.0578 15.2063L15.0294 12.0675V19.2872Z"
    fill="white"
    fillOpacity="0.2"
    />
    <path d="M8 15.2063L15.0294 19.2872V12.0675L8 15.2063Z" fill="white" fillOpacity="0.602" />
</svg>
`;

let maticLogo = `
    <svg class="me-1" width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
        d="M0 10C0 4.47715 4.47715 0 10 0H20C25.5228 0 30 4.47715 30 10V20C30 25.5228 25.5228 30 20 30H10C4.47715 30 0 25.5228 0 20V10Z"
        fill="#8247E5"
        />
        <path
        d="M20.4896 11.5015C20.1157 11.2878 19.635 11.2878 19.2077 11.5015L16.2166 13.2641L14.1869 14.3858L11.2493 16.1484C10.8754 16.362 10.3947 16.362 9.96736 16.1484L7.67062 14.7596C7.29674 14.546 7.02967 14.1187 7.02967 13.638V10.9674C7.02967 10.5401 7.24332 10.1128 7.67062 9.8457L9.96736 8.51039C10.3412 8.29674 10.822 8.29674 11.2493 8.51039L13.546 9.89911C13.9199 10.1128 14.1869 10.5401 14.1869 11.0208V12.7834L16.2166 11.6083V9.79228C16.2166 9.36499 16.003 8.93769 15.5757 8.67062L11.3027 6.16024C10.9288 5.94659 10.4481 5.94659 10.0208 6.16024L5.64095 8.72404C5.21365 8.93769 5 9.36499 5 9.79228V14.8131C5 15.2404 5.21365 15.6677 5.64095 15.9347L9.96736 18.4451C10.3412 18.6588 10.822 18.6588 11.2493 18.4451L14.1869 16.7359L16.2166 15.5608L19.1543 13.8516C19.5282 13.638 20.0089 13.638 20.4362 13.8516L22.7329 15.1869C23.1068 15.4006 23.3739 15.8279 23.3739 16.3086V18.9792C23.3739 19.4065 23.1602 19.8338 22.7329 20.1009L20.4896 21.4362C20.1157 21.6499 19.635 21.6499 19.2077 21.4362L16.911 20.1009C16.5371 19.8872 16.27 19.4599 16.27 18.9792V17.27L14.2404 18.4451V20.2077C14.2404 20.635 14.454 21.0623 14.8813 21.3294L19.2077 23.8398C19.5816 24.0534 20.0623 24.0534 20.4896 23.8398L24.816 21.3294C25.1899 21.1157 25.457 20.6884 25.457 20.2077V15.1335C25.457 14.7062 25.2433 14.2789 24.816 14.0119L20.4896 11.5015Z"
        fill="white"
        />
    </svg>
`

let avaxLogo = `
    <svg class="me-1" width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
        d="M0 10C0 4.47715 4.47715 0 10 0H20C25.5228 0 30 4.47715 30 10V20C30 25.5228 25.5228 30 20 30H10C4.47715 30 0 25.5228 0 20V10Z"
        fill="#E84142"
        />
        <path
        d="M20.2914 15.3898C20.8111 14.4921 21.6497 14.4921 22.1693 15.3898L25.4056 21.0709C25.9252 21.9685 25.5 22.7008 24.4607 22.7008H17.941C16.9134 22.7008 16.4882 21.9685 16.9961 21.0709L20.2914 15.3898ZM14.0315 4.45277C14.5512 3.55513 15.378 3.55513 15.8977 4.45277L16.6182 5.75198L18.3189 8.74017C18.7323 9.59056 18.7323 10.5945 18.3189 11.4449L12.6142 21.3307C12.0945 22.1339 11.2323 22.6417 10.2756 22.7008H5.53942C4.50005 22.7008 4.07485 21.9803 4.59454 21.0709L14.0315 4.45277Z"
        fill="white"
        />
    </svg>
`
let copyButtonLogo = `
<svg xmlns="http://www.w3.org/2000/svg" onclick="copyWalletAddress()" style="cursor: pointer;" width="16" height="16" fill="currentColor" class="bi bi-clipboard mb-1" viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>
`

/* აუთენთიფიკაციის ფუნქციები */
if (Moralis.User.current()){
    console.log("შესულია")
    console.log(Moralis.User.current().get('ethAddress'))
    document.getElementById('btn-login').style.display = 'none';
    document.getElementById('connectedAddress').style.display = 'block';
    document.getElementById('switchNetworkBtn').style.display = 'block';
    document.getElementById('walletAddress').innerHTML = Moralis.User.current().get('ethAddress') + copyButtonLogo;
    getNetwork();
    portfolioDashboard()
    checkWeb3();
    getUserERC20TokenBalances();
}else{
    console.log("არ არის შესული")
    document.getElementById('btn-login').style.display = 'block';
    document.getElementById('connectedAddress').style.display = 'none';
    document.getElementById('switchNetworkBtn').style.display = 'none';
}

login = async () => {
    const ethereum = window.ethereum;
    if (!ethereum || !ethereum.on){
        attention("noWeb3");
    }else{
        try{
            currentUser = Moralis.User.current();
            if(!currentUser){
                currentUser = await Moralis.Web3.authenticate({signingMessage:"დარწმუნდით რომ უკავშირდებით https://cryptolux.netlify.app/ ვებ-გვერდს"});
                console.log("logged in");
                document.getElementById('btn-login').style.display = 'block';
                document.getElementById('connectedAddress').style.display = 'none';
                document.getElementById('connectedChainPrice').style.display = 'none';
                document.getElementById('switchNetworkBtn').style.display = 'block';
                getNetwork();
                checkWeb3();
            }
            document.getElementById('btn-login').style.display = 'none';
            document.getElementById('connectedAddress').style.display = 'block';
            document.getElementById('switchNetworkBtn').style.display = 'block';
            document.getElementById('connectedChainPrice').style.display = 'block';
            
        }catch(error){
            console.log(error);
        }
    }
}

logout = async () => {
    try{
        await Moralis.User.logOut();
        document.getElementById('btn-login').style.display = 'block';
        document.getElementById('connectedAddress').style.display = 'none';
        document.getElementById('switchNetworkBtn').style.display = 'none';
        document.getElementById('userNativeBalance').innerHTML = "0";
        document.getElementById('userTokenCounter').innerHTML = "0";
        document.getElementById('userNFTCounter').innerHTML = "0";
        document.getElementById('ocBSC').innerHTML = "0";
        document.getElementById('ocETH').innerHTML = "0";
        document.getElementById('ocMATIC').innerHTML = "0";
        document.getElementById('ocAVAX').innerHTML = "0";
        document.getElementById('ocBSCPrice').innerHTML = "$0.00";
        document.getElementById('ocETHPrice').innerHTML = "$0.00";
        document.getElementById('ocMATICPrice').innerHTML = "$0.00";
        document.getElementById('ocAVAXPrice').innerHTML = "$0.00";
        document.getElementById('connectedChain').style.display = 'none'
        console.log("გამოვიდა")
    }catch(error){
        console.log(error);
    }
    location.reload();
}

async function checkWeb3(){
    const ethereum = window.ethereum;
    if (!ethereum || !ethereum.on){
        document.getElementById('connectedChain').innerHTML = "ეს აპლიკაცია მოითხოვს Metamask-ის საფულეს, გთხოვთ დააყენოთ Metamask-ის საფელე!";
    }else{
        //displayMessage("00", "Metamask-ი დაყენებულია!")
        setWeb3Environment();
    }
}

function setWeb3Environment(){
    var web3 = new Web3(window.ethereum);
    getNetwork();
    monitorNetwork();

}

async function getNetwork(){
    let userAddress = Moralis.User.current().get('ethAddress');
    var web3 = new Web3(window.ethereum);
    chainID = window.ethereum.chainId;
    document.getElementById('connectedAddress').innerHTML = shortAddress(userAddress);
    if (getNetworkName(chainID) == 'BSC'){
        document.getElementById('navbarDropdownMenuLink2').innerHTML = bscLogo + " Smart Chain"
    }else if(getNetworkName(chainID) == 'ETH'){
        document.getElementById('navbarDropdownMenuLink2').innerHTML = ethLogo + " Ethereum"
    }else if(getNetworkName(chainID) == 'MATIC'){
        document.getElementById('navbarDropdownMenuLink2').innerHTML = maticLogo + " Polygon"
    }else if(getNetworkName(chainID) == 'AVAX'){
        document.getElementById('navbarDropdownMenuLink2').innerHTML = avaxLogo + " Avalanche"
    }

    if (getNetworkName(chainID) == 'BSC'){
        fetch('https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD')
        .then(response => response.json())
        .then(data => {
            document.getElementById('connectedChainPrice').innerHTML = bscLogo + "BNB: $" + (data.USD).toLocaleString("en-US")
        })
    }else if(getNetworkName(chainID) == 'ETH'){
        fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
        .then(response => response.json())
        .then(data => {
            document.getElementById('connectedChainPrice').innerHTML = ethLogo + "ETH: $" + (data.USD).toLocaleString("en-US")
        })
    }else if(getNetworkName(chainID) == 'MATIC'){
        fetch('https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD')
        .then(response => response.json())
        .then(data => {
            document.getElementById('connectedChainPrice').innerHTML = maticLogo + "MATIC: $" + (data.USD).toLocaleString("en-US")
        })
    }else if(getNetworkName(chainID) == 'AVAX'){
        fetch('https://min-api.cryptocompare.com/data/price?fsym=AVAX&tsyms=USD')
        .then(response => response.json())
        .then(data => {
            document.getElementById('connectedChainPrice').innerHTML = avaxLogo + "AVAX: $" + (data.USD).toLocaleString("en-US")
        })
    }

}

function getNetworkName(chainID){
    networks = {
        '0x1': "ETH",
        '0x38': "BSC",
        '0x89': "MATIC",
        '0xa86a': "AVAX",
        '1': "ETH",
        '56': "BSC",
        '137': "MATIC",
        '43114': "AVAX"
    }
    return networks[chainID];
}

function monitorNetwork(){
    Moralis.onChainChanged(function(){
        window.location.reload()
    })
}

/* აუთენთიფიკაციის ფუნქციები */

/* პორტფოლიოს გვერდი */
async function portfolioDashboard(){
    let web3 = new Web3(window.ethereum);
    chainId = window.ethereum.chainId;
    let _id = returnChainId(chainId);
    console.log("portfolioDashboard",_id);
    if (_id == "bsc"){
        var chainCoin = "BNB"
        var ExplorerName = "ნახე BSCScan-ზე"
        var explorerUrl = 'https://bscscan.com/address/'
    }else if (_id == "eth"){
        var chainCoin = "ETH"
        var ExplorerName = "ნახე Etherscan-ზე"
        var explorerUrl = 'https://etherscan.io/address/'
    }else if (_id == "matic"){
        var chainCoin = "MATIC"
        var ExplorerName = "ნახე Polygon-ზე"
        var explorerUrl = 'https://polygonscan.com/address/'
    }else{
        var chainCoin = "AVAX"
        var ExplorerName = "ნახე C Chain-ზე"
        var explorerUrl = 'https://cchain.explorer.avax.network/address/'
    }

    if (_id == 'bsc'){
        document.getElementById("sendNativeBNB").classList.remove('disabled');
    }else if(_id == 'eth'){
        document.getElementById("sendNativeETH").classList.remove('disabled');
    }else if(_id == 'matic'){
        document.getElementById("sendNativeMATIC").classList.remove('disabled');
    }else if(_id == 'avalanche'){
        document.getElementById("sendNativeAVAX").classList.remove('disabled');
    }

    const nativeBalance = await Moralis.Web3API.account.getNativeBalance({ chain: _id, address: Moralis.User.current().get('ethAddress')});
    document.getElementById('walletNativeCoinBalance').innerHTML = `${chainCoin} ბალანსი: ` + (nativeBalance.balance / 1e18).toFixed(5);
    document.getElementById('viewOnExplorer').innerHTML = `<a target="_blank" href="${explorerUrl}${Moralis.User.current().get('ethAddress')}">${ExplorerName}</a>
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-box-arrow-up-right mb-2" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
    </svg>`;


    let userAddress = Moralis.User.current().get('ethAddress');
    const nativeBalanceBSC = await Moralis.Web3API.account.getNativeBalance({ chain: 'bsc', address: userAddress});
    document.getElementById('ocBSC').innerHTML = (nativeBalanceBSC.balance / 1e18).toFixed(4);
    const nativeBalanceETH = await Moralis.Web3API.account.getNativeBalance({ chain: 'eth', address: userAddress});
    document.getElementById('ocETH').innerHTML = (nativeBalanceETH.balance / 1e18).toFixed(4);
    const nativeBalanceMATIC = await Moralis.Web3API.account.getNativeBalance({ chain: 'matic', address: userAddress});
    document.getElementById('ocMATIC').innerHTML = (nativeBalanceMATIC.balance / 1e18).toFixed(4);
    const nativeBalanceAVAX = await Moralis.Web3API.account.getNativeBalance({ chain: 'avalanche', address: userAddress});
    document.getElementById('ocAVAX').innerHTML = (nativeBalanceAVAX.balance / 1e18).toFixed(4);

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ocBSCPrice').innerHTML = "$" + (data.binancecoin.usd * (nativeBalanceBSC.balance / 1e18)).toFixed(2);
        
    })
    
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ocETHPrice').innerHTML = "$" + (data.ethereum.usd * (nativeBalanceETH.balance / 1e18)).toFixed(2);
        
    })

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ocMATICPrice').innerHTML = "$" + (data['matic-network'].usd * (nativeBalanceMATIC.balance / 1e18)).toFixed(2);
        
    })

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=binance-peg-avalanche&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ocAVAXPrice').innerHTML = "$" + (data['binance-peg-avalanche'].usd * (nativeBalanceAVAX.balance / 1e18)).toFixed(2);
    })

}


async function getUserERC20TokenBalances(){
    let userAddress = Moralis.User.current().get('ethAddress');
    let web3 = new Web3(window.ethereum);
    chainId = window.ethereum.chainId;
    let _id = returnChainId(chainId);
    const bscTokenbalances = await Moralis.Web3API.account.getTokenBalances({ chain: 'bsc', address: userAddress });

    if (bscTokenbalances.length > 0){
        document.getElementById('userBEP20BalancesTab').style.display = 'block';
        bscTokenbalances.forEach(bsctokens =>{

            let addToMetamaskBtn = `
            
            <button onclick="addTokenMetamask('${bsctokens.symbol}', '${bsctokens.token_address}', '${bsctokens.decimals}')" class="btn bg-gradient-white text-md mt-2">
            დამატება    
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 212 189">
                    <g fill="none" fill-rule="evenodd">
                    <polygon fill="#CDBDB2"
                        points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875" />
                    <polygon fill="#CDBDB2"
                        points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                        transform="matrix(-1 0 0 1 256.5 0)" />
                    <polygon fill="#393939"
                        points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188" />
                    <polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27" />
                    <polygon fill="#F89D35"
                        points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813" />
                    <polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" />
                    <polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" />
                    <polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" />
                    <polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438" />
                    <polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" />
                    <polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" />
                    <polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" />
                    <polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" />
                    <polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625" />
                    <polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                        transform="matrix(-1 0 0 1 272.25 0)" />
                    <polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813"
                        transform="matrix(-1 0 0 1 150.188 0)" />
                    <polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" />
                    <path fill="#8E5A30"
                        d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z" />
                    <g transform="matrix(-1 0 0 1 211.5 0)">
                        <polygon fill="#F89D35"
                        points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813" />
                        <polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" />
                        <polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" />
                        <polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" />
                        <polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153" />
                        <polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" />
                        <polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" />
                        <polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" />
                        <polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" />
                        <polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813"
                        transform="matrix(-1 0 0 1 150.188 0)" />
                        <polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" />
                        <path fill="#8E5A30"
                        d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z" />
                    </g>
                    </g>
                </svg>
            </button>
            `
            
            var fullTokenBalance = (bsctokens.balance / 10**bsctokens.decimals);

            let userTokenBalances = `
            <tr>
                <td>
                <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm"><a target="_blank" href="https://bscscan.com/token/${bsctokens.token_address}">${bsctokens.name}</a></h6>
                    <p class="text-xs text-secondary mb-0"></p>
                    </div>
                </div>
                </td>
                <td>
                <p class="text-sm font-weight-bold mb-0">${bsctokens.symbol}</p>
                <p class="text-xs text-secondary mb-0"></p>
                </td>
                <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success" style="font-size: 0.87rem;">${(bsctokens.balance / 10**bsctokens.decimals).toLocaleString("en-US")}</span>
                </td>
                <td class="align-middle">
                    ${addToMetamaskBtn}
                </td>
                <td class="align-middle">
                <button onclick="renderTransfer('${bsctokens.symbol}', '${bsctokens.name}', '${bsctokens.token_address}', '${bsctokens.decimals}', '${fullTokenBalance}')" href="#sendTokenModal" type="button " class="btn bg-gradient-dark mb-0 ${_id != 'bsc' ? "disabled" : ""}" data-bs-toggle="modal" data-bs-target="#sendTokenModal">
                    გაგზავნა
                </button>
                </td>
            </tr>
            `
            userBEP20Balances.innerHTML += userTokenBalances;
        })
    }

    const ethTokenbalances = await Moralis.Web3API.account.getTokenBalances({ chain: 'eth', address: userAddress });

    if (ethTokenbalances.length > 0){
        document.getElementById('userERC20BalancesTab').style.display = 'block';
        ethTokenbalances.forEach(ethtokens =>{

            let addToMetamaskBtn = `
            
            <button onclick="addTokenMetamask('${ethtokens.symbol}', '${ethtokens.token_address}', '${ethtokens.decimals}')" class="btn bg-gradient-white text-md  mt-2">
            დამატება    
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 212 189">
                    <g fill="none" fill-rule="evenodd">
                    <polygon fill="#CDBDB2"
                        points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875" />
                    <polygon fill="#CDBDB2"
                        points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                        transform="matrix(-1 0 0 1 256.5 0)" />
                    <polygon fill="#393939"
                        points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188" />
                    <polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27" />
                    <polygon fill="#F89D35"
                        points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813" />
                    <polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" />
                    <polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" />
                    <polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" />
                    <polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438" />
                    <polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" />
                    <polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" />
                    <polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" />
                    <polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" />
                    <polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625" />
                    <polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                        transform="matrix(-1 0 0 1 272.25 0)" />
                    <polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813"
                        transform="matrix(-1 0 0 1 150.188 0)" />
                    <polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" />
                    <path fill="#8E5A30"
                        d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z" />
                    <g transform="matrix(-1 0 0 1 211.5 0)">
                        <polygon fill="#F89D35"
                        points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813" />
                        <polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" />
                        <polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" />
                        <polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" />
                        <polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153" />
                        <polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" />
                        <polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" />
                        <polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" />
                        <polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" />
                        <polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813"
                        transform="matrix(-1 0 0 1 150.188 0)" />
                        <polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" />
                        <path fill="#8E5A30"
                        d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z" />
                    </g>
                    </g>
                </svg>
            </button>
            `

            var fullTokenBalance = (ethtokens.balance / 10**ethtokens.decimals);

            let userTokenBalances = `
            <tr>
                <td>
                <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm"><a target="_blank" href="https://etherscan.com/token/${ethtokens.token_address}">${ethtokens.name}</a></h6>
                    <p class="text-xs text-secondary mb-0"></p>
                    </div>
                </div>
                </td>
                <td>
                <p class="text-sm font-weight-bold mb-0">${ethtokens.symbol}</p>
                <p class="text-xs text-secondary mb-0"></p>
                </td>
                <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success" style="font-size: 0.87rem;">${(ethtokens.balance / 10**ethtokens.decimals).toLocaleString("en-US")}</span>
                </td>
                <td class="align-middle">
                ${addToMetamaskBtn}
                </td>
                <td class="align-middle">
                <button onclick="renderTransfer('${ethtokens.symbol}', '${ethtokens.name}', '${ethtokens.token_address}', '${ethtokens.decimals}', '${fullTokenBalance}')" href="#sendTokenModal" type="button " class="btn bg-gradient-dark mb-0 ${_id != 'eth' ? "disabled" : ""}" data-bs-toggle="modal" data-bs-target="#sendTokenModal">
                    გაგზავნა
                </button>
                </td>
            </tr>
            `
            userERC20Balances.innerHTML += userTokenBalances;
        })
    }

    const maticTokenbalances = await Moralis.Web3API.account.getTokenBalances({ chain: 'matic', address: userAddress });

    if (maticTokenbalances.length > 0){
        document.getElementById('userMATIC20BalancesTab').style.display = 'block';
        maticTokenbalances.forEach(matictokens =>{

            let addToMetamaskBtn = `
            
            <button onclick="addTokenMetamask('${matictokens.symbol}', '${matictokens.token_address}', '${matictokens.decimals}')" class="btn bg-gradient-white text-md mt-2">
            დამატება    
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 212 189">
                    <g fill="none" fill-rule="evenodd">
                    <polygon fill="#CDBDB2"
                        points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875" />
                    <polygon fill="#CDBDB2"
                        points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                        transform="matrix(-1 0 0 1 256.5 0)" />
                    <polygon fill="#393939"
                        points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188" />
                    <polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27" />
                    <polygon fill="#F89D35"
                        points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813" />
                    <polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" />
                    <polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" />
                    <polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" />
                    <polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438" />
                    <polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" />
                    <polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" />
                    <polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" />
                    <polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" />
                    <polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625" />
                    <polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                        transform="matrix(-1 0 0 1 272.25 0)" />
                    <polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813"
                        transform="matrix(-1 0 0 1 150.188 0)" />
                    <polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" />
                    <path fill="#8E5A30"
                        d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z" />
                    <g transform="matrix(-1 0 0 1 211.5 0)">
                        <polygon fill="#F89D35"
                        points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813" />
                        <polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" />
                        <polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" />
                        <polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" />
                        <polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153" />
                        <polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" />
                        <polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" />
                        <polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" />
                        <polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" />
                        <polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813"
                        transform="matrix(-1 0 0 1 150.188 0)" />
                        <polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" />
                        <path fill="#8E5A30"
                        d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z" />
                    </g>
                    </g>
                </svg>
            </button>
            `

            var fullTokenBalance = (matictokens.balance / 10**matictokens.decimals);

            let userTokenBalances = `
            <tr>
                <td>
                <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm"><a target="_blank" href="https://polygonscan.com/token/${matictokens.token_address}">${matictokens.name}</a></h6>
                    <p class="text-xs text-secondary mb-0"></p>
                    </div>
                </div>
                </td>
                <td>
                <p class="text-sm font-weight-bold mb-0">${matictokens.symbol}</p>
                <p class="text-xs text-secondary mb-0"></p>
                </td>
                <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success" style="font-size: 0.87rem;">${(matictokens.balance / 10**matictokens.decimals).toLocaleString("en-US")}</span>
                </td>
                <td class="align-middle">
                ${addToMetamaskBtn}
                </td>
                <td class="align-middle">
                <button onclick="renderTransfer('${matictokens.symbol}', '${matictokens.name}', '${matictokens.token_address}', '${matictokens.decimals}', '${fullTokenBalance}')" href="#sendTokenModal" type="button " class="btn bg-gradient-dark mb-0 ${_id != 'matic' ? "disabled" : ""}" data-bs-toggle="modal" data-bs-target="#sendTokenModal">
                    გაგზავნა
                </button>
                </td>
            </tr>
            `
            userMATIC20Balances.innerHTML += userTokenBalances;
        })
    }

    const avaxTokenbalances = await Moralis.Web3API.account.getTokenBalances({ chain: 'avalanche', address: userAddress });

    if (avaxTokenbalances.length > 0){
        document.getElementById('userAVAX20BalancesTab').style.display = 'block';
        avaxTokenbalances.forEach(avaxtokens =>{

            let addToMetamaskBtn = `
            
            <button onclick="addTokenMetamask('${avaxtokens.symbol}', '${avaxtokens.token_address}', '${avaxtokens.decimals}')" class="btn bg-gradient-white text-md mt-2">
            დამატება    
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 212 189">
                    <g fill="none" fill-rule="evenodd">
                    <polygon fill="#CDBDB2"
                        points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875" />
                    <polygon fill="#CDBDB2"
                        points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                        transform="matrix(-1 0 0 1 256.5 0)" />
                    <polygon fill="#393939"
                        points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188" />
                    <polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27" />
                    <polygon fill="#F89D35"
                        points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813" />
                    <polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" />
                    <polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" />
                    <polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" />
                    <polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438" />
                    <polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" />
                    <polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" />
                    <polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" />
                    <polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" />
                    <polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625" />
                    <polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                        transform="matrix(-1 0 0 1 272.25 0)" />
                    <polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813"
                        transform="matrix(-1 0 0 1 150.188 0)" />
                    <polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" />
                    <path fill="#8E5A30"
                        d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z" />
                    <g transform="matrix(-1 0 0 1 211.5 0)">
                        <polygon fill="#F89D35"
                        points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813" />
                        <polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375" />
                        <polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813" />
                        <polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375" />
                        <polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153" />
                        <polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719" />
                        <polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25" />
                        <polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75" />
                        <polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938" />
                        <polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813"
                        transform="matrix(-1 0 0 1 150.188 0)" />
                        <polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27" />
                        <path fill="#8E5A30"
                        d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z" />
                    </g>
                    </g>
                </svg>
            </button>
            `

            var fullTokenBalance = (avaxtokens.balance / 10**avaxtokens.decimals);

            let userTokenBalances = `
            <tr>
                <td>
                <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm"><a target="_blank" href="https://cchain.explorer.avax.network/token/${avaxtokens.token_address}">${avaxtokens.name}</a></h6>
                    <p class="text-xs text-secondary mb-0"></p>
                    </div>
                </div>
                </td>
                <td>
                <p class="text-sm font-weight-bold mb-0">${avaxtokens.symbol}</p>
                <p class="text-xs text-secondary mb-0"></p>
                </td>
                <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success" style="font-size: 0.87rem;">${(avaxtokens.balance / 10**avaxtokens.decimals).toLocaleString("en-US")}</span>
                </td>
                <td class="align-middle">
                ${addToMetamaskBtn}
                </td>
                <td class="align-middle">
                <button onclick="renderTransfer('${avaxtokens.symbol}', '${avaxtokens.name}', '${avaxtokens.token_address}', '${avaxtokens.decimals}', '${fullTokenBalance}')" href="#sendTokenModal" type="button " class="btn bg-gradient-dark mb-0 ${_id != 'avalanche' ? "disabled" : ""}" data-bs-toggle="modal" data-bs-target="#sendTokenModal">
                    გაგზავნა
                </button>
                </td>
            </tr>
            `
            userAVAX20Balances.innerHTML += userTokenBalances;
        })
    }

    if(bscTokenbalances.length > 0 || ethTokenbalances.length > 0 || maticTokenbalances.length > 0 || avaxTokenbalances.length > 0){
        document.getElementById('tokenBalanceContainer').style.display = 'block';
    }else if(bscTokenbalances.length == 0 && ethTokenbalances.length == 0 && maticTokenbalances.length == 0 && avaxTokenbalances.length == 0){
        document.getElementById('noTokensOnWallet').style.display = 'block';
    }
}

function renderTransfer(symbol, name, tokenContract, decimali, fullBalanceToken) {

    $("#tokenName").html(name + " (" + symbol.toUpperCase() + ") გაგზავნა");
    $("#transferModalBody").html(`
    <p class="text-xs mt-1 mb-1 font-weight-bolder">მიმღების მისამართი:</p>
    <input id="tokenReciverAddress" type="text" class="form-control" placeholder="მისამართი" aria-label="Username" aria-describedby="addon-wrapping">
    <p class="text-xs mt-3 mb-1 font-weight-bolder">გასაგზავნი რაოდენობა:</p>
    <div class="input-group mb-3 ">
        <input id="tokenReciverAmount" type="text" class="form-control" placeholder="ბალანსი: ${fullBalanceToken} " aria-label="Recipient's username" aria-describedby="basic-addon2"><button onclick="setMaxTokenBalance(${fullBalanceToken})" class="btn bg-gradient-dark mb-0 mb-0 mt-0" type="button" id="setMaxBalanceValue">სულ</button>
        <span id="tokenName" class="input-group-text" id="basic-addon2">${symbol.toUpperCase()}</span>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">დახურვა</button>
        <button onclick="tryTransfer('${symbol}', '${name}', '${tokenContract}', '${decimali}')" type="button" class="btn btn-primary" data-bs-dismiss="modal">გაგზავნა</button>
    </div>
    `);

}

async function setMaxTokenBalance(maxBalance){
    document.getElementById("tokenReciverAmount").value = maxBalance;
}

async function tryTransfer(symbol, name, tokenContract, decimali) {
    let amount = $("#tokenReciverAmount").val();
    let address = $("#tokenReciverAddress").val();

    if(amount == "" || address == "") {
        FillBlankToast();
        
    }else{

        document.getElementById('confirmTxInfoHash').innerHTML = `
        <p class="text-lg mt-1 mb-1 mb-3 font-weight-bolder text-center" style="color: #290c5f;">${amount.toLocaleString("en-US")} ${symbol.toUpperCase()}</p>
        <p class="text-xs mt-1 mb-1 font-weight-bolder">საიდან:</p>
        <input id="tokenReciverAddress" disabled type="text" class="form-control mb-4" placeholder="${Moralis.User.current().get('ethAddress')}" aria-label="Username" aria-describedby="addon-wrapping">
        <p class="text-xs mt-1 mb-1 font-weight-bolder">სად:</p>
        <input id="tokenReciverAddress" disabled type="text" class="form-control" placeholder="${address}" aria-label="Username" aria-describedby="addon-wrapping">
        ` 
        $("#txConfirmModal").modal('show');

        let confirmTxbtn = document.getElementById('confirmTxSend');

        confirmTxbtn.onclick = async function(){
            $("#txConfirmModal").modal('hide');
            await tokenTransfer(amount, address, decimali, tokenContract);
        }

    }
}

async function tokenTransfer(amount, address, decimali, tokenContract) {
    let web3 = new Web3(window.ethereum);
    chainId = window.ethereum.chainId;
    let _id = returnChainId(chainId);
    
    await Moralis.enableWeb3();

    if(_id == 'bsc'){
        var explorerUrl = 'https://bscscan.com/tx/';
        var viewText = 'ნახე BSCScan-ზე'
    }else if(_id == 'eth'){
        var explorerUrl = 'https://etherscan.io/tx/';
        var viewText = 'ნახე Etherscan-ზე'
    }else if(_id == 'matic'){
        var explorerUrl = 'https://polygonscan.com/tx/';
        var viewText = 'ნახე Polygonscan-ზე'
    }else{
        var explorerUrl = 'https://cchain.explorer.avax.network/tx/';
        var viewText = 'ნახე CChainExplorer-ზე'
    }

    try{
        const options = {
            type: "erc20", 
            amount: Moralis.Units.Token(amount, decimali),
            receiver: address,
            contractAddress: tokenContract,
            tokenId: "0",
            awaitReceipt: false
        }
        let result = await Moralis.transfer(options);
        result.on("transactionHash", (hash) => { 
                document.getElementById('sendTxInfoHash').innerHTML = 
                `
                <a target="_blank" href="${explorerUrl}${hash}" id="viewOnExplorer" style="color: #290c5f;" class="text-bolder">${viewText}</a>
                <a target="_blank" id="txHash" style="color: #1ec6d4;" class="text-uppercase">${shortTxHash(hash)}
                <svg onclick="copyTxHash('${hash}')" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard mb-1" viewBox="0 0 16 16">
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg>
                </a>
                `
                $("#txSendModal").modal('show');
            })
        .on("receipt", (receipt) => {
            
            if (receipt.status == true){
                document.getElementById('toastTxConfirmBody').innerHTML = `ტრანზაქცია დადასტურდა! <a class="text-white" target="_blank" href="${explorerUrl}${receipt.transactionHash}">${viewText}</a> \n ჰეში: ${shortTxHash(receipt.transactionHash)}`;
                $(".toastTxConfirm").toast('show');
            }else{
                document.getElementById('toastTxNotConfirmBody').innerHTML = `ტრანზაქცია არ დადასტურდა!`;
                $(".toastTxNotConfirm").toast('show');
            }
        })

        .on("error", (error) => { 
            document.getElementById('toastTxNotConfirmBody').innerHTML = `ტრანზაქცია არ დადასტურდა!`;
            $(".toastTxNotConfirm").toast('show');
         });
    }catch(err){

        alert("Ohh no!\n Something went wrong: " + err.message);
    }
}

function FillBlankToast() {
    var toastLiveExample = document.getElementById('fillBlanksToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()


}

function canceledTxToast() {
    var toastLiveExample = document.getElementById('canceledTxToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}

/* ტოკენების ბალანსი და გაგზავნა დამთავრდა აქ */
/* ========================================== */

/* ნატივ ქოინის ბალანსი და გაგზავნა */

async function renderNativeTransfer() {
    let userAddress = Moralis.User.current().get('ethAddress');
    let web3 = new Web3(window.ethereum);
    chainId = window.ethereum.chainId;
    let _id = returnChainId(chainId);
    
    if (_id == 'bsc'){
        var chainCoinName = "BNB";
    }else if(_id == 'eth'){
        var chainCoinName = "ETH";
    }else if(_id == 'matic'){
        var chainCoinName = "MATIC";
    }else if(_id == 'avalanche'){
        var chainCoinName = "AVAX";
    }

    const balance = await Moralis.Web3API.account.getNativeBalance({chain: _id, address: userAddress});
    let nativeTokenBalance = balance.balance / 1e18;
    
    $("#coinName").html(chainCoinName + " გაგზავნა");
    $("#nativeTransferModalBody").html(`
    <p class="text-xs mt-1 mb-1 font-weight-bolder">მიმღების მისამართი:</p>
    <input id="nativeTokenReciverAddress" type="text" class="form-control" placeholder="მისამართი" aria-label="Username" aria-describedby="addon-wrapping">
    <p class="text-xs mt-3 mb-1 font-weight-bolder">გასაგზავნი რაოდენობა:</p>
    <div class="input-group mb-3 ">
        <input id="nativeTokenReciverAmount" type="text" class="form-control" placeholder="ბალანსი: ${balance.balance / 1e18}" aria-label="Recipient's username" aria-describedby="basic-addon2"><button onclick="setNativeTokenMaxValue(${nativeTokenBalance})" class="btn bg-gradient-dark mb-0 mb-0 mt-0" type="button" id="setMaxBalanceValue">სულ</button>
        <span id="tokenName" class="input-group-text" id="basic-addon2">${chainCoinName}</span>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">დახურვა</button>
        <button onclick="tryNativeTransfer()" type="button" id="sendNativeCoinButton" data-bs-dismiss="modal" class="btn ${(_id == "bsc") ? "bg-gradient-warning" : (_id == "eth") ? "bg-gradient-info" : (_id == "mati") ? "bg-gradient-primary" : (_id == "avalanche") ? "bg-gradient-danger" : "bg-gradient-primary"}">გაგზავნა</button>
    </div>
    `);
}

async function tryNativeTransfer() {
    let web3 = new Web3(window.ethereum);
    chainId = window.ethereum.chainId;
    let _id = returnChainId(chainId);
    await Moralis.enableWeb3();
    let amount = $("#nativeTokenReciverAmount").val();
    let address = $("#nativeTokenReciverAddress").val();

    if(_id == 'bsc'){
        var explorerUrl = 'https://bscscan.com/tx/';
        var viewText = 'ნახე BSCScan-ზე'
    }else if(_id == 'eth'){
        var explorerUrl = 'https://etherscan.io/tx/';
        var viewText = 'ნახე Etherscan-ზე'
    }else if(_id == 'matic'){
        var explorerUrl = 'https://polygonscan.com/tx/';
        var viewText = 'ნახე Polygonscan-ზე'
    }else{
        var explorerUrl = 'https://cchain.explorer.avax.network/tx/';
        var viewText = 'ნახე CChainExplorer-ზე'
    }

    if(amount == "" || address == "") {
        fillBlanksToastNative();
        
    }else{

        const options = {type: "native", 
                     amount: Moralis.Units.ETH(amount), 
                     receiver: address,
                     tokenId: "0",
                     awaitReceipt: false}

        document.getElementById('confirmTxInfoHash').innerHTML = `
        <p class="text-lg mt-1 mb-1 mb-3 font-weight-bolder text-center" style="color: #290c5f;">${amount.toLocaleString("en-US")}</p>
        <p class="text-xs mt-1 mb-1 font-weight-bolder">საიდან:</p>
        <input id="tokenReciverAddress" disabled type="text" class="form-control mb-4" placeholder="${Moralis.User.current().get('ethAddress')}" aria-label="Username" aria-describedby="addon-wrapping">
        <p class="text-xs mt-1 mb-1 font-weight-bolder">სად:</p>
        <input id="tokenReciverAddress" disabled type="text" class="form-control" placeholder="${address}" aria-label="Username" aria-describedby="addon-wrapping">
        ` 
        $("#txConfirmModal").modal('show');

        let confirmTxbtn = document.getElementById('confirmTxSend');

        confirmTxbtn.onclick = async function(){
            $("#txConfirmModal").modal('hide');
            let result = await Moralis.transfer(options)
            result.on("transactionHash", (hash) => { 
                document.getElementById('sendTxInfoHash').innerHTML = 
                `
                <a target="_blank" href="${explorerUrl}${hash}" id="viewOnExplorer" style="color: #290c5f;" class="text-bolder">${viewText}</a>
                <a target="_blank" id="txHash" style="color: #1ec6d4;" class="text-uppercase">${shortTxHash(hash)}
                <svg onclick="copyTxHash('${hash}')" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard mb-1" viewBox="0 0 16 16">
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg>
                </a>
                `
                $("#txSendModal").modal('show');
            })
            .on("receipt", (receipt) => {
                
                if (receipt.status == true){
                    document.getElementById('toastTxConfirmBody').innerHTML = `ტრანზაქცია დადასტურდა! <a class="text-white" target="_blank" href="${explorerUrl}${receipt.transactionHash}">${viewText}</a> \n ჰეში: ${shortTxHash(receipt.transactionHash)}`;
                    $(".toastTxConfirm").toast('show');
                }else{
                    document.getElementById('toastTxNotConfirmBody').innerHTML = `ტრანზაქცია არ დადასტურდა!`;
                    $(".toastTxNotConfirm").toast('show');
                } 
            })
    
            .on("error", (error) => { 
                document.getElementById('toastTxNotConfirmBody').innerHTML = `ტრანზაქცია არ დადასტურდა!`;
                $(".toastTxNotConfirm").toast('show');
             });
        }
    }
}

async function setNativeTokenMaxValue(value){
    document.getElementById('nativeTokenReciverAmount').value = value;

}

function copyTxHash(hash){
    navigator.clipboard.writeText(hash);
    document.getElementById('copyToastMessage').innerHTML = `დაკოპირდა ტრანზაქციის Hash <br> ${shortTxHash(hash)}`
    $('.copyToastNotification').toast('show')
}

function fillBlanksToastNative() {
    var toastLiveExample = document.getElementById('fillBlanksToastNative')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()

}

function canceledTxToastNative() {
    var toastLiveExample = document.getElementById('canceledTxToastNative')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()

}

function shortAddress(address){
    let firstFive = address.substring(0, 4);
    let lastFive = address.slice(address.length - 4);
    let newAddress = `${firstFive}...${lastFive}`;
    return newAddress;
}

function shortTxHash(address){
    let firstFive = address.substring(0, 8);
    let lastFive = address.slice(address.length - 8);
    let newAddress = `${firstFive}...${lastFive}`;
    return newAddress;
}

function returnChainId(chainId){
    console.log("აქ მოვიდა: ", chainId)
    switch (chainId) {
        case '0x1': return 'eth';
        case '0x38': return 'bsc';
        case '0x89': return 'matic';
        case '0xa86a' : return 'avalanche';
        case 1: return 'eth';
        case 56: return 'bsc';
        case 137: return 'matic';
        case 43114 : return 'avalanche';
    }

    
}

const formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(2) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
};

async function addTokenMetamask(tokenSymbol, tokenContractAddres, tokenDecimal){
    web3.currentProvider.sendAsync({
        method: "wallet_watchAsset",
        params: {
            type: 'ERC20',
        options: {
            address: tokenContractAddres,
            symbol: tokenSymbol,
            decimals: tokenDecimal
        }
        }
    })
}

copyWalletAddress = async () => {
    navigator.clipboard.writeText(Moralis.User.current().get('ethAddress'));
    alert("დაკოპირდა თქვენი მისამართი");
}

async function attention(x){
    if (x == "unsupportedChain"){
        document.getElementById('AttentionMessage').innerHTML = 'გთხოვთ აირჩიოთ BSC, ETH, Polygon ან AVAX ქსელი.';
        document.getElementById('attentionAlert').style.display = 'block';
    }else if (x == "noWeb3"){
        document.getElementById('AttentionMessage').innerHTML = 'ეს აპლიკაცია მოითხოვს Metamask ან Trust Wallet-ის საფულეს.';
        document.getElementById('attentionAlert').style.display = 'block';
    }
}

async function switchToBscChain(){
    await Moralis.enableWeb3()
    await Moralis.switchNetwork("0x38");
}

async function switchToEthChain(){
    await Moralis.enableWeb3()
    await Moralis.switchNetwork("0x1");
}

async function switchToMaticChain(){
    await Moralis.enableWeb3()
    await Moralis.switchNetwork("0x89");
}

async function switchToAvaxChain(){
    await Moralis.enableWeb3()
    await Moralis.switchNetwork("0xa86a");
}

document.getElementById('switchToBSC').onclick = switchToBscChain;
document.getElementById('switchToETH').onclick = switchToEthChain;
document.getElementById('switchToMATIC').onclick = switchToMaticChain;
document.getElementById('switchToAVAX').onclick = switchToAvaxChain;

document.getElementById("btn-login-metamask").onclick = login;
document.getElementById("btn-login-trustwallet").onclick = login;
document.getElementById("btn-logout").onclick = logout;
document.getElementById("tokenBalanceContainer").style.display = 'none';
document.getElementById("userBEP20BalancesTab").style.display = 'none';
document.getElementById("userERC20BalancesTab").style.display = 'none';
document.getElementById("userMATIC20BalancesTab").style.display = 'none';
document.getElementById("userAVAX20BalancesTab").style.display = 'none';
document.getElementById("noTokensOnWallet").style.display = 'none';