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

let loading = `
<div class="spinner-grow spinner-grow-sm" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
`

/* აუთენთიფიკაციის ფუნქციები */
if (Moralis.User.current()){
    console.log("შესულია: ", Moralis.User.current().get('ethAddress'));
    document.getElementById('btn-login').style.display = 'none';
    document.getElementById('connectedAddress').style.display = 'block';
    document.getElementById('switchNetworkBtn').style.display = 'block';
    document.getElementById('connectedChainPrice').style.display = 'block';
    document.getElementById('walletAddress').innerHTML = Moralis.User.current().get('ethAddress') + copyButtonLogo;
    getNetwork();
    checkWeb3();
    dashboard();
}else{
    console.log("არ არის შესული");
    document.getElementById('btn-login').style.display = 'block';
    document.getElementById('connectedAddress').style.display = 'none';
    document.getElementById('switchNetworkBtn').style.display = 'none';
    document.getElementById('connectedChainPrice').style.display = 'none';
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
        document.getElementById('connectedChain').style.display = 'none'
        document.getElementById('connectedChainPrice').style.display = 'none'
        console.log("Gamovida")
    }catch(error){
        console.log(error);
    }
    window.location.reload()
}

async function checkWeb3(){
    const ethereum = window.ethereum;
    if (!ethereum || !ethereum.on){
        attention("noWeb3");
    }else{
        setWeb3Environment();
    }
}

function setWeb3Environment(){
    getNetwork();
    monitorNetwork();
}

