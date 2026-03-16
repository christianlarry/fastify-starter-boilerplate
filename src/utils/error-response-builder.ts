import { HttpStatus } from "@/core/http/http-status.enum";
import { FastifyReply } from "fastify";

interface BuilderParams {
  status: number;
  message: string;
  code?: string;
  path: string;
}

interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
  code?: string;
  timestamp: string;
  path: string;
}

const errorCodeMap: Record<number, HttpStatus> = {
  400: HttpStatus.BAD_REQUEST,
  401: HttpStatus.UNAUTHORIZED,
  402: HttpStatus.PAYMENT_REQUIRED,
  403: HttpStatus.FORBIDDEN,
  404: HttpStatus.NOT_FOUND,
  405: HttpStatus.METHOD_NOT_ALLOWED,
  406: HttpStatus.NOT_ACCEPTABLE,
  407: HttpStatus.PROXY_AUTHENTICATION_REQUIRED,
  408: HttpStatus.REQUEST_TIMEOUT,
  409: HttpStatus.CONFLICT,
  410: HttpStatus.GONE,
  411: HttpStatus.LENGTH_REQUIRED,
  412: HttpStatus.PRECONDITION_FAILED,
  413: HttpStatus.PAYLOAD_TOO_LARGE,
  414: HttpStatus.URI_TOO_LONG,
  415: HttpStatus.UNSUPPORTED_MEDIA_TYPE,
  416: HttpStatus.RANGE_NOT_SATISFIABLE,
  417: HttpStatus.EXPECTATION_FAILED,
  418: HttpStatus.IM_A_TEAPOT,
  421: HttpStatus.MISDIRECTED_REQUEST,
  422: HttpStatus.UNPROCESSABLE_ENTITY,
  423: HttpStatus.LOCKED,
  424: HttpStatus.FAILED_DEPENDENCY,
  425: HttpStatus.TOO_EARLY,
  426: HttpStatus.UPGRADE_REQUIRED,
  428: HttpStatus.PRECONDITION_REQUIRED,
  429: HttpStatus.TOO_MANY_REQUESTS,
  431: HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE,
  451: HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS,
  500: HttpStatus.INTERNAL_SERVER_ERROR,
  501: HttpStatus.NOT_IMPLEMENTED,
  502: HttpStatus.BAD_GATEWAY,
  503: HttpStatus.SERVICE_UNAVAILABLE,
  504: HttpStatus.GATEWAY_TIMEOUT,
  505: HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
  506: HttpStatus.VARIANT_ALSO_NEGOTIATES,
  507: HttpStatus.INSUFFICIENT_STORAGE,
  508: HttpStatus.LOOP_DETECTED,
  510: HttpStatus.NOT_EXTENDED,
  511: HttpStatus.NETWORK_AUTHENTICATION_REQUIRED
};

const buildErrorResponse = (params: BuilderParams): ErrorResponse => {
  const response: ErrorResponse = {
    statusCode: params.status,
    message: params.message,
    error: errorCodeMap[params.status]?.toString() ?? 'INTERNAL_SERVER_ERROR',
    timestamp: new Date().toISOString(),
    path: params.path // You would need to pass the request path as well
  };

  if (params.code) {
    response.code = params.code;
  }

  return response;
}

export const sendErrorReply = (reply: FastifyReply, params: BuilderParams) => {
  const errorResponse = buildErrorResponse(params);
  return reply.status(params.status).send(errorResponse);
}