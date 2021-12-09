appId = "EJALHA5FruaAIsbdRhW8wYPLMZ2NkX45hGIPT6gc";
serverUrl = "https://1zozt2vkykrm.usemoralis.com:2053/server";
Moralis.start({ serverUrl, appId });

document.getElementById("attentionAlert").style.display = "none";

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
`;

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
`;
let copyButtonLogo = `
<svg xmlns="http://www.w3.org/2000/svg" onclick="copyWalletAddress()" style="cursor: pointer;" width="16" height="16" fill="currentColor" class="bi bi-clipboard mb-1" viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>
`;

/* აუთენთიფიკაციის ფუნქციები */
if (Moralis.User.current()) {
  console.log("შესულია");
  console.log(Moralis.User.current().get("ethAddress"));
  document.getElementById("btn-login").style.display = "none";
  document.getElementById("connectedAddress").style.display = "block";
  document.getElementById("switchNetworkBtn").style.display = "block";
  document.getElementById("walletAddress").innerHTML =
    Moralis.User.current().get("ethAddress") + copyButtonLogo;
  getNetwork();
  checkWeb3();
} else {
  console.log("არ არის შესული");
  document.getElementById("btn-login").style.display = "block";
  document.getElementById("connectedAddress").style.display = "none";
  document.getElementById("switchNetworkBtn").style.display = "none";
}

login = async () => {
  const ethereum = window.ethereum;
  if (!ethereum || !ethereum.on) {
    attention("noWeb3");
  } else {
    try {
      currentUser = Moralis.User.current();
      if (!currentUser) {
        currentUser = await Moralis.Web3.authenticate({
          signingMessage:
            "დარწმუნდით რომ უკავშირდებით https://cryptolux.netlify.app/ ვებ-გვერდს",
        });
        console.log("logged in");
        document.getElementById("btn-login").style.display = "block";
        document.getElementById("connectedAddress").style.display = "none";
        document.getElementById("connectedChainPrice").style.display = "none";
        document.getElementById("switchNetworkBtn").style.display = "block";
        getNetwork();
        checkWeb3();
      }
      document.getElementById("btn-login").style.display = "none";
      document.getElementById("connectedAddress").style.display = "block";
      document.getElementById("switchNetworkBtn").style.display = "block";
      document.getElementById("connectedChainPrice").style.display = "block";
    } catch (error) {
      console.log(error);
    }
  }
};

logout = async () => {
  try {
    await Moralis.User.logOut();
    document.getElementById("btn-login").style.display = "block";
    document.getElementById("connectedAddress").style.display = "none";
    document.getElementById("switchNetworkBtn").style.display = "none";
    console.log("გამოვიდა");
  } catch (error) {
    console.log(error);
  }
  location.reload();
};

async function checkWeb3() {
  const ethereum = window.ethereum;
  if (!ethereum || !ethereum.on) {
    document.getElementById("connectedChain").innerHTML =
      "ეს აპლიკაცია მოითხოვს Metamask-ის საფულეს, გთხოვთ დააყენოთ Metamask-ის საფელე!";
  } else {
    //displayMessage("00", "Metamask-ი დაყენებულია!")
    setWeb3Environment();
  }
}

function setWeb3Environment() {
  var web3 = new Web3(window.ethereum);
  getNetwork();
  monitorNetwork();
}

