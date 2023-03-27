import { Web3Storage, getFilesFromPath } from "web3.storage"
import dotenv from "dotenv"
import { fstat } from "fs"
import { writeFile } from "fs/promises"
import fetch from 'node-fetch'
dotenv.config()

export async function getCID() {
    const token = process.env.IPFS_API_KEY
    const storage = new Web3Storage({ token })
    const files = []

    const pathFiles = await getFilesFromPath("../emails/")

    files.push(...pathFiles)

    const cid = storage.put(files)

    console.log(typeof cid)

    return cid
}


export async function getMails(cid) {
    const token = process.env.IPFS_API_KEY
    const client = new Web3Storage({ token })
    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
        throw new Error(
            `failed to get ${cid} - [${res.status}] ${res.statusText}`
        )
    }

    // unpack File objects from the response
    const files = await res.files()
    for (const file of files) {
        console.log(`${file.cid} -- ${file.content} -- ${file.size}`)
        const fileUrl = 'https://' + file.cid + '.ipfs.dweb.link'
        console.log(fileUrl)
        const data = await (await fetch(fileUrl)).text()
        console.log(data)
    }
}
