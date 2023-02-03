//imports
const { ethers, run, network } = require("hardhat")

//async function main
async function main() {
    const FundersFactory = await ethers.getContractFactory("Funders")
    console.log("Deploying Contract")
    const Funders = await FundersFactory.deploy()
    await Funders.deployed()
    console.log(`Deployed in address ${Funders.address}`)

    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await Funders.deployTransaction.wait(6)
        verifyGoerli(Funders.address, [])
    }
}

async function verifyGoerli(contractAddress, args) {
    console.log("Verifying Contract")

    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("Already Verified")) {
            console.log("Already Verified")
        } else {
            console.log(e)
        }
    }
}

//main
main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err)
    })
