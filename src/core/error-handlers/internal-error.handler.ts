import { sendErrorReply } from "@/utils/error-response-builder";
import { FastifyReply, FastifyRequest } from "fastify";

export const internalErrorHandler = (error: Error, request: FastifyRequest, reply: FastifyReply) => {
  request.log.error(error);

  if (error instanceof Error) {
    return sendErrorReply(reply, {
      status: 500,
      message: 'Something went wrong on the server.',
      code: 'INTERNAL_SERVER_ERROR',
      path: request.url
    });
  }

  sendErrorReply(reply, {
    status: 500,
    message: 'Something went wrong on the server.',
    code: 'INTERNAL_SERVER_ERROR',
    path: request.url
  });
};