async function getNetwork() {
  let userAddress = Moralis.User.current().get("ethAddress");
  var web3 = new Web3(window.ethereum);
  chainID = window.ethereum.chainId;
  document.getElementById("connectedAddress").innerHTML =
    shortAddress(userAddress);
  if (getNetworkName(chainID) == "BSC") {
    document.getElementById("navbarDropdownMenuLink2").innerHTML =
      bscLogo + " Smart Chain";
    var chainCoin = "BNB";
    var ExplorerName = "ნახე BSCScan-ზე";
    var explorerUrl = "https://bscscan.com/address/";
  } else if (getNetworkName(chainID) == "ETH") {
    document.getElementById("navbarDropdownMenuLink2").innerHTML =
      ethLogo + " Ethereum";
    var chainCoin = "ETH";
    var ExplorerName = "ნახე Etherscan-ზე";
    var explorerUrl = "https://etherscan.io/address/";
  } else if (getNetworkName(chainID) == "MATIC") {
    document.getElementById("navbarDropdownMenuLink2").innerHTML =
      maticLogo + " Polygon";
    var chainCoin = "MATIC";
    var ExplorerName = "ნახე Polygon-ზე";
    var explorerUrl = "https://polygonscan.com/address/";
  } else if (getNetworkName(chainID) == "AVAX") {
    document.getElementById("navbarDropdownMenuLink2").innerHTML =
      avaxLogo + " Avalanche";
    var chainCoin = "AVAX";
    var ExplorerName = "ნახე C Chain-ზე";
    var explorerUrl = "https://cchain.explorer.avax.network/address/";
  }

  if (getNetworkName(chainID) == "BSC") {
    fetch("https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("connectedChainPrice").innerHTML =
          bscLogo + "BNB: $" + data.USD.toLocaleString("en-US");
      });
  } else if (getNetworkName(chainID) == "ETH") {
    fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("connectedChainPrice").innerHTML =
          ethLogo + "ETH: $" + data.USD.toLocaleString("en-US");
      });
  } else if (getNetworkName(chainID) == "MATIC") {
    fetch("https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("connectedChainPrice").innerHTML =
          maticLogo + "MATIC: $" + data.USD.toLocaleString("en-US");
      });
  } else if (getNetworkName(chainID) == "AVAX") {
    fetch("https://min-api.cryptocompare.com/data/price?fsym=AVAX&tsyms=USD")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("connectedChainPrice").innerHTML =
          avaxLogo + "AVAX: $" + data.USD.toLocaleString("en-US");
      });
  }

  const nativeBalance = await Moralis.Web3API.account.getNativeBalance({
    chain: getNetworkName(chainID).toLowerCase(),
    address: Moralis.User.current().get("ethAddress"),
  });
  document.getElementById("walletNativeCoinBalance").innerHTML =
    `${chainCoin} ბალანსი: ` + (nativeBalance.balance / 1e18).toFixed(5);
  document.getElementById(
    "viewOnExplorer"
  ).innerHTML = `<a target="_blank" href="${explorerUrl}${Moralis.User.current().get(
    "ethAddress"
  )}">${ExplorerName}</a>
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-box-arrow-up-right mb-2" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
      <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
  </svg>`;
}

function getNetworkName(chainID) {
  networks = {
    "0x1": "ETH",
    "0x38": "BSC",
    "0x89": "MATIC",
    "0xa86a": "AVAX",
    1: "ETH",
    56: "BSC",
    137: "MATIC",
    43114: "AVAX",
  };
  return networks[chainID];
}

function monitorNetwork() {
  Moralis.onChainChanged(function () {
    window.location.reload();
  });
}

/* აუთენთიფიკაციის ფუნქციები */
/* =================== */

let jsondata = "";
let apiUrl = "https://pool.pm/pools.json";

async function getJson(url) {
  let response = await fetch(url);
  let poolData = await response.json();
  return poolData;
}

document.getElementById('noTokensAndNFTS').style.display = 'none';
document.getElementById('rarityTable').style.display = 'none';

function getHoskyRarity() {
	var hoskyID = document.getElementById('hoskyID').value;
  fetch("https://cnft.tools/project/hosky/" + hoskyID, {
        mode: 'no-cors'
    })
    .then(function (response) {
      if (!response.ok) {
        resetRarity();
        document.getElementById('alerText').innerHTML = 'ამ ID-ით NFT ვერ მოიძებნა!';
        document.getElementById('noTokensAndNFTS').style.display = 'block';
      }
      return response.json();
    })
    .then((data) => {
      resetRarity();
      console.log(data);

      if (data.error){
        resetRarity();
        document.getElementById('alerText').innerHTML = 'ამ ID-ით NFT ვერ მოიძებნა!';
        document.getElementById('noTokensAndNFTS').style.display = 'block';
      }else{
        document.getElementById('rarityTable').style.display = 'block';

        document.getElementById("hoskyNFT").src = `https://ipfs.io/ipfs/${data.iconurl}`;
        document.getElementById('hoskyNFTname').innerHTML = `${data.name}`;
        document.getElementById('hoskyRank').innerHTML = `რანკი: ${data.rarityRank} `;
        document.getElementById('hoskyScore').innerHTML = `ქულა: ${data.rarityScore} `;
        document.getElementById('background').innerHTML = `ფონი: ${data.background}`;
        document.getElementById('fur').innerHTML = `ბეწვი: ${data.fur}`;
        document.getElementById('eyes').innerHTML = `თვალები: ${data.eyes}`;
        document.getElementById('ear').innerHTML = `ყურები: ${data.earDecoration}`;
        document.getElementById('hat').innerHTML = `ქუდი: ${data.hat}`;
        document.getElementById('neck').innerHTML = `კისერი: ${data.neck}`;
        document.getElementById('mouth').innerHTML = `პირი: ${data.mouth}`;
        document.getElementById('mouthDecoration').innerHTML = `პირის დეკორაცია: ${data.mouthDecoration}`;
        document.getElementById('glasses').innerHTML = `სათვალე: ${data.glasses}`;
        document.getElementById('frame').innerHTML = `ჩარჩო: ${data.frame}`;
      }

      

    });
}

