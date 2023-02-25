// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class transactionLog extends ethereum.Event {
  get params(): transactionLog__Params {
    return new transactionLog__Params(this);
  }
}

export class transactionLog__Params {
  _event: transactionLog;

  constructor(event: transactionLog) {
    this._event = event;
  }

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get hash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class MailHandler extends ethereum.SmartContract {
  static bind(address: Address): MailHandler {
    return new MailHandler("MailHandler", address);
  }

  checkRegisteredKey(_address: Address): boolean {
    let result = super.call(
      "checkRegisteredKey",
      "checkRegisteredKey(address):(bool)",
      [ethereum.Value.fromAddress(_address)]
    );

    return result[0].toBoolean();
  }

  try_checkRegisteredKey(_address: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkRegisteredKey",
      "checkRegisteredKey(address):(bool)",
      [ethereum.Value.fromAddress(_address)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getPublicKey(_address: Address): Bytes {
    let result = super.call("getPublicKey", "getPublicKey(address):(bytes32)", [
      ethereum.Value.fromAddress(_address)
    ]);

    return result[0].toBytes();
  }

  try_getPublicKey(_address: Address): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getPublicKey",
      "getPublicKey(address):(bytes32)",
      [ethereum.Value.fromAddress(_address)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class MakeTransferCall extends ethereum.Call {
  get inputs(): MakeTransferCall__Inputs {
    return new MakeTransferCall__Inputs(this);
  }

  get outputs(): MakeTransferCall__Outputs {
    return new MakeTransferCall__Outputs(this);
  }
}

export class MakeTransferCall__Inputs {
  _call: MakeTransferCall;

  constructor(call: MakeTransferCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get hash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class MakeTransferCall__Outputs {
  _call: MakeTransferCall;

  constructor(call: MakeTransferCall) {
    this._call = call;
  }
}

export class RegisterPublicKeyCall extends ethereum.Call {
  get inputs(): RegisterPublicKeyCall__Inputs {
    return new RegisterPublicKeyCall__Inputs(this);
  }

  get outputs(): RegisterPublicKeyCall__Outputs {
    return new RegisterPublicKeyCall__Outputs(this);
  }
}

export class RegisterPublicKeyCall__Inputs {
  _call: RegisterPublicKeyCall;

  constructor(call: RegisterPublicKeyCall) {
    this._call = call;
  }
}

export class RegisterPublicKeyCall__Outputs {
  _call: RegisterPublicKeyCall;

  constructor(call: RegisterPublicKeyCall) {
    this._call = call;
  }
}
