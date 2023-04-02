import { getCID , getMails } from "./uploadMail.js"
import promptSync from 'prompt-sync'
import readline from 'readline';
import fs from 'fs/promises';

const prompt = promptSync();
let choice = prompt("Send/Check Inbox[S/C] : ")

if(choice == "S"){
    let userId = prompt("Enter your account address : ")
    let accId = prompt("Enter the recipient account address : ")
    let userInput = prompt("Enter mail content : ")
    try{
        fs.writeFile("../emails/emails.txt" , userInput)
    }catch(err){
        console.log(err)
    }
    let cId = await getCID()
    console.log(`Sent mail to ${accId} on blob ${cId}`)
}

else if(choice == "C"){
    let userId = prompt("Enter your account address : ")
    console.log("INBOX : ")
    await getMails(await getCID())
}
