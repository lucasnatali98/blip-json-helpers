import { HttpDataResponse } from "./http-data-response";
import {
  InternalError,
  NotAuthorizedError,
  NotFoundError,
  UndeterminedError,
} from "./errors";
import { DataResponse } from "./data-response";
import { Parameterizable } from "./parameterized";
import { ErrorDataResponse } from "./error-data-response";

export class HttpDataResponseBuilder<T> {
  private _instance: HttpDataResponse<T> | null;

  constructor() {
    this._instance = null;
  }

  private _withData<T>(data: T) {
    if (
      data &&
      Array.isArray(data) &&
      data.length > 0 &&
      typeof data[0] == "object" &&
      "parameterize" in data[0]
    ) {
      return data.map((datum) =>
        (datum as Parameterizable<T & object>).parameterize()
      ) as unknown as T;
    }

    return data;
  }

  create(): HttpDataResponseBuilder<T> {
    this._instance = {
      statusCode: 0,
      body: {
        success: false,
        errors: [],
        meta: null,
      } as DataResponse<T>,
    } as HttpDataResponse<T>;

    return this;
  }

  withOkMessage(data: T): HttpDataResponseBuilder<T> {
    this._instance = {
      statusCode: 200,
      body: {
        success: true,
        data: this._withData(data),
        errors: [],
        meta: null,
      } as DataResponse<T>,
    } as HttpDataResponse<T>;
    return this;
  }

  withOkMessageAndMetaDatas(data: T, meta: any): HttpDataResponseBuilder<T> {
    this._instance = {
      statusCode: 200,
      body: {
        success: true,
        data: this._withData(data),
        errors: [],
        meta: meta,
      } as DataResponse<T>,
    } as HttpDataResponse<T>;
    return this;
  }

  withCreatedMessage(data: T): HttpDataResponseBuilder<T> {
    this._instance = {
      statusCode: 201,
      body: {
        success: true,
        data: this._withData(data),
        errors: [],
        meta: null,
      } as DataResponse<T>,
    } as HttpDataResponse<T>;
    return this;
  }

  withForbiddenErrorMessage(
    errors?: ErrorDataResponse[] | null
  ): HttpDataResponseBuilder<T> {
    this._instance = {
      statusCode: 403,
      body: {
        success: false,
        data: null,
        errors:
          errors ||
          ([
            {
              message: "Acesso não permitido.",
            } as ErrorDataResponse,
          ] as ErrorDataResponse[]),
        meta: null,
      } as DataResponse<T>,
    } as HttpDataResponse<T>;
    return this;
  }

  withInternalErrorMessage(
    errors = [InternalError] as ErrorDataResponse[]
  ): HttpDataResponseBuilder<T> {
    this._instance = {
      statusCode: 500,
      body: {
        success: false,
        data: null,
        errors,
      } as DataResponse<T>,
      meta: null,
    } as HttpDataResponse<T>;
    return this;
  }

  withClientErrorMessage(
    errors = [UndeterminedError] as ErrorDataResponse[]
  ): HttpDataResponseBuilder<T> {
    this._instance = {
      statusCode: 400,
      body: {
        success: false,
        data: null,
        errors,
      } as DataResponse<T>,
      meta: null,
    } as HttpDataResponse<T>;
    return this;
  }

  withNotFoundMessage(
    errors = [NotFoundError] as ErrorDataResponse[]
  ): HttpDataResponseBuilder<T> {
    this._instance = {
      statusCode: 404,
      body: {
        success: false,
        data: null,
        errors,
      } as DataResponse<T>,
      meta: null,
    } as HttpDataResponse<T>;
    return this;
  }

  withUnauthorizedMessage(
    errors = [NotAuthorizedError] as ErrorDataResponse[]
  ): HttpDataResponseBuilder<T> {
    this._instance = {
      statusCode: 401,
      body: {
        success: false,
        data: null,
        errors,
      } as DataResponse<T>,
      meta: null,
    } as HttpDataResponse<T>;
    return this;
  }

  withInfoErrorMessage(
    errors: ErrorDataResponse[]
  ): HttpDataResponseBuilder<T> {
    this._instance = {
      statusCode: 400,
      body: {
        success: false,
        data: null,
        errors,
      } as DataResponse<T>,
      meta: null,
    } as HttpDataResponse<T>;
    return this;
  }

  withValidationError(errors: any): HttpDataResponseBuilder<T> {
    this._instance = {
      statusCode: 422,
      body: {
        success: false,
        data: null,
        errors,
      } as DataResponse<T>,
      meta: null,
    } as HttpDataResponse<T>;
    return this;
  }

  build(): HttpDataResponse<T> {
    if (this._instance) {
      return this._instance;
    }
    return this.create().build();
  }

  static make<T>() {
    return new HttpDataResponseBuilder<T>().create();
  }
}
