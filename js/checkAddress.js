appId = "EJALHA5FruaAIsbdRhW8wYPLMZ2NkX45hGIPT6gc";
serverUrl = "https://1zozt2vkykrm.usemoralis.com:2053/server";
Moralis.start({ serverUrl, appId });

document.getElementById('attentionAlert').style.display = 'none';

hideCardsResetInfo();

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
    checkWeb3();
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
                dashboard();
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

function shortAddress(address){
    let firstFive = address.substring(0, 4);
    let lastFive = address.slice(address.length - 4);
    let newAddress = `${firstFive}...${lastFive}`;
    return newAddress;
}

function copyTokenContractAddres(tokenContract){
    navigator.clipboard.writeText(tokenContract);
    alert("Copied!")
}

/* ყველა ინფოს ნახვა */
async function getAccountInfo(){
    let userAddress = document.getElementById('ethAddress').value;
    console.log(userAddress);
    var web3 = new Web3(window.ethereum);

    if (web3.utils.checkAddressChecksum(userAddress) == true){
        hideCardsResetInfo();
        userSmallInfo();

        /* ბალანსი სხვა ქსელებზე */
        
        const nativeBalanceBSC = await Moralis.Web3API.account.getNativeBalance({ chain: 'bsc', address: userAddress});
        document.getElementById('ocBSC').innerHTML = (nativeBalanceBSC.balance / 1e18).toFixed(8);
        const nativeBalanceETH = await Moralis.Web3API.account.getNativeBalance({ chain: 'eth', address: userAddress});
        document.getElementById('ocETH').innerHTML = (nativeBalanceETH.balance / 1e18).toFixed(8);
        const nativeBalanceMATIC = await Moralis.Web3API.account.getNativeBalance({ chain: 'matic', address: userAddress});
        document.getElementById('ocMATIC').innerHTML = (nativeBalanceMATIC.balance / 1e18).toFixed(8);
        const nativeBalanceAVAX = await Moralis.Web3API.account.getNativeBalance({ chain: 'avalanche', address: userAddress});
        document.getElementById('ocAVAX').innerHTML = (nativeBalanceAVAX.balance / 1e18).toFixed(8);

        fetch('https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ocBSCPrice').innerHTML = "$" + (data.USD * (nativeBalanceBSC.balance / 1e18)).toFixed(2);
        })
        
        fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ocETHPrice').innerHTML = "$" + (data.USD * (nativeBalanceETH.balance / 1e18)).toFixed(2);
        })

        fetch('https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ocMATICPrice').innerHTML = "$" + (data.USD * (nativeBalanceMATIC.balance / 1e18)).toFixed(2);
        })

        fetch('https://min-api.cryptocompare.com/data/price?fsym=AVAX&tsyms=USD')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ocAVAXPrice').innerHTML = "$" + (data.USD * (nativeBalanceAVAX.balance / 1e18)).toFixed(2);
        })

        document.getElementById("nativeBalancesCard").style.display = 'block';

        /* ბალანსი სხვა ქსელებზე */

        /* ტოკენების ბალანსი */

        const bscTokens = await Moralis.Web3API.account.getTokenBalances({ chain: 'bsc', address: userAddress });
        const ethTokens = await Moralis.Web3API.account.getTokenBalances({ chain: 'eth', address: userAddress });
        const maticTokens = await Moralis.Web3API.account.getTokenBalances({ chain: 'matic', address: userAddress });
        const avaxTokens = await Moralis.Web3API.account.getTokenBalances({ chain: 'avalanche', address: userAddress });

        document.getElementById('bscTokenBalance').innerHTML = bscTokens.length + " ტოკენი";
        document.getElementById('ethTokenBalance').innerHTML = ethTokens.length + " ტოკენი";
        document.getElementById('maticTokenBalance').innerHTML = maticTokens.length + " ტოკენი";
        document.getElementById('avaxTokenBalance').innerHTML = avaxTokens.length + " ტოკენი";

        document.getElementById("tokenBalancesCard").style.display = 'block';

        /* ტოკენების ბალანსი */

        /* NFT ბალანსი */

        const bscNFTs = await Moralis.Web3API.account.getNFTs({ chain: 'bsc', address: userAddress });
        const ethNFTs = await Moralis.Web3API.account.getNFTs({ chain: 'eth', address: userAddress });
        const maticNFTs = await Moralis.Web3API.account.getNFTs({ chain: 'matic', address: userAddress });
        const avaxNFTs = await Moralis.Web3API.account.getNFTs({ chain: 'avalanche', address: userAddress });
        document.getElementById('bscNFTBalance').innerHTML = bscNFTs.total + " NFT";
        document.getElementById('ethNFTBalance').innerHTML = ethNFTs.total + " NFT";
        document.getElementById('maticNFTBalance').innerHTML = maticNFTs.total + " NFT";
        document.getElementById('avaxNFTBalance').innerHTML = avaxNFTs.total + " NFT";

        document.getElementById("nftBalancesCard").style.display = 'block';

        /* NFT ბალანსი */
        
        /* ინფორმაცია ტრანზაქციებზე */

        document.getElementById("txInfoCard").style.display = 'block';

        const bscNativeTransactions = await Moralis.Web3API.account.getTransactions({ chain: "bsc", address: userAddress });
        document.getElementById('bscNativeTx').innerHTML = bscNativeTransactions.total;
        const ethNativeTransactions = await Moralis.Web3API.account.getTransactions({ chain: "eth", address: userAddress });
        document.getElementById('ethNativeTx').innerHTML = ethNativeTransactions.total;
        const maticNativeTransactions = await Moralis.Web3API.account.getTransactions({ chain: "matic", address: userAddress });
        document.getElementById('maticNativeTx').innerHTML = maticNativeTransactions.total;
        const avaxNativeTransactions = await Moralis.Web3API.account.getTransactions({ chain: "avalanche", address: userAddress });
        document.getElementById('avaxNativeTx').innerHTML = avaxNativeTransactions.total;
        
        var totalNativeTxs = bscNativeTransactions.total + ethNativeTransactions.total + maticNativeTransactions.total + avaxNativeTransactions.total;
        document.getElementById('totalNativeTx').innerHTML = "Native ტრანზაქციები: " + totalNativeTxs.toLocaleString("en-US");

        const bscTokenTxs = await Moralis.Web3API.account.getTokenTransfers({ chain: "bsc", address: userAddress, from_block: "0" });
        document.getElementById('bscTokenTx').innerHTML = bscTokenTxs.total;
        const ethTokenTxs = await Moralis.Web3API.account.getTokenTransfers({ chain: "eth", address: userAddress, from_block: "0" });
        document.getElementById('ethTokenTx').innerHTML = ethTokenTxs.total;
        const maticTokenTxs = await Moralis.Web3API.account.getTokenTransfers({ chain: "matic", address: userAddress, from_block: "0" });
        document.getElementById('maticTokenTx').innerHTML = maticTokenTxs.total;
        const avaxTokenTxs = await Moralis.Web3API.account.getTokenTransfers({ chain: "avalanche", address: userAddress, from_block: "0" });
        document.getElementById('avaxTokenTx').innerHTML = avaxTokenTxs.total;

        var totalTokensTx = bscTokenTxs.total + ethTokenTxs.total + maticTokenTxs.total + avaxTokenTxs.total;
        document.getElementById('totalTokensTx').innerHTML = "Token ტრანზაქციები: " + totalTokensTx.toLocaleString("en-US");

        offset = 0;
        txCounter = 1;
        let maticNativeSpentFee = [];
        let avaxNativeSpentFee = [];
        let ethNativeSpentFee = [];
        let bscNativeSpentFee = [];
        /* მატიკის */
        do {
            maticTokenSpentFees = await Moralis.Web3API.account.getTransactions({ chain: "matic", address: userAddress, from_block: "0", offset: offset });
            maticTokenSpentFees.result.forEach(x =>{
                maticNativeSpentFee.push((x.gas_price * x.receipt_gas_used) / 1e18);
                txCounter += 1;
            })
            offset += 500;
            
        }
        while (maticTokenSpentFees.result.length > 0);
        offset = 0;
        txCounter = 1;

        var maticNativeFees = maticNativeSpentFee.reduce(function(a, b) { return a + b; }, 0);
        document.getElementById('maticNativeFee').innerHTML = maticNativeFees.toFixed(5);
        /* მატიკის */
        /* AVAX */
        do {
            avaxTokenSpentFees = await Moralis.Web3API.account.getTransactions({ chain: "avalanche", address: userAddress, from_block: "0", offset: offset });
            avaxTokenSpentFees.result.forEach(x =>{
                avaxNativeSpentFee.push((x.gas_price * x.receipt_gas_used) / 1e18);
                txCounter += 1;
            })
            offset += 500;
            
        }
        while (avaxTokenSpentFees.result.length > 0);
        offset = 0;
        txCounter = 1;

        var avaxNativeFees = avaxNativeSpentFee.reduce(function(a, b) { return a + b; }, 0);
        document.getElementById('avaxNativeFee').innerHTML = avaxNativeFees.toFixed(5);
        /* AVAX */
        /* ETH */
        do {
            ethTokenSpentFees = await Moralis.Web3API.account.getTransactions({ chain: "eth", address: userAddress, from_block: "0", offset: offset });
            ethTokenSpentFees.result.forEach(x =>{
                ethNativeSpentFee.push((x.gas_price * x.receipt_gas_used) / 1e18);
                txCounter += 1;
            })
            offset += 500;
            
        }
        while (ethTokenSpentFees.result.length > 0);

        offset = 0;
        txCounter = 1;
        var ethNativeFees = ethNativeSpentFee.reduce(function(a, b) { return a + b; }, 0);
        document.getElementById('ethNativeFee').innerHTML = ethNativeFees.toFixed(5);
        /* ETH */
        /* BSC */
        do {
            bscTokenSpentFees = await Moralis.Web3API.account.getTransactions({ chain: "bsc", address: userAddress, from_block: "0", offset: offset });
            bscTokenSpentFees.result.forEach(x =>{
                bscNativeSpentFee.push((x.gas_price * x.receipt_gas_used) / 1e18);
                txCounter += 1;
            })
            offset += 500;
            
        }
        while (bscTokenSpentFees.result.length > 0);
        
        offset = 0;
        txCounter = 1;
        var bscNativeFees = bscNativeSpentFee.reduce(function(a, b) { return a + b; }, 0);
        document.getElementById('bscNativeFee').innerHTML = bscNativeFees.toFixed(5);
        /* BSC */

        /* ინფორმაცია ტრანზაქციებზე */
        
        getBEP20Balances();
        getUserNFTBalances();
        checkonOtherChains();
    }else{
        document.getElementById('copyToastMessage').innerHTML = `მისამართი არასწორადაა შეყვანილი!`
        $('.toast').toast('show');
    }
}
/* ყველა ინფოს ნახვა */

