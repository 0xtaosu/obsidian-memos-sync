// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: api/v1/webhook_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Empty } from "../../google/protobuf/empty";
import { FieldMask } from "../../google/protobuf/field_mask";
import { Timestamp } from "../../google/protobuf/timestamp";
import { RowStatus, rowStatusFromJSON, rowStatusToNumber } from "./common";

export const protobufPackage = "memos.api.v1";

export interface Webhook {
  id: number;
  creatorId: number;
  createdTime?: Date | undefined;
  updatedTime?: Date | undefined;
  rowStatus: RowStatus;
  name: string;
  url: string;
}

export interface CreateWebhookRequest {
  name: string;
  url: string;
}

export interface GetWebhookRequest {
  id: number;
}

export interface ListWebhooksRequest {
  creatorId: number;
}

export interface ListWebhooksResponse {
  webhooks: Webhook[];
}

export interface UpdateWebhookRequest {
  webhook?: Webhook | undefined;
  updateMask?: string[] | undefined;
}

export interface DeleteWebhookRequest {
  id: number;
}

function createBaseWebhook(): Webhook {
  return {
    id: 0,
    creatorId: 0,
    createdTime: undefined,
    updatedTime: undefined,
    rowStatus: RowStatus.ROW_STATUS_UNSPECIFIED,
    name: "",
    url: "",
  };
}

