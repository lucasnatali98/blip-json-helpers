import { ErrorDataResponse } from "./error-data-response";
import { Nillable } from "./types";

export type DataResponse<T> = {
  success: boolean;
  data?: Nillable<T>;
  errors: ErrorDataResponse[];
  meta?: any;
};