/* =================== */

function resetRarity(){
  document.getElementById('noTokensAndNFTS').style.display = 'none';
  document.getElementById('rarityTable').style.display = 'none';
  document.getElementById('alerText').innerHTML = 'ამ ID-ით NFT ვერ მოიძებნა!';
	document.getElementById("hoskyNFT").src = "";
	document.getElementById('hoskyNFTname').innerHTML = "";
	document.getElementById('hoskyRank').innerHTML = "";
	document.getElementById('hoskyScore').innerHTML = "";
	document.getElementById('background').innerHTML = "";
	document.getElementById('fur').innerHTML = "";
	document.getElementById('eyes').innerHTML = "";
	document.getElementById('ear').innerHTML = "";
	document.getElementById('hat').innerHTML = "";
	document.getElementById('neck').innerHTML = "";
	document.getElementById('mouth').innerHTML = "";
	document.getElementById('mouthDecoration').innerHTML = "";
	document.getElementById('glasses').innerHTML = "";
	document.getElementById('frame').innerHTML = "";
}

function shortAddress(address) {
  let firstFive = address.substring(0, 4);
  let lastFive = address.slice(address.length - 4);
  let newAddress = `${firstFive}...${lastFive}`;
  return newAddress;
}

function shortAdaAddress(address) {
  let firstFive = address.substring(0, 6);
  let lastFive = address.slice(address.length - 6);
  let newAddress = `${firstFive}...${lastFive}`;
  return newAddress;
}

copyWalletAddress = async () => {
  navigator.clipboard.writeText(Moralis.User.current().get("ethAddress"));
  alert("დაკოპირდა თქვენი მისამართი");
};

async function attention(x) {
  if (x == "unsupportedChain") {
    document.getElementById("AttentionMessage").innerHTML =
      "გთხოვთ აირჩიოთ BSC, ETH, Polygon ან AVAX ქსელი.";
    document.getElementById("attentionAlert").style.display = "block";
  } else if (x == "noWeb3") {
    document.getElementById("AttentionMessage").innerHTML =
      "ეს აპლიკაცია მოითხოვს Metamask ან Trust Wallet-ის საფულეს.";
    document.getElementById("attentionAlert").style.display = "block";
  }
}

async function switchToBscChain() {
  await Moralis.enableWeb3();
  await Moralis.switchNetwork("0x38");
}

async function switchToEthChain() {
  await Moralis.enableWeb3();
  await Moralis.switchNetwork("0x1");
}

async function switchToMaticChain() {
  await Moralis.enableWeb3();
  await Moralis.switchNetwork("0x89");
}

async function switchToAvaxChain() {
  await Moralis.enableWeb3();
  await Moralis.switchNetwork("0xa86a");
}

document.getElementById("switchToBSC").onclick = switchToBscChain;
document.getElementById("switchToETH").onclick = switchToEthChain;
document.getElementById("switchToMATIC").onclick = switchToMaticChain;
document.getElementById("switchToAVAX").onclick = switchToAvaxChain;

document.getElementById("btn-login-metamask").onclick = login;
document.getElementById("btn-login-trustwallet").onclick = login;
document.getElementById("btn-logout").onclick = logout;
