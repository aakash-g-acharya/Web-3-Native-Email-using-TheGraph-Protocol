import { Web3Storage, getFilesFromPath } from "web3.storage"
import dotenv from "dotenv"
dotenv.config()

export async function getCID() {
    const token = process.env.IPFS_API_KEY
    const storage = new Web3Storage({ token })
    const files = []

    const pathFiles = await getFilesFromPath("../emails/")

    files.push(...pathFiles)

    const cid = storage.put(files)

    return cid
}