/* ტოტალებს აჩვენებს ეს */
async function userSmallInfo(){
    document.getElementById('totalBalTokensNFTs').style.display = 'block';
    let userAddress = document.getElementById('ethAddress').value;

    fetch("https://openapi.debank.com/v1/user/total_balance?id=" + userAddress)
    .then(function(response){
        if(!response.ok){
            document.getElementById("userPortfolioBalance").innerHTML = "!"
        }
        return response.json()
    })
    .then(data => {
        console.log(data);
        document.getElementById("userPortfolioBalance").innerHTML = "≈ $"+(data.total_usd_value).toLocaleString("en-US");
    })

    try{
        const bscTokens = await Moralis.Web3API.account.getTokenBalances({ chain: 'bsc', address: userAddress });
        const ethTokens = await Moralis.Web3API.account.getTokenBalances({ chain: 'eth', address: userAddress });
        const maticTokens = await Moralis.Web3API.account.getTokenBalances({ chain: 'matic', address: userAddress });
        const avaxTokens = await Moralis.Web3API.account.getTokenBalances({ chain: 'avalanche', address: userAddress });
        document.getElementById("userPortfolioTokens").innerHTML = bscTokens.length + ethTokens.length + maticTokens.length + avaxTokens.length;
    }catch(error){
        console.log(error);
    }

    try{
        const bscNFTs = await Moralis.Web3API.account.getNFTs({ chain: 'bsc', address: userAddress });
        const ethNFTs = await Moralis.Web3API.account.getNFTs({ chain: 'eth', address: userAddress });
        const maticNFTs = await Moralis.Web3API.account.getNFTs({ chain: 'matic', address: userAddress });
        const avaxNFTs = await Moralis.Web3API.account.getNFTs({ chain: 'avalanche', address: userAddress });

        document.getElementById("userPortfolioNFT").innerHTML = bscNFTs.total + ethNFTs.total + maticNFTs.total + avaxNFTs.total;
    }catch(error){
        console.log(error)
    }

}

