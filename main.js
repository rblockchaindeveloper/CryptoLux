appId = "slc5M1IJ2gXqEsLtcgdZuQUmstaJavQdnsZyqnQl";
serverUrl = "https://jxerujhhrsxu.usemoralis.com:2053/server";
Moralis.start({ serverUrl, appId });
/* აუთენთიფიკაციის ფუნქციები */

if (Moralis.User.current()){
    console.log("შესულია")
    console.log(Moralis.User.current().get('ethAddress'))
    document.getElementById('btn-login').style.display = 'none';
    document.getElementById('btn-logout').style.display = 'block';
    getNetwork();
    dashboard();
    checkWeb3();
}else{
    console.log("არ არის შესული")
    document.getElementById('btn-login').style.display = 'block';
    document.getElementById('btn-logout').style.display = 'none';
}

login = async () => {
    try{
        currentUser = Moralis.User.current();
        if(!currentUser){
            currentUser = await Moralis.Web3.authenticate();
            console.log("logged in")
            document.getElementById('btn-login').style.display = 'block';
            document.getElementById('btn-logout').style.display = 'none';
            dashboard();
            checkWeb3();
        }
        document.getElementById('btn-login').style.display = 'none';
        document.getElementById('btn-logout').style.display = 'block';
    }catch(error){
        console.log(error);
    }
}

logout = async () => {
    try{
        await Moralis.User.logOut();
        document.getElementById('btn-login').style.display = 'block';
        document.getElementById('btn-logout').style.display = 'none';
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
        document.getElementById('connectedChain').innerHTML = "";
        console.log("Gamovida")
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
    chainID = await web3.eth.net.getId();
    document.getElementById('connectedChain').innerHTML = `ქსელი: ${getNetworkName(chainID)} | ${shortAddress(userAddress)}`
    document.getElementById('btn-logout').innerHTML = 'გამოსვლა ' + shortAddress(Moralis.User.current().get('ethAddress'));
}

function getNetworkName(chainID){
    networks = {
        1: "ETH",
        3: "ETH Ropsten Testnet",
        4: "ETH Rinkeby Testnet",
        5: "ETH Goerli Testnet",
        42: "ETH Kovan Testnet",
        56: "BSC",
        137: "MATIC",
        250: "FTM",
        66: "OEC",
        43114: "AVAX",
        128: "HT",
        1666600000: "ONE",
        42161 : "Arbi",
        10: "OP",
        70: "HOO"
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
    .then(response => response.json())
    .then(data => {

        if (data.market_data.price_change_percentage_1h_in_currency.usd > 0){
            var bitcoinPrice1hPercent = `<span class="text-success text-sm font-weight-bolder"> (${(data.market_data.price_change_percentage_1h_in_currency.usd).toFixed(2)}%)</span>`;
        }else{
            var bitcoinPrice1hPercent = `<span class="text-danger text-sm font-weight-bolder"> (${(data.market_data.price_change_percentage_1h_in_currency.usd).toFixed(2)}%)</span>`;
        }

        document.getElementById('bitcoinPriceCard').innerHTML = 
        "$" + (data.market_data.current_price.usd).toLocaleString("en-US") + bitcoinPrice1hPercent;
        
    })
}catch(BTCPriceError){
    console.log(BTCPriceError);
}


try{
    fetch('https://api.coingecko.com/api/v3/search/trending')
    .then(response => response.json())
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



/* მთავარი გვერდის ფუნქციები */
async function dashboard(){
    let userAddress = Moralis.User.current().get('ethAddress');
    let web3 = new Web3(window.ethereum);
    chainId = await web3.eth.net.getId();
    let _id = returnChainId(chainId);

    const nativeBalance = await Moralis.Web3API.account.getNativeBalance({ chain: _id, address: userAddress});
    document.getElementById('userNativeBalance').innerHTML = (nativeBalance.balance / 1e18).toFixed(5);

    const tokenBalances = await Moralis.Web3API.account.getTokenBalances({ chain: _id, address: userAddress});
    document.getElementById('userTokenCounter').innerHTML = tokenBalances.length;

    const nftCounter = await Moralis.Web3API.account.getNFTs({ chain: _id, address: userAddress})
    document.getElementById('userNFTCounter').innerHTML = nftCounter.total;

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
        
        document.getElementById('ocBSCPrice').innerHTML = "$" + (data.binancecoin.usd * (nativeBalanceBSC.balance / 1e18)).toFixed(2)
    })
    
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        
        document.getElementById('ocETHPrice').innerHTML = "$" + (data.ethereum.usd * (nativeBalanceETH.balance / 1e18)).toFixed(2)
    })

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        
        document.getElementById('ocMATICPrice').innerHTML = "$" + (data['matic-network'].usd * (nativeBalanceMATIC.balance / 1e18)).toFixed(2)
    })

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=binance-peg-avalanche&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        
        document.getElementById('ocAVAXPrice').innerHTML = "$" + (data['binance-peg-avalanche'].usd * (nativeBalanceAVAX.balance / 1e18)).toFixed(2)
    })
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
    .then(response => response.json())
    .then(data => {
        document.getElementById('defiMarketCap').innerHTML = "$" + formatCash(data.data.defi_market_cap);
        document.getElementById('ethMarketCap').innerHTML = "$" + formatCash(data.data.eth_market_cap);
        document.getElementById('defiVolume24h').innerHTML = "$" + formatCash(data.data.trading_volume_24h);
        document.getElementById('defiDominance').innerHTML = parseFloat(data.data.defi_dominance).toFixed(2) + "%";
        document.getElementById('defiTopCoin').innerHTML = data.data.top_coin_name;
        document.getElementById('defiTopCoinDominance').innerHTML = parseFloat(data.data.top_coin_defi_dominance).toFixed(2) + "%";
    })
}

