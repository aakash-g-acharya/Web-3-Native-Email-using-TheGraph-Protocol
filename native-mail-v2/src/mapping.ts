import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import { mailHandler as mailHandlerContract } from "../generated/mailHandler/mailHandler";
import { User, TransactionLog } from "../generated/schema";

export function handleRegisterPublicKey(event: mailHandlerContract.RegisterPublicKey): void {
  let user = User.load(event.params._address.toHexString());
  if (user == null) {
    user = new User(event.params._address.toHexString());
  }
  user.publicKey = event.params.publicKey;
  user.save();
}

export function handleTransactionLog(event: mailHandlerContract.TransactionLog): void {
  let transaction = new TransactionLog(event.transaction.hash.toHexString());
  transaction.to = event.params.to;
  transaction.hash = event.params.hash;
  transaction.save();
}