/* ტოკენის კონტრაქტის მისამართის დაკოპირებ */
async function copyTokenContractAddres(tokenContract, symbol){
    navigator.clipboard.writeText(tokenContract);
    document.getElementById('copyToastMessage').innerHTML = `დაკოპირდა ${(symbol).toUpperCase()}-ის კონტრაქტის მისამართი! \n ${tokenContract}`
    $('.toast').toast('show');
}
/* ტოკენის კონტრაქტის მისამართის დაკოპირებ */

/* იუზერის ბალანსების ნახვა */
async function getBEP20Balances(){
    let userAddress = document.getElementById('ethAddress').value;
    const bscTokensBalances = await Moralis.Web3API.account.getTokenBalances({ chain: 'bsc', address: userAddress});
    const ethTokensBalances = await Moralis.Web3API.account.getTokenBalances({ chain: 'eth', address: userAddress});
    const maticTokensBalances = await Moralis.Web3API.account.getTokenBalances({ chain: 'matic', address: userAddress});
    const avaxTokensBalances = await Moralis.Web3API.account.getTokenBalances({ chain: 'avalanche', address: userAddress});

    if (bscTokensBalances.length > 0){
        document.getElementById('userBEP20BalancesTab').style.display = 'block';
        bscTokensBalances.forEach(bsct =>{
            console.log(bsct);

            let copyButton = `
            <svg xmlns="http://www.w3.org/2000/svg" onclick="copyTokenContractAddres('${bsct.token_address}', '${bsct.symbol}')" style="cursor: pointer;" width="14" height="14" class="mb-1" fill="#344767" class="bi bi-clipboard" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
            `

            let addToMetamaskBtn = `
            
            <button onclick="addTokenMetamask('${bsct.symbol}', '${bsct.token_address}', '${bsct.decimals}')" class="btn bg-gradient-white text-md">
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

            let userTokenBalances = `
            <tr>
                <td>
                    <div class="d-flex px-3 py-1">
                    <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm"><a target="_blank" href="https://bscscan.com/token/${bsct.token_address}">${bsct.name}</a></h6>
                        <span class="text-xs"><span class="font-weight-bold">${(bsct.symbol).toUpperCase()}</span></span>
                    </div>
                    </div>
                </td>
                <td class="align-middle">
                    <p class="mb-0 text-sm">${(bsct.balance / 10**bsct.decimals).toLocaleString("en-US")}</p>
                </td>
                <td class="align-middle">
                    <p class="mb-0 text-sm">${shortAddress(bsct.token_address)} ${copyButton}</p>
                </td>
                <td class="align-middle">
                ${addToMetamaskBtn}
                </td>
            </tr>

            `
            userBEP20Balances.innerHTML += userTokenBalances;
        })
    }

    if (ethTokensBalances.length > 0){
        document.getElementById('userERC20BalancesTab').style.display = 'block';
        ethTokensBalances.forEach(etht =>{
            console.log(etht);

            let copyButton = `
            <svg xmlns="http://www.w3.org/2000/svg" onclick="copyTokenContractAddres('${etht.token_address}', '${etht.symbol}')" style="cursor: pointer;" width="14" height="14" class="mb-1" fill="#344767" class="bi bi-clipboard" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
            `

            let addToMetamaskBtn = `
            
            <button onclick="addTokenMetamask('${etht.symbol}', '${etht.token_address}', '${etht.decimals}')" class="btn bg-gradient-white text-md">
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

            let userTokenBalances = `
            <tr>
                <td>
                    <div class="d-flex px-3 py-1">
                    <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm"><a target="_blank" href="https://etherscan.io/token/${etht.token_address}">${etht.name}</a></h6>
                        <span class="text-xs"><span class="font-weight-bold">${(etht.symbol).toUpperCase()}</span></span>
                    </div>
                    </div>
                </td>
                <td class="align-middle">
                    <p class="mb-0 text-sm">${(etht.balance / 10**etht.decimals).toLocaleString("en-US")}</p>
                </td>
                <td class="align-middle">
                    <p class="mb-0 text-sm">${shortAddress(etht.token_address)}  ${copyButton}</p>
                </td>
                <td class="align-middle">
                ${addToMetamaskBtn}
                </td>
            </tr>
            `

            userERC20Balances.innerHTML += userTokenBalances;
        })
    }

    if (maticTokensBalances.length > 0){
        document.getElementById('userMATIC20BalancesTab').style.display = 'block';
        maticTokensBalances.forEach(matict =>{

            let copyButton = `
            <svg xmlns="http://www.w3.org/2000/svg" onclick="copyTokenContractAddres('${matict.token_address}', '${matict.symbol}')" style="cursor: pointer;" width="14" height="14" class="mb-1" fill="#344767" class="bi bi-clipboard" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
            `

            let addToMetamaskBtn = `
            
            <button onclick="addTokenMetamask('${matict.symbol}', '${matict.token_address}', '${matict.decimals}')" class="btn bg-gradient-white text-md">
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

            let userTokenBalances = `
            <tr>
                <td>
                    <div class="d-flex px-3 py-1">
                    <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm"><a target="_blank" href="https://polygonscan.com/token/${matict.token_address}">${matict.name}</a></h6>
                        <span class="text-xs"><span class="font-weight-bold">${(matict.symbol).toUpperCase()}</span></span>
                    </div>
                    </div>
                </td>
                <td class="align-middle">
                    <p class="mb-0 text-sm">${(matict.balance / 10**matict.decimals).toLocaleString("en-US")}</p>
                </td>
                <td class="align-middle">
                    <p class="mb-0 text-sm">${shortAddress(matict.token_address)}  ${copyButton}</p>
                </td>
                <td class="align-middle">
                ${addToMetamaskBtn}
                </td>
            </tr>

            `
            userMATIC20Balances.innerHTML += userTokenBalances;
        })
    }

    if (avaxTokensBalances.length > 0){
        document.getElementById('userAVAX20BalancesTab').style.display = 'block';
        avaxTokensBalances.forEach(avaxt =>{

            let copyButton = `
            <svg xmlns="http://www.w3.org/2000/svg" onclick="copyTokenContractAddres('${avaxt.token_address}', '${avaxt.symbol}')" style="cursor: pointer;" width="14" height="14" class="mb-1" fill="#344767" class="bi bi-clipboard" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
            `

            let addToMetamaskBtn = `
            
            <button onclick="addTokenMetamask('${avaxt.symbol}', '${avaxt.token_address}', '${avaxt.decimals}')" class="btn bg-gradient-white text-md">
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

            let userTokenBalances = `
            <tr>
                <td>
                    <div class="d-flex px-3 py-1">
                    <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm"><a target="_blank" href="https://cchain.explorer.avax.network/address/${avaxt.token_address}">${avaxt.name}</a></h6>
                        <span class="text-xs"><span class="font-weight-bold">${(avaxt.symbol).toUpperCase()}</span></span>
                    </div>
                    </div>
                </td>
                <td class="align-middle">
                    <p class="mb-0 text-sm">${(avaxt.balance / 10**avaxt.decimals).toLocaleString("en-US")}</p>
                </td>
                <td class="align-middle">
                    <p class="mb-0 text-sm">${shortAddress(avaxt.token_address)} ${copyButton}</p>
                </td>
                <td class="align-middle">
                ${addToMetamaskBtn}
                </td>
            </tr>

            `
            userAVAX20Balances.innerHTML += userTokenBalances;
        })
    }

    if (avaxTokensBalances.length > 0 || maticTokensBalances.length > 0 || ethTokensBalances.length > 0 || bscTokensBalances.length > 0){
        document.getElementById('tokenBalanceContainer').style.display = 'block';
    }

}
/* იუზერის ბალანსების ნახვა */

