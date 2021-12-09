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
    document.getElementById("noConnectedWallet").style.display = 'none';
    getNetwork();
    getStaking();
    checkWeb3();
}else{
    console.log("არ არის შესული")
    document.getElementById('btn-login').style.display = 'block';
    document.getElementById('connectedAddress').style.display = 'none';
    document.getElementById('switchNetworkBtn').style.display = 'none';
    document.getElementById("noConnectedWallet").style.display = 'block';
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
        document.getElementById('userNFTCounter').innerHTML = "0";
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
        var chainCoin = "BNB"
        var ExplorerName = "ნახე BSCScan-ზე"
        var explorerUrl = 'https://bscscan.com/address/'
    }else if(getNetworkName(chainID) == 'ETH'){
        document.getElementById('navbarDropdownMenuLink2').innerHTML = ethLogo + " Ethereum"
        var chainCoin = "ETH"
        var ExplorerName = "ნახე Etherscan-ზე"
        var explorerUrl = 'https://etherscan.io/address/'
    }else if(getNetworkName(chainID) == 'MATIC'){
        document.getElementById('navbarDropdownMenuLink2').innerHTML = maticLogo + " Polygon"
        var chainCoin = "MATIC"
        var ExplorerName = "ნახე Polygon-ზე"
        var explorerUrl = 'https://polygonscan.com/address/'
    }else if(getNetworkName(chainID) == 'AVAX'){
        document.getElementById('navbarDropdownMenuLink2').innerHTML = avaxLogo + " Avalanche"
        var chainCoin = "AVAX"
        var ExplorerName = "ნახე C Chain-ზე"
        var explorerUrl = 'https://cchain.explorer.avax.network/address/'
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

    const nativeBalance = await Moralis.Web3API.account.getNativeBalance({ chain: (getNetworkName(chainID).toLowerCase()), address: Moralis.User.current().get('ethAddress')});
    document.getElementById('walletNativeCoinBalance').innerHTML = `${chainCoin} ბალანსი: ` + (nativeBalance.balance / 1e18).toFixed(5);
    document.getElementById('viewOnExplorer').innerHTML = `<a target="_blank" href="${explorerUrl}${Moralis.User.current().get('ethAddress')}">${ExplorerName}</a>
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-box-arrow-up-right mb-2" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
    </svg>`;
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

/* Staking გვერდი დაიწყო აქ */

async function getStaking(){
    if (Moralis.User.current()){
        let yelPriceObj = [];
        let cakePriceObj = [];
        let lydPriceObj = [];
        let chePriceObj = [];

        await fetch('https://api.coingecko.com/api/v3/simple/price?ids=yel-finance&vs_currencies=usd')
        .then(response => response.json())
        .then(yeldata => {
            yelPriceObj.push(yeldata);
            
        });

        await fetch('https://api.coingecko.com/api/v3/simple/price?ids=pancakeswap-token&vs_currencies=usd')
        .then(response => response.json())
        .then(cakedata => {
            cakePriceObj.push(cakedata);
            
        });

        await fetch('https://api.coingecko.com/api/v3/simple/price?ids=lydia-finance&vs_currencies=usd')
        .then(response => response.json())
        .then(lyddata => {
            lydPriceObj.push(lyddata);
            
        });

        await fetch('https://api.coingecko.com/api/v3/simple/price?ids=cherryswap&vs_currencies=usd')
        .then(response => response.json())
        .then(chedata => {
            chePriceObj.push(chedata);
        });

        let yelPrice = yelPriceObj['0']['yel-finance'].usd;
        let cakePrice = cakePriceObj['0']['pancakeswap-token'].usd;
        let lydPrice = lydPriceObj['0']['lydia-finance'].usd;
        let chePrice = chePriceObj['0']['cherryswap'].usd;

        let userEthAddress = Moralis.User.current().get('ethAddress')


        /* CAKE STAKING MANUAL */
        const bscWeb3 = new Web3("https://bsc-dataseed1.defibit.io")
        const cakeMANUALADDRESS = '0x73feaa1eE314F8c655E354234017bE2193C9E24E';
        const CAKEMANUALABI = [{"inputs":[{"internalType":"contract CakeToken","name":"_cake","type":"address"},{"internalType":"contract SyrupBar","name":"_syrup","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_cakePerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract CakeToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingCake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigratorChef","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract SyrupBar","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
        const cakeStakingContractMANUAL = new bscWeb3.eth.Contract(CAKEMANUALABI, cakeMANUALADDRESS)

        let stakedCakeManual = await cakeStakingContractMANUAL.methods.userInfo(0, userEthAddress).call();

        if(stakedCakeManual[0] > 0) {
            document.getElementById("StakingCardsCAKE").style.display = 'block';
            setInterval(async function(){
                let pendingCakeManual = await cakeStakingContractMANUAL.methods.pendingCake(0, userEthAddress).call();
                let stakedCakeManual = await cakeStakingContractMANUAL.methods.userInfo(0, userEthAddress).call();
                
                let stakingCards = document.getElementById('StakingCardsCAKE')
                let content = `
                <div class="card card-blog card-plain">
                    <div class="position-relative">
                    <a class="d-block shadow-xl border-radius-xl" target="_blank" href="https://pancakeswap.finance/pools">
                        <img src="../img/staking_logos/pcs_staking_logo.jpg" alt="img-blur-shadow" class="img-fluid shadow border-radius-xl">
                    </a>
                    </div>
                    <div class="card-body px-1 pb-0">
                    <p class="text-gradient text-dark mb-2 text-sm">Binance Smart Chain</p>
                    <a>
                        <h5>
                        მიმდინარე: ${(pendingCakeManual / 1e18).toFixed(5)} ($${((pendingCakeManual / 1e18).toFixed(5) * cakePrice).toFixed(2)})
                        </h5>
                    </a>
                    <p class="mb-4 text-sm">
                        დასტეიკებული: ${(stakedCakeManual[0] / 1e18).toFixed(3)} ($${((stakedCakeManual[0] / 1e18).toFixed(3) * cakePrice).toFixed(2)})
                    </p>
                    </div>
                </div>
                `
                stakingCards.innerHTML = content;
            }, 3000) 
            
        }else{
            pendingCakeManual = 0;
            stakedgCakeManual = 0;
            document.getElementById("StakingCardsCAKE").style.display = 'none';
        }
        /* CAKE STAKING MANUAL */

        /* CAKE STAKING AUTO */
        setInterval(function(){
            fetch(`https://www.yieldwatch.net/api/all/${userEthAddress}?platforms=pancake`)
            .then(function(response){
				if(!response.ok){
					console.log("CAKE AUTO: API-სთან კავშირი ვერ მოხერხდა")
				}
				return response.json()
			})
            .then(data => {
                if(data.result.PancakeSwap.vaults.vaults.length > 0){
                    document.getElementById("StakingCardsCAKEAUTO").style.display = 'block';
                    let stakedCAKEAUTO = data.result.PancakeSwap.vaults.vaults[0].depositedTokens
                    let pendingCAKEAUTO = data.result.PancakeSwap.vaults.vaults[0].recentProfit


                    let stakingCards2 = document.getElementById('StakingCardsCAKEAUTO')
                    let content = `
                    <div class="card card-blog card-plain">
                        <div class="position-relative">
                        <a class="d-block shadow-xl border-radius-xl" target="_blank" href="https://pancakeswap.finance/pools">
                            <img src="../img/staking_logos/pcs_staking_logo.jpg" alt="img-blur-shadow" class="img-fluid shadow border-radius-xl">
                        </a>
                        </div>
                        <div class="card-body px-1 pb-0">
                        <p class="text-gradient text-dark mb-2 text-sm">Binance Smart Chain (AUTO)</p>
                        <a>
                            <h5>
                            მიმდინარე: ${(pendingCAKEAUTO).toFixed(5)} ($${((pendingCAKEAUTO).toFixed(5) * cakePrice).toFixed(2)})
                            </h5>
                        </a>
                        <p class="mb-4 text-sm">
                            დასტეიკებული: ${(stakedCAKEAUTO).toFixed(3)} ($${((stakedCAKEAUTO).toFixed(3) * cakePrice).toFixed(2)})
                        </p>
                        </div>
                    </div>
                    `
                    stakingCards2.innerHTML = content;

                }else{
                    pendingCAKEAUTO = 0
                    stakedCAKEAUTO = 0;
                    document.getElementById("StakingCardsCAKEAUTO").style.display = 'none';
                }

            });
        }, 5000)
        /* CAKE STAKING AUTO */

        /* YEL STAKING */
        const YELADDRESS = '0x954b15065e4FA1243Cd45a020766511b68Ea9b6E';
        const YELABI = [{"inputs":[{"internalType":"contract IERC20","name":"_yel","type":"address"},{"internalType":"uint256","name":"_yelPerSecond","type":"uint256"},{"internalType":"uint32","name":"_startTime","type":"uint32"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint16","name":"_allocPoint","type":"uint16"},{"internalType":"contract IERC20","name":"_stakingToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"addSeconds","type":"uint32"}],"name":"changeEndTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingYel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"stakingToken","type":"address"},{"internalType":"uint256","name":"stakingTokenTotalAmount","type":"uint256"},{"internalType":"uint256","name":"accYelPerShare","type":"uint256"},{"internalType":"uint32","name":"lastRewardTime","type":"uint32"},{"internalType":"uint16","name":"allocPoint","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint16","name":"_allocPoint","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_yelPerSecond","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"setYelPerSecond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"},{"internalType":"bool","name":"direct","type":"bool"},{"internalType":"bool","name":"renounce","type":"bool"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"remainingYelTokenReward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yel","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"yelPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
        const YELStakingContractMANUAL = new bscWeb3.eth.Contract(YELABI, YELADDRESS)

        let stakedYEL = await YELStakingContractMANUAL.methods.userInfo(0, userEthAddress).call();
    
        if(stakedYEL[0] > 0){
            document.getElementById("StakingCardsYEL").style.display = 'block';
            setInterval(async function(){
                let pendingYEL = await YELStakingContractMANUAL.methods.pendingYel(0, userEthAddress).call();
                let stakedYEL = await YELStakingContractMANUAL.methods.userInfo(0, userEthAddress).call();
                let stakingCards2 = document.getElementById('StakingCardsYEL')
                let content = `
                <div class="card card-blog card-plain">
                    <div class="position-relative">
                    <a class="d-block shadow-xl border-radius-xl" target="_blank" href="https://yel.finance/spectre">
                        <img src="../img/staking_logos/yel_staking_logo.jpg" alt="img-blur-shadow" class="img-fluid shadow border-radius-xl">
                    </a>
                    </div>
                    <div class="card-body px-1 pb-0">
                    <p class="text-gradient text-dark mb-2 text-sm">Binance Smart Chain</p>
                    <a>
                        <h5>
                        მიმდინარე: ${(pendingYEL / 1e18).toFixed(5)} ($${((pendingYEL / 1e18).toFixed(5) * yelPrice).toFixed(2)})
                        </h5>
                    </a>
                    <p class="mb-4 text-sm">
                        დასტეიკებული: ${(stakedYEL[0] / 1e18).toFixed(3)} ($${((stakedYEL[0] / 1e18).toFixed(3) * yelPrice).toFixed(2)})
                    </p>
                    </div>
                </div>
                `
                stakingCards2.innerHTML = content;
            }, 3000)   
        }else{
            pendingYEL = 0;
            stakedYEL = 0;
            document.getElementById("StakingCardsYEL").style.display = 'none';
        }
        /* YEL STAKING */
        /* LYD STAKING */
        const avaxWeb3 = new Web3("https://api.avax.network/ext/bc/C/rpc")
        const LYDADDRESS = '0xFb26525B14048B7BB1F3794F6129176195Db7766';
        const LYDABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_lyd","internalType":"contract LydToken"},{"type":"address","name":"_electrum","internalType":"contract ElectrumBar"},{"type":"address","name":"_devaddr","internalType":"address"},{"type":"uint256","name":"_lydPerSec","internalType":"uint256"},{"type":"uint256","name":"_startTimestamp","internalType":"uint256"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"SetDevAddress","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"address","name":"newAddress","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"UpdateEmissionRate","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"_lydPerSec","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"BONUS_MULTIPLIER","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IERC20"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"dev","inputs":[{"type":"address","name":"_devaddr","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"devaddr","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract ElectrumBar"}],"name":"electrum","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"enterStaking","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getMultiplier","inputs":[{"type":"uint256","name":"_from","internalType":"uint256"},{"type":"uint256","name":"_to","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"leaveStaking","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract LydToken"}],"name":"lyd","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"lydPerSec","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"pendingLyd","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"lpToken","internalType":"contract IERC20"},{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"lastRewardTimestamp","internalType":"uint256"},{"type":"uint256","name":"accLydPerShare","internalType":"uint256"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"bool","name":"_withUpdate","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"startTimestamp","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateEmissionRate","inputs":[{"type":"uint256","name":"_lydPerSec","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateMultiplier","inputs":[{"type":"uint256","name":"multiplierNumber","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updatePool","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_amount","internalType":"uint256"}]}];
        const LYDStakingContractMANUAL = new avaxWeb3.eth.Contract(LYDABI, LYDADDRESS)

        let stakedLYD = await LYDStakingContractMANUAL.methods.userInfo(0, userEthAddress).call();
    
        if(stakedLYD[0] > 0){
            document.getElementById("StakingCardsLYD").style.display = 'block';
            setInterval(async function(){
                let pendingLYD = await LYDStakingContractMANUAL.methods.pendingLyd(0, userEthAddress).call();
                let stakedLYD = await LYDStakingContractMANUAL.methods.userInfo(0, userEthAddress).call();
                let stakingCards2 = document.getElementById('StakingCardsLYD')
                let content = `
                <div class="card card-blog card-plain">
                    <div class="position-relative">
                    <a class="d-block shadow-xl border-radius-xl" target="_blank" href="https://www.lydia.finance/pools">
                        <img src="../img/staking_logos/lydia_staking_logo.jpg" alt="img-blur-shadow" class="img-fluid shadow border-radius-xl">
                    </a>
                    </div>
                    <div class="card-body px-1 pb-0">
                    <p class="text-gradient text-dark mb-2 text-sm">Avalanche</p>
                    <a>
                        <h5>
                        მიმდინარე: ${(pendingLYD / 1e18).toFixed(5)} ($${((pendingLYD / 1e18).toFixed(5) * lydPrice).toFixed(2)})
                        </h5>
                    </a>
                    <p class="mb-4 text-sm">
                        დასტეიკებული: ${(stakedLYD[0] / 1e18).toFixed(3)} ($${((stakedLYD[0] / 1e18).toFixed(3) * lydPrice).toFixed(2)})
                    </p>
                    </div>
                </div>
                `
                stakingCards2.innerHTML = content;
            }, 3000)   
        }else{
            pendingLYD = 0;
            stakedLYD = 0;
            document.getElementById("StakingCardsLYD").style.display = 'none';
        }
        /* LYD STAKING */
        /* CHERRY STAKING */
        const okexWeb3 = new Web3("https://exchainrpc.okex.org")
        const CHEADDRESS = '0xd90838EC67025E2b92d814AAe244Ac4ed889994D';
        const CHEABI = [{"constant":false,"inputs":[{"indexed":false,"internalType":"contract IBEP20","name":"_syrup","type":"address"},{"indexed":false,"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","payable":false,"type":"event"},{"constant":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","payable":false,"type":"event"},{"constant":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","payable":false,"type":"event"},{"constant":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","payable":false,"type":"event"},{"constant":false,"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accChePerShare","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"stopReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_from","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"indexed":false,"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"massUpdatePools","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"emergencyWithdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
        const CHEStakingContractMANUAL = new okexWeb3.eth.Contract(CHEABI, CHEADDRESS)

        let stakedCHE = await CHEStakingContractMANUAL.methods.userInfo(userEthAddress).call();
		
        if(stakedCHE[0] > 0){
            document.getElementById("StakingCardsCHE").style.display = 'block';
            setInterval(async function(){
                let pendingCHE = await CHEStakingContractMANUAL.methods.pendingReward(userEthAddress).call();
                let stakedCHE = await CHEStakingContractMANUAL.methods.userInfo(userEthAddress).call();
                let stakingCards2 = document.getElementById('StakingCardsCHE')
                let content = `
                <div class="card card-blog card-plain">
                    <div class="position-relative">
                    <a class="d-block shadow-xl border-radius-xl" target="_blank" href="https://www.cherryswap.net/pools/">
                        <img src="../img/staking_logos/cherry_staking_logo.jpg" alt="img-blur-shadow" class="img-fluid shadow border-radius-xl">
                    </a>
                    </div>
                    <div class="card-body px-1 pb-0">
                    <p class="text-gradient text-dark mb-2 text-sm">OKExCHAIN</p>
                    <a>
                        <h5>
                        მიმდინარე: ${(pendingCHE / 1e18).toFixed(5)} ($${((pendingCHE / 1e18).toFixed(5) * chePrice).toFixed(2)})
                        </h5>
                    </a>
                    <p class="mb-4 text-sm">
                        დასტეიკებული: ${(stakedCHE[0] / 1e18).toFixed(3)} ($${((stakedCHE[0] / 1e18).toFixed(3) * chePrice).toFixed(2)})
                    </p>
                    </div>
                </div>
                `
                stakingCards2.innerHTML = content;
            }, 3000)   
        }else{
            pendingCHE = 0;
            stakedCHE[0] = 0;
            document.getElementById("StakingCardsCHE").style.display = 'none';
        }
        /* CHERRY STAKING */
    }else{
        document.getElementById("StakingCardsCAKE").style.display = 'noConnectedWallet';
    }
	
}
/* Staking გვერდი დამთავრდა აქ */

fixURL = (url) => {
    if (url.startsWith("ipfs")){
        return "https://ipfs.moralis.io:2053/ipfs/" + url.split("ipfs://").slice(-1)
    }
    else{
        return url + "?format=json"
    }
}



function shortAddress(address){
    let firstFive = address.substring(0, 4);
    let lastFive = address.slice(address.length - 4);
    let newAddress = `${firstFive}...${lastFive}`;
    return newAddress;
}

function returnChainId(chainId){
    switch (chainId) {
        case 1: return "eth";
        case 56: return "bsc";
        case 137: return "matic";
      }
}

const formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(2) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
};

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

document.getElementById("StakingCardsCAKE").style.display = 'none';
document.getElementById("StakingCardsYEL").style.display = 'none';
document.getElementById("StakingCardsLYD").style.display = 'none';
document.getElementById("StakingCardsCHE").style.display = 'none';
document.getElementById("StakingCardsCAKEAUTO").style.display = 'none';
document.getElementById("btn-login-metamask").onclick = login;
document.getElementById("btn-login-trustwallet").onclick = login;
document.getElementById("btn-logout").onclick = logout;