async function getNetwork(){
    let userAddress = Moralis.User.current().get('ethAddress');
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
    }else{
        attention("unsupportedChain");
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
try{
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&community_data=false&developer_data=false')
    .then(function(response){
        if(!response.ok){
            fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
            .then(response => response.json())
            .then(data => {
                document.getElementById('bitcoinPriceCard').innerHTML = "$" + (data.USD).toLocaleString("en-US")
            })
        }
        return response.json()
    })
    .then(data => {

        if (data.market_data.price_change_percentage_1h_in_currency.usd > 0){
            var bitcoinPrice1hPercent = `<span class="text-success text-sm font-weight-bolder"> (${(data.market_data.price_change_percentage_1h_in_currency.usd).toFixed(2)}%)</span>`;
        }else{
            var bitcoinPrice1hPercent = `<span class="text-danger text-sm font-weight-bolder"> (${(data.market_data.price_change_percentage_1h_in_currency.usd).toFixed(2)}%)</span>`;
        }

        document.getElementById('bitcoinPriceCard').innerHTML = "$" + (data.market_data.current_price.usd).toLocaleString("en-US") + bitcoinPrice1hPercent;
        
    })
}catch(BTCPriceError){
    console.log(BTCPriceError);
}

try{
    fetch('https://api.coingecko.com/api/v3/search/trending')
    .then(function(response){
        if(!response.ok){
            let content = `
                <div class="timeline timeline-one-side">
                    <div class="alert alert-danger text-white justify-content-center" role="alert">
                        ცადეთ მოგვიანებით ან განაახლეთ გვერდი
                    </div>
                </div>
                `
            trendingCoins.innerHTML += content;
        }
        return response.json()
    })
    .then(data => {
        data.coins.forEach(t => {
            fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${t.item.id}&vs_currencies=usd`)
            .then(response => response.json())
            .then(price_usd =>{
                let coin_name = t.item.id;
                var trendingCoinPrice = price_usd[coin_name].usd;
                let content = `
                <div class="timeline timeline-one-side">
                    <div class="timeline-block mb-2">
                        <span class="timeline-step">
                    
                        <i><img src="${t.item.thumb}" alt=""></i>
                        </span>
                        <div class="timeline-content">
                        <h6 class="text-dark text-sm font-weight-bold mb-0"><a target="_blank" href="https://www.coingecko.com/en/coins/${t.item.id}">${t.item.name} (${t.item.symbol})</a></h6>
                        <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">$${(trendingCoinPrice).toFixed(3)}</p>
                        </div>
                    </div>
                </div>
                `
                trendingCoins.innerHTML += content;
            })

        })
    });

}catch(trendingCoinsError){
    console.log(trendingCoinsError)
}

try{
    fetch('https://api.coinmarketcap.com/data-api/v3/topsearch/rank')
    .then(function(response){
        if(!response.ok){
            let content = `
                <div class="timeline timeline-one-side">
                    <div class="alert alert-danger text-white justify-content-center" role="alert">
                        ცადეთ მოგვიანებით ან განაახლეთ გვერდი
                    </div>
                </div>
                `
                trendingCoinsCMC.innerHTML += content;
        }
        return response.json()
    })
    .then(data => {
        data.data.cryptoTopSearchRanks.forEach(t => {

            if (Number(t.priceChange.price).toFixed(8) < 0.0001){
                var trendingTokenPrice = Number(t.priceChange.price).toFixed(8);
            }else{
                trendingTokenPrice = Number(t.priceChange.price).toFixed(3)
            }

            let content = `
            <div class="timeline timeline-one-side">
                <div class="timeline-block mb-2">
                    <span class="timeline-step">
                
                    <i><img src="https://s2.coinmarketcap.com/static/img/coins/64x64/${t.id}.png" style="width: 30px;" alt=""></i>
                    </span>
                    <div class="timeline-content">
                    <h6 class="text-dark text-sm font-weight-bold mb-0"><a target="_blank" href="https://coinmarketcap.com/currencies/${t.slug}">${t.name} (${t.symbol})</a></h6>
                    <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">$${trendingTokenPrice}</p>
                    </div>
                </div>
            </div>
            `
            trendingCoinsCMC.innerHTML += content
        })
    });

}catch(trendingCoinsError){
    console.log(trendingCoinsError)
}

/* მთავარი გვერდის ფუნქციები */

async function dashboard(){
    chainId = window.ethereum.chainId;
    let _id = returnChainId(chainId);

    if (_id == "bsc"){
        var chainCoin = "BNB";
        var ExplorerName = "ნახე BSCScan-ზე";
        var explorerUrl = 'https://bscscan.com/address/';
        setInterval(function(){getDashboard(_id, chainCoin, ExplorerName, explorerUrl)}, 3000);
    }else if (_id == "eth"){
        var chainCoin = "ETH";
        var ExplorerName = "ნახე Etherscan-ზე";
        var explorerUrl = 'https://etherscan.io/address/';
        setInterval(function(){getDashboard(_id, chainCoin, ExplorerName, explorerUrl)}, 3000);
    }else if (_id == "matic"){
        var chainCoin = "MATIC";
        var ExplorerName = "ნახე Polygon-ზე";
        var explorerUrl = 'https://polygonscan.com/address/';
        setInterval(function(){getDashboard(_id, chainCoin, ExplorerName, explorerUrl)}, 3000);
    }else if (_id == "avalanche"){
        var chainCoin = "AVAX";
        var ExplorerName = "ნახე C Chain-ზე";
        var explorerUrl = 'https://cchain.explorer.avax.network/address/';
        setInterval(function(){getDashboard(_id, chainCoin, ExplorerName, explorerUrl)}, 3000);
    }else{
        attention("unsupportedChain");
    }
}

var totalBalance = [];
async function getDashboard(_id, chainCoin, ExplorerName, explorerUrl){
    let userAddress = Moralis.User.current().get('ethAddress');
    const nativeBalance = await Moralis.Web3API.account.getNativeBalance({ chain: _id, address: userAddress});
    document.getElementById('userNativeBalance').innerHTML = (nativeBalance.balance / 1e18).toFixed(5) + ` ${chainCoin}`;
    document.getElementById('walletNativeCoinBalance').innerHTML = `${chainCoin} ბალანსი: ` + (nativeBalance.balance / 1e18).toFixed(5);
    document.getElementById('viewOnExplorer').innerHTML = `<a target="_blank" href="${explorerUrl}${userAddress}">${ExplorerName}</a>
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-box-arrow-up-right mb-2" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
    </svg>`;

    const tokenBalances = await Moralis.Web3API.account.getTokenBalances({ chain: _id, address: userAddress});
    document.getElementById('userTokenCounter').innerHTML = tokenBalances.length;

    const nftCounter = await Moralis.Web3API.account.getNFTs({ chain: _id, address: userAddress});
    document.getElementById('userNFTCounter').innerHTML = nftCounter.total;

    const nativeBalanceBSC = await Moralis.Web3API.account.getNativeBalance({ chain: 'bsc', address: userAddress});
    document.getElementById('ocBSC').innerHTML = (nativeBalanceBSC.balance / 1e18).toFixed(4);
    const nativeBalanceETH = await Moralis.Web3API.account.getNativeBalance({ chain: 'eth', address: userAddress});
    document.getElementById('ocETH').innerHTML = (nativeBalanceETH.balance / 1e18).toFixed(4);
    const nativeBalanceMATIC = await Moralis.Web3API.account.getNativeBalance({ chain: 'matic', address: userAddress});
    document.getElementById('ocMATIC').innerHTML = (nativeBalanceMATIC.balance / 1e18).toFixed(4);
    const nativeBalanceAVAX = await Moralis.Web3API.account.getNativeBalance({ chain: 'avalanche', address: userAddress});
    document.getElementById('ocAVAX').innerHTML = (nativeBalanceAVAX.balance / 1e18).toFixed(4);

    fetch('https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ocBSCPrice').innerHTML = "$" + (data.USD * (nativeBalanceBSC.balance / 1e18)).toFixed(2);
        totalBalance.push((data.USD * (nativeBalanceBSC.balance / 1e18)));
    })
    
    fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ocETHPrice').innerHTML = "$" + (data.USD * (nativeBalanceETH.balance / 1e18)).toFixed(2);
        totalBalance.push((data.USD * (nativeBalanceETH.balance / 1e18)));
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ocMATICPrice').innerHTML = "$" + (data.USD * (nativeBalanceMATIC.balance / 1e18)).toFixed(2);
        totalBalance.push((data.USD * (nativeBalanceMATIC.balance / 1e18)));
    })

    fetch('https://min-api.cryptocompare.com/data/price?fsym=AVAX&tsyms=USD')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ocAVAXPrice').innerHTML = "$" + (data.USD * (nativeBalanceAVAX.balance / 1e18)).toFixed(2);
        totalBalance.push((data.USD * (nativeBalanceAVAX.balance / 1e18)));
    })

    let sum = 0;

    for (let i = 0; i < totalBalance.length; i++) {
        sum += totalBalance[i];
    }
    document.getElementById('fullBalancePrice').innerHTML = "$" + (sum).toLocaleString("en-US");
    totalBalance = [];
}

defiAndProjects();
function defiAndProjects(){
    const projects = ['bsc_pancakeswap', 'uniswap3', '1inch2', 'okt_cherryswap', 'avax_lydia', 'sushiswap'];

    for(var i = 0; i < projects.length ; i++){
        fetch('https://openapi.debank.com/v1/protocol?id=' + projects[i])
        .then(response => response.json())
        .then(data => {
            let PancakeSwap = `
            <tr>
                <td>
                <div class="d-flex px-2 py-1">
                    <div>
                    <img src="${data.logo_url}" class="avatar avatar-sm me-3" alt="xd">
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">${data.name}</h6>
                    </div>
                </div>
                </td>
                <td>
                <p class="mb-0 text-sm font-weight-bold">$${formatCash(data.tvl)}</p>
                </td>
                <td>
                <p class="mb-0 text-sm font-weight-bold">${(data.chain).toUpperCase()}</p>
                </td>
                <td class="align-middle text-center text-sm">
                <span class="text-sm font-weight-bold"> DEX </span>
                </td>
                <td class="align-middle text-center">
                <a target="_blank" href="${data.site_url}"><button class="btn bg-gradient-dark mb-0">საიტის ნახვა</button></a>
                </td>
            </tr>
            `
            topProjects.innerHTML += PancakeSwap;
        })
    }

    fetch('https://api.coingecko.com/api/v3/global/decentralized_finance_defi')
    .then(function(response){
        if(!response.ok){
            var dzaxilisNishani = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg>`;
            document.getElementById('defiMarketCap').innerHTML = dzaxilisNishani;
            document.getElementById('ethMarketCap').innerHTML = dzaxilisNishani;
            document.getElementById('defiVolume24h').innerHTML = dzaxilisNishani;
            document.getElementById('defiDominance').innerHTML = dzaxilisNishani;
            document.getElementById('defiTopCoin').innerHTML = dzaxilisNishani;
            document.getElementById('defiTopCoinDominance').innerHTML = dzaxilisNishani;
        }
        return response.json()
    })
    .then(data => {
        document.getElementById('defiMarketCap').innerHTML = "$" + formatCash(data.data.defi_market_cap);
        document.getElementById('ethMarketCap').innerHTML = "$" + formatCash(data.data.eth_market_cap);
        document.getElementById('defiVolume24h').innerHTML = "$" + formatCash(data.data.trading_volume_24h);
        document.getElementById('defiDominance').innerHTML = parseFloat(data.data.defi_dominance).toFixed(2) + "%";
        document.getElementById('defiTopCoin').innerHTML = data.data.top_coin_name;
        document.getElementById('defiTopCoinDominance').innerHTML = parseFloat(data.data.top_coin_defi_dominance).toFixed(2) + "%";
    })
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

/* ==================== */
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

function shortAddress(address){
    let firstFive = address.substring(0, 4);
    let lastFive = address.slice(address.length - 4);
    let newAddress = `${firstFive}...${lastFive}`;
    return newAddress;
}

function returnChainId(chainId){
    switch (chainId) {
        case '0x1': return "eth";
        case '0x38': return "bsc";
        case '0x89': return "matic";
        case '0xa86a' : return "avalanche";
        case 1: return "eth";
        case 56: return "bsc";
        case 137: return "matic";
        case 43114 : return "avalanche";

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