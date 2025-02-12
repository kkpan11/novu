/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SubscribersV1ControllerMarkAllUnreadAsReadRequest = {
  subscriberId: string;
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
  markAllMessageAsRequestDto: components.MarkAllMessageAsRequestDto;
};

export type SubscribersV1ControllerMarkAllUnreadAsReadResponse = {
  headers: { [k: string]: Array<string> };
  result: number;
};

/** @internal */
export const SubscribersV1ControllerMarkAllUnreadAsReadRequest$inboundSchema:
  z.ZodType<
    SubscribersV1ControllerMarkAllUnreadAsReadRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    subscriberId: z.string(),
    "idempotency-key": z.string().optional(),
    MarkAllMessageAsRequestDto:
      components.MarkAllMessageAsRequestDto$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "idempotency-key": "idempotencyKey",
      "MarkAllMessageAsRequestDto": "markAllMessageAsRequestDto",
    });
  });

/** @internal */
export type SubscribersV1ControllerMarkAllUnreadAsReadRequest$Outbound = {
  subscriberId: string;
  "idempotency-key"?: string | undefined;
  MarkAllMessageAsRequestDto: components.MarkAllMessageAsRequestDto$Outbound;
};

/** @internal */
export const SubscribersV1ControllerMarkAllUnreadAsReadRequest$outboundSchema:
  z.ZodType<
    SubscribersV1ControllerMarkAllUnreadAsReadRequest$Outbound,
    z.ZodTypeDef,
    SubscribersV1ControllerMarkAllUnreadAsReadRequest
  > = z.object({
    subscriberId: z.string(),
    idempotencyKey: z.string().optional(),
    markAllMessageAsRequestDto:
      components.MarkAllMessageAsRequestDto$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      idempotencyKey: "idempotency-key",
      markAllMessageAsRequestDto: "MarkAllMessageAsRequestDto",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersV1ControllerMarkAllUnreadAsReadRequest$ {
  /** @deprecated use `SubscribersV1ControllerMarkAllUnreadAsReadRequest$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersV1ControllerMarkAllUnreadAsReadRequest$inboundSchema;
  /** @deprecated use `SubscribersV1ControllerMarkAllUnreadAsReadRequest$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersV1ControllerMarkAllUnreadAsReadRequest$outboundSchema;
  /** @deprecated use `SubscribersV1ControllerMarkAllUnreadAsReadRequest$Outbound` instead. */
  export type Outbound =
    SubscribersV1ControllerMarkAllUnreadAsReadRequest$Outbound;
}

export function subscribersV1ControllerMarkAllUnreadAsReadRequestToJSON(
  subscribersV1ControllerMarkAllUnreadAsReadRequest:
    SubscribersV1ControllerMarkAllUnreadAsReadRequest,
): string {
  return JSON.stringify(
    SubscribersV1ControllerMarkAllUnreadAsReadRequest$outboundSchema.parse(
      subscribersV1ControllerMarkAllUnreadAsReadRequest,
    ),
  );
}

export function subscribersV1ControllerMarkAllUnreadAsReadRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersV1ControllerMarkAllUnreadAsReadRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersV1ControllerMarkAllUnreadAsReadRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersV1ControllerMarkAllUnreadAsReadRequest' from JSON`,
  );
}

/** @internal */
export const SubscribersV1ControllerMarkAllUnreadAsReadResponse$inboundSchema:
  z.ZodType<
    SubscribersV1ControllerMarkAllUnreadAsReadResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: z.number(),
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type SubscribersV1ControllerMarkAllUnreadAsReadResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: number;
};

/** @internal */
export const SubscribersV1ControllerMarkAllUnreadAsReadResponse$outboundSchema:
  z.ZodType<
    SubscribersV1ControllerMarkAllUnreadAsReadResponse$Outbound,
    z.ZodTypeDef,
    SubscribersV1ControllerMarkAllUnreadAsReadResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: z.number(),
  }).transform((v) => {
    return remap$(v, {
      headers: "Headers",
      result: "Result",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersV1ControllerMarkAllUnreadAsReadResponse$ {
  /** @deprecated use `SubscribersV1ControllerMarkAllUnreadAsReadResponse$inboundSchema` instead. */
  export const inboundSchema =
    SubscribersV1ControllerMarkAllUnreadAsReadResponse$inboundSchema;
  /** @deprecated use `SubscribersV1ControllerMarkAllUnreadAsReadResponse$outboundSchema` instead. */
  export const outboundSchema =
    SubscribersV1ControllerMarkAllUnreadAsReadResponse$outboundSchema;
  /** @deprecated use `SubscribersV1ControllerMarkAllUnreadAsReadResponse$Outbound` instead. */
  export type Outbound =
    SubscribersV1ControllerMarkAllUnreadAsReadResponse$Outbound;
}

export function subscribersV1ControllerMarkAllUnreadAsReadResponseToJSON(
  subscribersV1ControllerMarkAllUnreadAsReadResponse:
    SubscribersV1ControllerMarkAllUnreadAsReadResponse,
): string {
  return JSON.stringify(
    SubscribersV1ControllerMarkAllUnreadAsReadResponse$outboundSchema.parse(
      subscribersV1ControllerMarkAllUnreadAsReadResponse,
    ),
  );
}

export function subscribersV1ControllerMarkAllUnreadAsReadResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  SubscribersV1ControllerMarkAllUnreadAsReadResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      SubscribersV1ControllerMarkAllUnreadAsReadResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'SubscribersV1ControllerMarkAllUnreadAsReadResponse' from JSON`,
  );
}