export const Webhook: MessageFns<Webhook> = {
  encode(message: Webhook, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.creatorId !== 0) {
      writer.uint32(16).int32(message.creatorId);
    }
    if (message.createdTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createdTime), writer.uint32(26).fork()).join();
    }
    if (message.updatedTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedTime), writer.uint32(34).fork()).join();
    }
    if (message.rowStatus !== RowStatus.ROW_STATUS_UNSPECIFIED) {
      writer.uint32(40).int32(rowStatusToNumber(message.rowStatus));
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(58).string(message.url);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Webhook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebhook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.creatorId = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.createdTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.updatedTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.rowStatus = rowStatusFromJSON(reader.int32());
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.url = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Webhook>): Webhook {
    return Webhook.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Webhook>): Webhook {
    const message = createBaseWebhook();
    message.id = object.id ?? 0;
    message.creatorId = object.creatorId ?? 0;
    message.createdTime = object.createdTime ?? undefined;
    message.updatedTime = object.updatedTime ?? undefined;
    message.rowStatus = object.rowStatus ?? RowStatus.ROW_STATUS_UNSPECIFIED;
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseCreateWebhookRequest(): CreateWebhookRequest {
  return { name: "", url: "" };
}

export const CreateWebhookRequest: MessageFns<CreateWebhookRequest> = {
  encode(message: CreateWebhookRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateWebhookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateWebhookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateWebhookRequest>): CreateWebhookRequest {
    return CreateWebhookRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateWebhookRequest>): CreateWebhookRequest {
    const message = createBaseCreateWebhookRequest();
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseGetWebhookRequest(): GetWebhookRequest {
  return { id: 0 };
}

export const GetWebhookRequest: MessageFns<GetWebhookRequest> = {
  encode(message: GetWebhookRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetWebhookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetWebhookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetWebhookRequest>): GetWebhookRequest {
    return GetWebhookRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetWebhookRequest>): GetWebhookRequest {
    const message = createBaseGetWebhookRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseListWebhooksRequest(): ListWebhooksRequest {
  return { creatorId: 0 };
}

export const ListWebhooksRequest: MessageFns<ListWebhooksRequest> = {
  encode(message: ListWebhooksRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.creatorId !== 0) {
      writer.uint32(8).int32(message.creatorId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListWebhooksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListWebhooksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.creatorId = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListWebhooksRequest>): ListWebhooksRequest {
    return ListWebhooksRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListWebhooksRequest>): ListWebhooksRequest {
    const message = createBaseListWebhooksRequest();
    message.creatorId = object.creatorId ?? 0;
    return message;
  },
};

function createBaseListWebhooksResponse(): ListWebhooksResponse {
  return { webhooks: [] };
}

export const ListWebhooksResponse: MessageFns<ListWebhooksResponse> = {
  encode(message: ListWebhooksResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.webhooks) {
      Webhook.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListWebhooksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListWebhooksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.webhooks.push(Webhook.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListWebhooksResponse>): ListWebhooksResponse {
    return ListWebhooksResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListWebhooksResponse>): ListWebhooksResponse {
    const message = createBaseListWebhooksResponse();
    message.webhooks = object.webhooks?.map((e) => Webhook.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateWebhookRequest(): UpdateWebhookRequest {
  return { webhook: undefined, updateMask: undefined };
}

export const UpdateWebhookRequest: MessageFns<UpdateWebhookRequest> = {
  encode(message: UpdateWebhookRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.webhook !== undefined) {
      Webhook.encode(message.webhook, writer.uint32(10).fork()).join();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateWebhookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateWebhookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.webhook = Webhook.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UpdateWebhookRequest>): UpdateWebhookRequest {
    return UpdateWebhookRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateWebhookRequest>): UpdateWebhookRequest {
    const message = createBaseUpdateWebhookRequest();
    message.webhook = (object.webhook !== undefined && object.webhook !== null)
      ? Webhook.fromPartial(object.webhook)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseDeleteWebhookRequest(): DeleteWebhookRequest {
  return { id: 0 };
}

export const DeleteWebhookRequest: MessageFns<DeleteWebhookRequest> = {
  encode(message: DeleteWebhookRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteWebhookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteWebhookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<DeleteWebhookRequest>): DeleteWebhookRequest {
    return DeleteWebhookRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteWebhookRequest>): DeleteWebhookRequest {
    const message = createBaseDeleteWebhookRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

export type WebhookServiceDefinition = typeof WebhookServiceDefinition;
export const WebhookServiceDefinition = {
  name: "WebhookService",
  fullName: "memos.api.v1.WebhookService",
  methods: {
    /** CreateWebhook creates a new webhook. */
    createWebhook: {
      name: "CreateWebhook",
      requestType: CreateWebhookRequest,
      requestStream: false,
      responseType: Webhook,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              21,
              58,
              1,
              42,
              34,
              16,
              47,
              97,
              112,
              105,
              47,
              118,
              49,
              47,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
              115,
            ]),
          ],
        },
      },
    },
    /** GetWebhook returns a webhook by id. */
    getWebhook: {
      name: "GetWebhook",
      requestType: GetWebhookRequest,
      requestStream: false,
      responseType: Webhook,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([2, 105, 100])],
          578365826: [
            new Uint8Array([
              23,
              18,
              21,
              47,
              97,
              112,
              105,
              47,
              118,
              49,
              47,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
              115,
              47,
              123,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    /** ListWebhooks returns a list of webhooks. */
    listWebhooks: {
      name: "ListWebhooks",
      requestType: ListWebhooksRequest,
      requestStream: false,
      responseType: ListWebhooksResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([18, 18, 16, 47, 97, 112, 105, 47, 118, 49, 47, 119, 101, 98, 104, 111, 111, 107, 115]),
          ],
        },
      },
    },
    /** UpdateWebhook updates a webhook. */
    updateWebhook: {
      name: "UpdateWebhook",
      requestType: UpdateWebhookRequest,
      requestStream: false,
      responseType: Webhook,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            new Uint8Array([
              19,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
              44,
              117,
              112,
              100,
              97,
              116,
              101,
              95,
              109,
              97,
              115,
              107,
            ]),
          ],
          578365826: [
            new Uint8Array([
              40,
              58,
              7,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
              50,
              29,
              47,
              97,
              112,
              105,
              47,
              118,
              49,
              47,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
              115,
              47,
              123,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
              46,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    /** DeleteWebhook deletes a webhook by id. */
    deleteWebhook: {
      name: "DeleteWebhook",
      requestType: DeleteWebhookRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([2, 105, 100])],
          578365826: [
            new Uint8Array([
              23,
              42,
              21,
              47,
              97,
              112,
              105,
              47,
              118,
              49,
              47,
              119,
              101,
              98,
              104,
              111,
              111,
              107,
              115,
              47,
              123,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
  },
} as const;

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