/* იუზერის ნფტი ბალანსები */
async function getUserNFTBalances(){
    let userAddress = document.getElementById('ethAddress').value;
    const nftBsc = await Moralis.Web3API.account.getNFTs({ chain: 'bsc', address: userAddress });
    const nftEth = await Moralis.Web3API.account.getNFTs({ chain: 'eth', address: userAddress });
    const nftMatic = await Moralis.Web3API.account.getNFTs({ chain: 'matic', address: userAddress });
    const nftAvax = await Moralis.Web3API.account.getNFTs({ chain: 'avalanche', address: userAddress });

    console.log("NFTs on BSC: " ,nftBsc);
    if (nftBsc.result.length > 0){
        document.getElementById('userBEP20NFTTab').style.display = 'block';
        nftBsc.result.forEach(x =>{
            if (JSON.parse(x.metadata) != null){
                let metadata = JSON.parse(x.metadata);
                let content = `
                <div class="col-xl-2 mb-xl-0 mt-1">
                    <div class="card card-blog card-plain">
                    <div class="position-relative">
                        <a class="d-block shadow-xl border-radius-xl" >
                            <img src="${fixURL(metadata.image)}" alt="${metadata.name}" class="img-fluid shadow border-radius-xl">
                        </a>
                        </div>
                        <div class="card-body px-1">
                        <span class="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2">${metadata.name}</span>
                    </div>
                    </div>
                </div>
                `
                
                bscUserNFTs.innerHTML += content;
            }
        })
    }

    console.log("NFTs on ETH: " ,nftEth);
    if (nftEth.result.length > 0){
        document.getElementById('userERC20NFTTab').style.display = 'block';
        nftEth.result.forEach(x =>{
            if (JSON.parse(x.metadata) != null){
                let metadata = JSON.parse(x.metadata);
                let content = `
                <div class="col-xl-2 mb-xl-0 mt-1">
                    <div class="card card-blog card-plain">
                    <div class="position-relative">
                        <a class="d-block shadow-xl border-radius-xl" >
                            <img src="${fixURL(metadata.image)}" alt="${metadata.name}" class="img-fluid shadow border-radius-xl">
                        </a>
                        </div>
                        <div class="card-body px-1">
                        <span class="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2">${metadata.name}</span>
                    </div>
                    </div>
                </div>
                `
                
                ethUserNFTs.innerHTML += content;
            }
        })
    }

    console.log("NFTs on MATIC: " ,nftMatic);
    if (nftMatic.result.length > 0){
        document.getElementById('userMATIC20NFTTab').style.display = 'block';
        nftMatic.result.forEach(x =>{
            if (JSON.parse(x.metadata) != null){
                let metadata = JSON.parse(x.metadata);
                let content = `
                <div class="col-xl-2 mb-xl-0 mt-1">
                    <div class="card card-blog card-plain">
                    <div class="position-relative">
                        <a class="d-block shadow-xl border-radius-xl" >
                            <img src="${fixURL(metadata.image)}" alt="${metadata.name}" class="img-fluid shadow border-radius-xl">
                        </a>
                        </div>
                        <div class="card-body px-1">
                        <span class="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2">${metadata.name}</span>
                    </div>
                    </div>
                </div>
                `
                
                maticUserNFTs.innerHTML += content;
            }
        })
    }

    console.log("NFTs on AVAX: " ,nftAvax);
    if (nftAvax.result.length > 0){
        document.getElementById('userAVAX20NFTTab').style.display = 'block';
        nftAvax.result.forEach(x =>{
            if (JSON.parse(x.metadata) != null){
                let metadata = JSON.parse(x.metadata);
                let content = `
                <div class="col-xl-2 mb-xl-0 mt-1">
                    <div class="card card-blog card-plain">
                    <div class="position-relative">
                        <a class="d-block shadow-xl border-radius-xl" >
                            <img src="${fixURL(metadata.image)}" alt="${metadata.name}" class="img-fluid shadow border-radius-xl">
                        </a>
                        </div>
                        <div class="card-body px-1">
                        <span class="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2">${metadata.name}</span>
                    </div>
                    </div>
                </div>
                `
                
                avaxUserNFTs.innerHTML += content;
            }
        })
    }

    if (nftAvax.result.length > 0 || nftMatic.result.length > 0 || nftEth.result.length > 0 || nftBsc.result.length > 0){
        document.getElementById('nftBalanceContainer').style.display = 'block';
    }

}
/* იუზერის ნფტი ბალანსები */

