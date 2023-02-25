//imports
const { ethers, run, network } = require("hardhat")

//async function main
async function main() {
    const mailHandlerFactory = await ethers.getContractFactory("mailHandler")
    console.log("Deploying Contract")
    const mailHandler = await mailHandlerFactory.deploy()
    await mailHandler.deployed()
    console.log(`Deployed in address ${mailHandler.address}`)

    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await mailHandler.deployTransaction.wait(6)
        verifyGoerli(mailHandler.address, [])
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