/* ==================== */

/* პორტფოლიოს გვერდი */
portfolioDashboard()
async function portfolioDashboard(){
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

/* ტოკენების ბალანსი და გაგზავნა */
getUserERC20TokenBalances = async (chain) => {
    let userAddress = Moralis.User.current().get('ethAddress');
    let web3 = new Web3(window.ethereum);
    chainId = await web3.eth.net.getId();
    let _id = returnChainId(chainId);
    const balances = await Moralis.Web3API.account.getTokenBalances({ chain: chain, address: userAddress});
    console.log(balances);
    if (balances.length > 0){
        document.getElementById("onChainTokenCounter").innerHTML = "ტოკენები: " + balances.length;
        if (chain == 'bsc'){
            var logoUrl = '/img/unknow_tokens/bsc.webp';
        }else if(chain == 'eth'){
            var logoUrl = '/img/unknow_tokens/eth.webp';
        }else if(chain == 'matic'){
            var logoUrl = '/img/unknow_tokens/matic.webp';
        }else if(chain == "avalanche"){
            var logoUrl = '/img/unknow_tokens/avax.png';
        }

        balances.forEach(bal =>{
            
            if (chain == 'bsc'){
                var explorerURL = `<a target="_blank" href="https://bscscan.com/token/${bal.token_address}">${bal.name}</a>`;
            }else if(chain == 'eth'){
                var explorerURL = `<a target="_blank" href="https://etherscan.io/token/${bal.token_address}">${bal.name}</a>`;
            }else if(chain == 'matic'){
                var explorerURL = `<a target="_blank" href="https://polygonscan.com/token/${bal.token_address}">${bal.name}</a>`;
            }else if(chain == "avalanche"){
                var explorerURL = `<a target="_blank" href="https://cchain.explorer.avax.network/tokens/${bal.token_address}">${bal.name}</a>`;
            }

            var fullTokenBalance = (bal.balance / 10**bal.decimals);

            let userTokenBalances = `
            <tr>
                <td>
                <div class="d-flex px-2 py-1">
                    <div>
                    <img src="${logoUrl}" class="avatar avatar-sm me-3" alt="user1">
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">${explorerURL}</h6>
                    <p class="text-xs text-secondary mb-0"></p>
                    </div>
                </div>
                </td>
                <td>
                <p class="text-sm font-weight-bold mb-0">${bal.symbol}</p>
                <p class="text-xs text-secondary mb-0"></p>
                </td>
                <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success" style="font-size: 0.87rem;">${(bal.balance / 10**bal.decimals).toLocaleString("en-US")}</span>
                </td>
                <td class="align-middle text-center">
                <p class="text-sm font-weight-bold mb-0">$1.23</p>
                </td>
                <td class="align-middle">
                <button onclick="renderTransfer('${bal.symbol}', '${bal.name}', '${bal.token_address}', '${bal.decimals}', '${fullTokenBalance}')" href="#sendTokenModal" type="button " class="btn bg-gradient-dark mb-0 ${chain != _id ? "disabled" : ""}" data-bs-toggle="modal" data-bs-target="#sendTokenModal">
                    გაგზავნა
                </button>
                </td>
            </tr>
            `
            userERC20Balances.innerHTML += userTokenBalances;
        })
        
    }else{
        let tokensTable = document.getElementById("alertNoTokens");
        tokensTable.innerHTML = "";
        let noTokens = `
        <div class="alert alert-danger" style="color: white" role="alert">
            ${chain.toUpperCase()} ქსელზე თქვენ არ გაქვთ ტოკენები!
        </div>
        `
        alertNoTokens.innerHTML = noTokens;
    }
}

function renderTransfer(symbol, name, tokenContract, decimali, fullBalanceToken) {
    console.log(tokenContract);
    console.log(decimali);
    console.log(symbol, name);
    console.log(fullBalanceToken);
    
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
        <button onclick="tryTransfer('${symbol}', '${name}', '${tokenContract}', '${decimali}')" type="button" class="btn btn-primary">გაგზავნა</button>
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
        var confirmed = confirm(`დაადასტურეთ ტრანზაქცია\n\nსაიდან: ${Moralis.User.current().get('ethAddress')}\nსად: ${address}\nრაოდენობა: ${amount} ${symbol}`);
        if(confirmed == true) {
            await tokenTransfer(amount, address, decimali, tokenContract);
        }else{
            canceledTxToast();
        }
    }
}