/* იუზერის სტეიკები სხვა ქსელებზე */
async function checkonOtherChains(){

    let userAddress = document.getElementById('ethAddress').value;
    var chainNames = ['eth', 'bsc', 'xdai', 'matic', 'ftm', 'okt', 'heco', 'avax', 'op', 'arb', 'celo'];
    chainNames.forEach(saxeli =>{
        fetch('https://openapi.debank.com/v1/user/complex_protocol_list?id=' + userAddress + '&chain_id=' + saxeli)
        .then(function(response){
            if(!response.ok){
                let tokensTable = document.getElementById("alertErrorStaking");
                tokensTable.innerHTML = "";
                let noTokens = `
                <div class="alert alert-danger" style="color: white" role="alert">
                    დაფიქსირდა შეცდომა!
                </div>
                `
                alertErrorStaking.innerHTML = noTokens;
            }
            return response.json()
        })
        .then(bscdata => {
            console.log(bscdata);
            document.getElementById('stakingBalanceContainer').style.display = 'block';
            bscdata.forEach(dapp => {
                console.log(dapp);

            
                if (!("supply_token_list" in dapp.portfolio_item_list[0].detail)){
                    var stakedCoins = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-exclamation-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>`;
                }else{
                    var stakedCoins = (dapp.portfolio_item_list[0].detail.supply_token_list[0].amount).toFixed(3);
                }

                if (!("reward_token_list" in dapp.portfolio_item_list[0].detail)){
                    var pendingCoins = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-exclamation-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>`;
                }else{
                    var pendingCoins = (dapp.portfolio_item_list[0].detail.reward_token_list[0].amount).toFixed(3);
                }

                let userTokenBalances = `
                <tr>
                    <td>
                    <div class="d-flex px-2 py-1">
                        <div>
                        <img src="${dapp.logo_url}" class="avatar avatar-sm me-3" alt="user1">
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm"><a target="_url" href="${dapp.site_url}">${dapp.name}</a></h6>
                        </div>
                    </div>
                    <td>
                    <p class="text-sm font-weight-bold mb-0">${stakedCoins}</p>
                    </td>
                    <td>
                    <p class="text-sm font-weight-bold mb-0">${pendingCoins}</p>
                    </td>
                    <td>
                    <p class="text-sm font-weight-bold mb-0">$${(dapp.portfolio_item_list[0].stats.net_usd_value).toFixed(3)}</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                    <p class="text-sm font-weight-bold mb-0">${(dapp.chain).toUpperCase()}</p>
                    </td>
                </tr>
                `
                userOtherChainsBEP20.innerHTML += userTokenBalances;
            })
        })
    })
}
/* იუზერის სტეიკები სხვა ქსელებზე */

