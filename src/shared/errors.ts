import { ErrorDataResponse } from "./error-data-response";

export const NotFoundError = {
  code: 404,
  message: "Não encontrado.",
} as ErrorDataResponse;

export const NotImplemented = {
  code: 500,
  message: "Ainda não implementado.",
} as ErrorDataResponse;

export const UndeterminedError = {
  code: 400,
  message: "Erro indeterminado.",
} as ErrorDataResponse;

export const NotAuthorizedError = {
  code: 401,
  message: "Acesso não autorizado.",
} as ErrorDataResponse;

export const InternalError = {
  code: 500,
  message: "Erro interno.",
} as ErrorDataResponse;