async function tokenTransfer(amount, address, decimali, tokenContract) {
    await Moralis.enable();
    try{
        const options = {
            type: "erc20", 
            amount: Moralis.Units.Token(amount, decimali),
            receiver: address,
            contract_address: tokenContract
        }
        let result = await Moralis.transfer(options);
        alert("ტრანზაქცია შესრულდა!");
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

function getUserTokenBalances() {
    let tokensTable = document.getElementById("userERC20Balances");
    tokensTable.innerHTML = "";
    let alertNoTokens = document.getElementById("alertNoTokens");
    alertNoTokens.innerHTML = "";
    let onChainTokenCounter = document.getElementById("onChainTokenCounter");
    onChainTokenCounter.innerHTML = "";
    var select = document.getElementById('selectBalanceChain');
    var option = select.options[select.selectedIndex];
    document.getElementById('fullTokensTable').style.display = 'block';
    if(option.value == "bsc"){

        getUserERC20TokenBalances('bsc');
    }else if(option.value == "eth"){
        getUserERC20TokenBalances('eth');
    }else if(option.value == "matic"){
        getUserERC20TokenBalances('matic');
    }else if(option.value == "avalanche"){
        getUserERC20TokenBalances('avalanche');
    }else{
        let tokensTable = document.getElementById("alertNoTokens");
        tokensTable.innerHTML = "";
        let noTokens = `
        <div class="alert alert-danger" style="color: white" role="alert">
            ქსელის არჩევის გარეშე თქვენს ტოკენებს ვერ ნახავთ!
        </div>
        `
        alertNoTokens.innerHTML = noTokens;

    }
}
/* ტოკენების ბალანსი და გაგზავნა დამთავრდა აქ */
/* ===================== */

/* ნატივ ქოინის ბალანსი და გაგზავნა */
async function portfolioNativeCoins(){
    let userAddress = Moralis.User.current().get('ethAddress');
    let web3 = new Web3(window.ethereum);
    chainId = await web3.eth.net.getId();
    let _id = returnChainId(chainId);
    
    document.getElementById("sendNativeBNB").classList.add('disabled');
    document.getElementById("sendNativeETH").classList.add('disabled');
    document.getElementById("sendNativeMATIC").classList.add('disabled');
    document.getElementById("sendNativeAVAX").classList.add('disabled');

    if (_id == 'bsc'){
        document.getElementById("sendNativeBNB").classList.remove('disabled');
    }else if(_id == 'eth'){
        document.getElementById("sendNativeETH").classList.remove('disabled');
    }else if(_id == 'matic'){
        document.getElementById("sendNativeMATIC").classList.remove('disabled');
    }else if(_id == 'avalanche'){
        document.getElementById("sendNativeAVAX").classList.remove('disabled');
    }


}

async function renderNativeTransfer() {
    let userAddress = Moralis.User.current().get('ethAddress');
    let web3 = new Web3(window.ethereum);
    chainId = await web3.eth.net.getId();
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
        <button onclick="tryNativeTransfer()" type="button" id="sendNativeCoinButton" class="btn ${(_id == "bsc") ? "bg-gradient-warning" : (_id == "eth") ? "bg-gradient-info" : (_id == "mati") ? "bg-gradient-primary" : (_id == "avalanche") ? "bg-gradient-danger" : "bg-gradient-primary"}">გაგზავნა</button>
    </div>
    `);
}

async function tryNativeTransfer() {
    await Moralis.enable();
    let amount = $("#nativeTokenReciverAmount").val();
    let address = $("#nativeTokenReciverAddress").val();

    if(amount == "" || address == "") {
        fillBlanksToastNative();
        
    }else{
        var confirmed = confirm("დაადასტურეთ ტრანზაქცია!\n\nსაიდან: " + Moralis.User.current().get('ethAddress') + "\nსად: " + address + "\nრაოდენობა: " + amount);
        if(confirmed == true) {
            const options = {type: "native", 
                     amount: Moralis.Units.ETH(amount), 
                     receiver: address}
            let result = await Moralis.transfer(options)
        }else{
            canceledTxToastNative();
        }
    }
}

async function setNativeTokenMaxValue(value){
    document.getElementById('nativeTokenReciverAmount').value = value;

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
/* ნატივ ქოინის ბალანსი და გაგზავნა დამთავრდა აქ*/
/* ===================== */

/* NFT ბალანსი */
async function getUserNFTs(chain){
    let web3 = new Web3(window.ethereum);
    chainId = await web3.eth.net.getId();
    let _id = returnChainId(chainId);
    const options = { chain: chain, address: Moralis.User.current().get('ethAddress') };
    const nft = await Moralis.Web3API.account.getNFTs(options);
    let tableOfNFTS = document.querySelector('#nft-balance-cards');

    if (nft.result.length > 0){
        nft.result.forEach(x =>{
            let nftAddress = x.token_address;
            let nftID = x.token_id;
            if (JSON.parse(x.metadata) != null){
                let metadata = JSON.parse(x.metadata);
                let nftName = metadata.name;
                let nftImg = fixURL(metadata.image);
                let content = `
                <li>
                    <a href="#${chain == _id ? "sendNFTModal" : ""}" onclick="renderNFTTransfer('${nftName}', '${nftAddress}', '${nftID}', '${nftImg}')" type="button" class="card" data-bs-toggle="modal" data-bs-target="#${chain == _id ? "sendNFTModal" : ""}">
                    <img src="${fixURL(metadata.image)}" class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <img class="card__thumb" src="${fixURL(metadata.image)}" alt="" />
                        <div class="card__header-text">
                            <h3 class="card__title">${metadata.name}</h3>            
                            <span class="card__status">${chain.toUpperCase()}</span>
                        </div>
                        </div>
                        <p class="card__description">${metadata.description}</p>
                    </div>
                    </a>      
                </li>
                `
                tableOfNFTS.innerHTML += content;
            }
        })
    }else{
        let errorOfNFTS = document.getElementById('alertNoNFT');
        let content = `
        <div class="alert alert-danger" role="alert" style="color: white">
            ${chain.toUpperCase()} ქსელზე თქვენ არ გაქვთ NFT!
        </div>
        `
        errorOfNFTS.innerHTML = content;
    }
}

function renderNFTTransfer(nftName, nftAddress, nftID) {

    $("#nftName").html(nftName + " გაგზავნა");
    $("#transferNFTModalBody").html(`
    <p class="text-xs mt-1 mb-1 font-weight-bolder">მიმღების მისამართი:</p>
    <input id="NFTReciverAddress" type="text" class="form-control" placeholder="მისამართი" aria-label="Username" aria-describedby="addon-wrapping">
    <div class="modal-footer mt-2">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">დახურვა</button>
        <button onclick="tryNFTTransfer('${nftAddress}', '${nftID}', '${nftName}')" type="button" class="btn bg-gradient-primary"}">გაგზავნა</button>
    </div>
    `);
}

async function tryNFTTransfer(nftAddress, nftID, nftName) {
    let address = $("#NFTReciverAddress").val();
    if (address == ""){
        fillBlanksToastNFT();
    }else{
        var confirmed = confirm(`დაადასტურეთ ტრანზაქცია\n\nსაიდან: ${Moralis.User.current().get('ethAddress')}\nსად: ${address} \nNFT: ${nftName}`);
        if(confirmed == true) {
            await nftTransfer(address, nftAddress, nftID);
        }else{
            canceledTxToastNFT()
        }
    }
}

async function nftTransfer(address, tokenContract, nftID) {
    await Moralis.enable();
    try{
        const options = {type: "erc721",  
                        receiver: address,
                        contractAddress: tokenContract,
                        tokenId: nftID
        }
        let result = await Moralis.transfer(options)
        alert("ტრანზაქცია შესრულდა!");
    }catch(err){

        alert("Ohh no!\n Something went wrong: " + err.message);
    }
}

function getSelectedNFTChain() {
    var Table = document.getElementById("nft-balance-cards");
    Table.innerHTML = "";
    var errorOfNFTS = document.getElementById("alertNoNFT");
    errorOfNFTS.innerHTML = "";
    var selectNFT = document.getElementById('selectNFTChain');
    var optionNFT = selectNFT.options[selectNFT.selectedIndex];
    
    if(optionNFT.value == "bsc"){
        getUserNFTs('bsc');
    }else if(optionNFT.value == "eth"){
        getUserNFTs('eth');
    }else if(optionNFT.value == "matic"){
        getUserNFTs('matic');
    }else if(optionNFT.value == "avalanche"){
        getUserNFTs('avalanche');
    }else{
        let nftErrorTable = document.getElementById("alertNoNFT");
        nftErrorTable.innerHTML = "";
        let nftErrorTableContent = `
        <div class="alert alert-danger" style="color: white" role="alert">
            ქსელის არჩევის გარეშე თქვენს NFT-ს ვერ ნახავთ!
        </div>
        `
        nftErrorTable.innerHTML = nftErrorTableContent;
    }
}

function fillBlanksToastNFT() {
    var toastLiveExample = document.getElementById('fillBlanksToastNFT')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()

}

function canceledTxToastNFT() {
    var toastLiveExample = document.getElementById('canceledTxToastNFT')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()

}
/* NFT ბალანსი დამთავრდა აქ*/
/* =============== */

/* Staking გვერდი დაიწყო აქ */
getStaking();
async function getStaking(){

    document.getElementById("StakingCardsCAKE").style.display = 'none';
    document.getElementById("StakingCardsYEL").style.display = 'none';
    document.getElementById("StakingCardsLYD").style.display = 'none';
    document.getElementById("StakingCardsCHE").style.display = 'none';
    document.getElementById("StakingCardsCAKEAUTO").style.display = 'none';

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
        .then(response => response.json())
        .then(data => {
            if(data.result.PancakeSwap.vaults.vaults[0].depositedTokens > 0){
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
}
/* Staking გვერდი დამთავრდა აქ */

/* ქსელების დამატების გვერდი დაიწყო აქ */

async function addBscNetwork(){
    try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x38' }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0x38',
                    chainName: 'BSC Mainnet',
                    nativeCurrency: {
                        name: 'Binance Coin',
                        symbol: 'BNB',
                        decimals: 18
                    },
                    rpcUrls: ['https://bsc-dataseed1.defibit.io'],
                    blockExplorerUrls: ['https://bscscan.com/']
                }]
            });
          } catch (addError) {
            console.log("addError", addError)
          }
        }
        // handle other "switch" errors
    }
}

async function addMaticNetwork(){
    try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x89' }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0x89',
                    chainName: 'Matic Mainnet',
                    nativeCurrency: {
                        name: 'MATIC',
                        symbol: 'MATIC',
                        decimals: 18
                    },
                    rpcUrls: ['https://rpc-mainnet.maticvigil.com'],
                    blockExplorerUrls: ['https://polygonscan.com/']
                }]
            });
          } catch (addError) {
            console.log("addError", addError)
          }
        }
        // handle other "switch" errors
    }
}

async function addAvaxNetwork(){
    try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xa86a' }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0xa86a',
                    chainName: 'Avalanche Mainnet',
                    nativeCurrency: {
                        name: 'Avalanache',
                        symbol: 'AVAX',
                        decimals: 18
                    },
                    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
                    blockExplorerUrls: ['https://cchain.explorer.avax.network/']
                }]
            });
          } catch (addError) {
            console.log("addError", addError)
          }
        }
        // handle other "switch" errors
    }
}

async function addFtmNetwork(){
    try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xfa' }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0xfa',
                    chainName: 'Fantom Mainnet',
                    nativeCurrency: {
                        name: 'Fantom',
                        symbol: 'FTM',
                        decimals: 18
                    },
                    rpcUrls: ['https://rpc.ftm.tools/'],
                    blockExplorerUrls: ['https://ftmscan.com/']
                }]
            });
          } catch (addError) {
            console.log("addError", addError)
          }
        }
        // handle other "switch" errors
    }
}

async function addOecNetwork(){
    try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x42' }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0x42',
                    chainName: 'OKExChain Mainnet',
                    nativeCurrency: {
                        name: 'OKT',
                        symbol: 'OKT',
                        decimals: 18
                    },
                    rpcUrls: ['https://exchainrpc.okex.org'],
                    blockExplorerUrls: ['https://www.oklink.com/okexchain/']
                }]
            });
          } catch (addError) {
            console.log("addError", addError)
          }
        }
        // handle other "switch" errors
    }
}

async function addHecoNetwork(){
    try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x80' }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0x80',
                    chainName: 'HECO Mainnet',
                    nativeCurrency: {
                        name: 'Huobi Token',
                        symbol: 'HT',
                        decimals: 18
                    },
                    rpcUrls: ['https://http-mainnet.hecochain.com'],
                    blockExplorerUrls: ['https://hecoinfo.com/']
                }]
            });
          } catch (addError) {
            console.log("addError", addError)
          }
        }
        // handle other "switch" errors
    }
}

async function addOneNetwork(){
    try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x63564c40' }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0x63564c40',
                    chainName: 'Harmony Mainnet',
                    nativeCurrency: {
                        name: 'Harmony',
                        symbol: 'ONE',
                        decimals: 18
                    },
                    rpcUrls: ['https://api.harmony.one'],
                    blockExplorerUrls: ['https://explorer.harmony.one/']
                }]
            });
          } catch (addError) {
            console.log("addError", addError)
          }
        }
        // handle other "switch" errors
    }
}

async function addArbNetwork(){
    try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xa4b1' }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0xa4b1',
                    chainName: 'Arbitrum Mainnet',
                    nativeCurrency: {
                        name: 'Ethereum',
                        symbol: 'ETH',
                        decimals: 18
                    },
                    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
                    blockExplorerUrls: ['https://arbiscan.io/']
                }]
            });
          } catch (addError) {
            console.log("addError", addError)
          }
        }
        // handle other "switch" errors
    }
}

async function addOpNetwork(){
    try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xa' }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0xa',
                    chainName: 'Optimistic',
                    nativeCurrency: {
                        name: 'Ethereum',
                        symbol: 'ETH',
                        decimals: 18
                    },
                    rpcUrls: ['https://mainnet.optimism.io/'],
                    blockExplorerUrls: ['https://optimistic.etherscan.io/']
                }]
            });
          } catch (addError) {
            console.log("addError", addError)
          }
        }
        // handle other "switch" errors
    }
}

async function addHooNetwork(){
    try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x46' }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0x46',
                    chainName: 'Hoo Smart Chain',
                    nativeCurrency: {
                        name: 'Hoo Token',
                        symbol: 'HOO',
                        decimals: 18
                    },
                    rpcUrls: ['https://http-mainnet.hoosmartchain.com/'],
                    blockExplorerUrls: ['https://hscscan.com/']
                }]
            });
          } catch (addError) {
            console.log("addError", addError)
          }
        }
        // handle other "switch" errors
    }
}

/* ქსელების დამატების გვერდი დამთავრდა აქ */

/* ტოკენების კატეგორია */

tokensCategory();
async function tokensCategory(){
    fetch('https://api.coingecko.com/api/v3/coins/categories')
    .then(response => response.json())
    .then(data => {
        var counter = 1;
        data.forEach(tc =>{

            const tokensCategory = document.getElementById('tokensCategoryList');

            if (tc.market_cap_change_24h > 0){
                var market_cap_change_24h = `<p class="text-sm" style="color: green;">${(tc.market_cap_change_24h).toFixed(2)}%</p>`
            }else{
                var market_cap_change_24h = `<p class="text-sm" style="color: red;">${(tc.market_cap_change_24h).toFixed(2)}%</p>`
            }

            let content = `
            <tr>
                <td>
                <div class="d-flex px-3 py-1">
                    <div class="d-flex alig flex-column justify-content-center">
                    <h6 class="mb-0 text-sm" >${counter}</a></h6>     
                    </div>
                </div>
                </td>
                <td>
                <div class="d-flex px-3 py-1">
                    <div class="d-flex alig flex-column justify-content-center">
                    <h6 class="mb-0 text-sm"><a target="_blank" href="https://www.coingecko.com/en/categories/${tc.id}">${tc.name}</a></h6>     
                    </div>
                </div>
                </td>
                <td class="align-middle">
                <p class="text-sm font-weight-bold mb-0">$${(tc.market_cap).toLocaleString("en-US")}</p>
                <p class="text-xs text-secondary mb-0">${market_cap_change_24h}</p>
                </td>
                <td class="align-middle text-center">
                <p class="text-sm font-weight-bold mb-0">$${(tc.volume_24h).toLocaleString("en-US")}</p>
                </td>
                
            </tr>
            `
            tokensCategory.innerHTML += content;
            counter += 1;
        })

    })
} 
/* ტოკენების კატეგორია დამთავრდა აქ  */

/* პროტოკოლები იწყება აქ  */

getProtocols();
async function getProtocols(){
     
    fetch('https://api.llama.fi/protocols')
    .then(response => response.json())
    .then(data => {

        const protocolList = document.getElementById('protocolList');
        let protocolRank = 1;
        for (let protocolLength = 0; protocolLength < 100; protocolLength++){
            
            if (data[protocolLength].logo == null){
                var protocolLogo = `https://cdn.moralis.io/eth/${(data[protocolLength].address).toLowerCase()}.png`;
            }else{
                var protocolLogo = data[protocolLength].logo;
            }

            if (data[protocolLength].change_1h > 0 && data[protocolLength].change_1h != null){
                var tvl_change_1h = `<p class="text-sm" style="color: green;">${(data[protocolLength].change_1h).toFixed(2)}%</p>`
                if (data[protocolLength].change_1h == null){
                    var tvl_change_1h = "XXX"
                }
            }else if((data[protocolLength].change_1h < 0 && data[protocolLength].change_1h != null)){
                var tvl_change_1h = `<p class="text-sm" style="color: red;">${(data[protocolLength].change_1h).toFixed(2)}%</p>`
            }else if(tvl_change_1h == undefined){
                var tvl_change_1h = "-"
            }
            
            if (data[protocolLength].change_1d > 0 && data[protocolLength].change_1d != null){
                var tvl_change_1d = `<p class="text-sm" style="color: green;">${(data[protocolLength].change_1d).toFixed(2)}%</p>`
                if (data[protocolLength].change_1d == null){
                    var tvl_change_1d = "XXX"
                }
            }else if((data[protocolLength].change_1d < 0 && data[protocolLength].change_1d != null)){
                var tvl_change_1d = `<p class="text-sm" style="color: red;">${(data[protocolLength].change_1d).toFixed(2)}%</p>`
            }else if(tvl_change_1d == undefined){
                var tvl_change_1d = "-"
            }
            
            if (data[protocolLength].change_7d > 0 && data[protocolLength].change_7d != null){
                var tvl_change_7d = `<p class="text-sm" style="color: green;">${(data[protocolLength].change_7d).toFixed(2)}%</p>`
                if (data[protocolLength].change_7d == null){
                    var tvl_change_7d = "XXX"
                }
            }else if((data[protocolLength].change_7d < 0 && data[protocolLength].change_7d != null)){
                var tvl_change_7d = `<p class="text-sm" style="color: red;">${(data[protocolLength].change_7d).toFixed(2)}%</p>`
            }else if (tvl_change_7d == undefined){
                var tvl_change_7d = "-"
            }

            let content = `
            <tr>
                <td>
                <div class="d-flex px-2 py-1">
                    <div class="me-3">
                    <img src="${protocolLogo}" style="width: 30px;" class="mt-1" alt="">
                    </div>
                    <div class="d-flex alig flex-column justify-content-center">
                    <h6 class="mb-0 text-sm"data-toggle="tooltip" data-placement="top" title="${data[protocolLength].description}\n\nქსელები: ${data[protocolLength].chains}"><a target="_blank" href="${data[protocolLength].url}">${data[protocolLength].name}</a></h6>
                    <p class="text-xs text-secondary mb-0" >${data[protocolLength].category}</p>
                    </div>
                </div>
                </td>
                <td class="align-middle">
                <p class="text-xs font-weight-bold mb-0"><a target="_blank" href="https://www.coingecko.com/en/coins/${data[protocolLength].gecko_id}">${data[protocolLength].symbol}</a></p>
                </td>
                <td class="align-middle text-center">
                <p class="text-xs font-weight-bold mb-0"><a target="_blank" href="${data[protocolLength].url}">${data[protocolLength].url}</a></p>
                </td>
                <td class="align-middle text-center">
                <p class="text-sm font-weight-bold mb-0">${tvl_change_1h}</p>
                </td>
                <td class="align-middle text-center">
                <p class="text-sm font-weight-bold mb-0">${tvl_change_1d}</p>
                </td>
                <td class="align-middle text-center">
                <p class="text-sm font-weight-bold mb-0">${tvl_change_7d}</p>
                </td>
                <td class="align-middle text-center">
                <p class="text-sm font-weight-bold mb-0">${data[protocolLength].audits}</p>
                </td>
                <td class="align-middle text-center">
                <p class="text-xs font-weight-bold mb-0">$${formatCash(data[protocolLength].tvl)}</p>
                </td>
            </tr>
            `
            protocolList.innerHTML += content;
        }
 
    })
}

/* პროტოკოლები მთავრდება აქ  */

const formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(2) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
};

fixURL = (url) => {
    if (url.startsWith("ipfs")){
        return "https://ipfs.moralis.io:2053/ipfs/" + url.split("ipfs://").slice(-1)
    }
    else{
        return url + "?format=json"
    }
}

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
        case 1: return "eth";
        case 56: return "bsc";
        case 137: return "matic";
      }
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logout;