/* ტოკენის მეტამასკში დამატების ფუნქცია */
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
/* ტოკენის მეტამასკში დამატების ფუნქცია */

/* ქსელების ტაბების ფუნქცია */
function openCity(evt, cityName) {
    console.log("!")
    var i, x, tablinks;
    x = document.getElementsByClassName("tokenibistable");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabtabletokens");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
/* ქსელების ტაბების ფუნქცია */

/* ნფტის სურათის ლინკის მიღება */
fixURL = (url) => {
    try{
        if (url.startsWith("ipfs")){
            return "https://ipfs.moralis.io:2053/ipfs/" + url.split("ipfs://").slice(-1)
        }
        else{
            return "https://comnplayscience.eu/app/images/notfound.png"
        }
    }catch(error){
        console.log(error);
    }
}
/* ნფტის სურათის ლინკის მიღება */

function hideCardsResetInfo(){
    document.getElementById("nativeBalancesCard").style.display = 'none';
    document.getElementById("tokenBalancesCard").style.display = 'none';
    document.getElementById("nftBalancesCard").style.display = 'none';
    document.getElementById("txInfoCard").style.display = 'none';

    document.getElementById('tokenBalanceContainer').style.display = 'none';
    document.getElementById('userBEP20BalancesTab').style.display = 'none';
    document.getElementById('userERC20BalancesTab').style.display = 'none';
    document.getElementById('userMATIC20BalancesTab').style.display = 'none';
    document.getElementById('userAVAX20BalancesTab').style.display = 'none';

    document.getElementById('nftBalanceContainer').style.display = 'none';
    document.getElementById('userBEP20NFTTab').style.display = 'none';
    document.getElementById('userERC20NFTTab').style.display = 'none';
    document.getElementById('userMATIC20NFTTab').style.display = 'none';
    document.getElementById('userAVAX20NFTTab').style.display = 'none';

    document.getElementById('stakingBalanceContainer').style.display = 'none';

    document.getElementById('totalBalTokensNFTs').style.display = 'none';
    document.getElementById('userPortfolioBalance').innerHTML = "0";
    document.getElementById('userPortfolioTokens').innerHTML = "0";
    document.getElementById('userPortfolioNFT').innerHTML = "0";

    document.getElementById('ocBSC').innerHTML = "0";
    document.getElementById('ocETH').innerHTML = "0";
    document.getElementById('ocMATIC').innerHTML = "0";
    document.getElementById('ocAVAX').innerHTML = "0";
    document.getElementById('bscTokenBalance').innerHTML = "0";
    document.getElementById('ethTokenBalance').innerHTML = "0";
    document.getElementById('maticTokenBalance').innerHTML = "0";
    document.getElementById('avaxTokenBalance').innerHTML = "0";
    document.getElementById('bscNFTBalance').innerHTML = "0";
    document.getElementById('ethNFTBalance').innerHTML = "0";
    document.getElementById('maticNFTBalance').innerHTML = "0";
    document.getElementById('avaxNFTBalance').innerHTML = "0";
    document.getElementById('bscTokenTx').innerHTML = "0";
    document.getElementById('ethTokenTx').innerHTML = "0";
    document.getElementById('maticTokenTx').innerHTML = "0";
    document.getElementById('avaxTokenTx').innerHTML = "0";
    document.getElementById('totalTokensTx').innerHTML = "Token ტრანზაქციები: ";
    document.getElementById('bscNativeFee').innerHTML = "0";
    document.getElementById('ethNativeFee').innerHTML = "0";
    document.getElementById('maticNativeFee').innerHTML = "0";
    document.getElementById('avaxNativeFee').innerHTML = "0";

    document.getElementById('userBEP20Balances').innerHTML = "";
    document.getElementById('userERC20Balances').innerHTML = "";
    document.getElementById('userMATIC20Balances').innerHTML = "";
    document.getElementById('userAVAX20Balances').innerHTML = "";

    document.getElementById('bscUserNFTs').innerHTML = "";
    document.getElementById('ethUserNFTs').innerHTML = "";
    document.getElementById('maticUserNFTs').innerHTML = "";
    document.getElementById('avaxUserNFTs').innerHTML = "";

    document.getElementById('userOtherChainsBEP20').innerHTML = "";
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