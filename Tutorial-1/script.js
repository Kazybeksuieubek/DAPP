const contractAddress = "0x41Fb404d5aACf5634470CCa8F2D806361D9c6AA8";
const contractABI = [{"inputs":[{"internalType":"string","name":"_note","type":"string"}],"name":"writeNote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getNote","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];
let signer
let contract

const provider = new ethers.providers.Web3Provider(window.ethereum, 5) //Goerli chain id
provider.send("eth_requestAccounts", []).then(
    () => {
        provider.listAccounts().then( (accounts) => {
             
            signer = provider.getSigner(accounts[0]);
            console.log(signer);   
                contract = new ethers.Contract(
                    contractAddress,
                    contractABI,
                    
                    signer
                    
                )
            }
        )
    }
)

async function getNote(){
    console.log(await contract.getNote());
}

async function writeNote(){
    const note = document.getElementById("inputNote").value;
    console.log(note);
    await contract.writeNote(note);
    
}