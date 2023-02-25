import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import { transactionLog } from "../generated/MailHandler/MailHandler"

export function createtransactionLogEvent(
  to: Address,
  hash: Bytes
): transactionLog {
  let transactionLogEvent = changetype<transactionLog>(newMockEvent())

  transactionLogEvent.parameters = new Array()

  transactionLogEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transactionLogEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromFixedBytes(hash))
  )

  return transactionLogEvent
}
