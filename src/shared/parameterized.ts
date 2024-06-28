import { Nillable } from "@/shared/types";

export interface Serializable {
  serialize(): string;
}

export interface Parameterizable<Params extends object> {
  parameterize(): Readonly<Params>;
}

export class ParamUtils {
  static parameterize<
    To extends object,
    From extends Parameterizable<To> = Parameterizable<To>,
  >(from: From) {
    return from.parameterize() as To;
  }

  static maybe<
    To extends object,
    From extends Parameterizable<To> = Parameterizable<To>,
  >(from: Nillable<From>) {
    return from ? (ParamUtils.parameterize(from) as To) : null;
  }
}

export interface ParameterizedBy<Params extends object>
  extends Serializable,
    Parameterizable<Params> {
  areParamsFilled(dto: Params): boolean;
  get filled(): boolean;
}

export function isParameterizable<P extends object>(
  value: unknown
): value is Parameterizable<P> {
  return typeof value === "object" && value !== null && "parameterize" in value;
}

export type ParamsOf<T extends object> =
  T extends Parameterizable<infer P> ? P : never;
