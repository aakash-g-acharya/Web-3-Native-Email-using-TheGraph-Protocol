import { transactionLog as transactionLogEvent } from "../generated/MailHandler/MailHandler"
import { transactionLog } from "../generated/schema"

export function handletransactionLog(event: transactionLogEvent): void {
  let entity = new transactionLog(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.hash = event.params.hash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
