console.log("hello dapp developers")
const ssAddress = '0x52d41CAEB74aDC12068D95FA00141fe7de4bB83B';

const ssABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined') {
        console.log("MetaMask Detected!")
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML = "MetaMask has been detected"
    }
    else {
        console.log('Theres no wallet! Not available!')
        alert("You need to install MetaMask")
    }
    
})


const mmEnable = document.getElementById('mm-connect')

mmEnable.onclick = async () => {
    await ethereum.request({method: 'eth_requestAccounts'})

    const mmCurrentAccount = document.getElementById('mm-current-account')
    mmCurrentAccount.innerHTML = "Here is your Current Account: " + ethereum.selectedAddress
}




const ssSubmit = document.getElementById('ss-input-button');

ssSubmit.onclick = async () => {
    const ssValue = document.getElementById('ss-input-box').value;
    console.log(ssValue);

    //instantiate web3
    var web3 = new Web3(window.ethereum); 

    const simpleStorage = new web3.eth.Contract(
        ssABI, ssAddress)
    

    simpleStorage.setProvider(window.ethereum)

    //next we interact with the ABI contract which has two functions
    // It has store and retrieve. This is where web2 and web3 interact

    await simpleStorage.methods.store(ssValue).send({from:ethereum.selectedAddress})


}








