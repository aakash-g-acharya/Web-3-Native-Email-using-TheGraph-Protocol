import { getCID , getMails } from "./uploadMail.js"

await getMails(await getCID())
