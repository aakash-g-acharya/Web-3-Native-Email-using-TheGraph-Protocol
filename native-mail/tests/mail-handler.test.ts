import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes } from "@graphprotocol/graph-ts"
import { transactionLog } from "../generated/schema"
import { transactionLog as transactionLogEvent } from "../generated/MailHandler/MailHandler"
import { handletransactionLog } from "../src/mail-handler"
import { createtransactionLogEvent } from "./mail-handler-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let to = Address.fromString("0x0000000000000000000000000000000000000001")
    let hash = Bytes.fromI32(1234567890)
    let newtransactionLogEvent = createtransactionLogEvent(to, hash)
    handletransactionLog(newtransactionLogEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("transactionLog created and stored", () => {
    assert.entityCount("transactionLog", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "transactionLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "to",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "transactionLog",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "hash",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
