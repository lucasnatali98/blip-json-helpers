export type Metadata = {
  "#command.uri": string;
};
export type BlipHttpResponseTemplate<ResourceType> = {
  type?: string;
  method: string;
  status: string;
  id: string;
  from: string;
  to: string;
  resource: ResourceType;
  metadata?: Metadata;
};

export type BlipHttpResponseTemplateWithoutResource = Omit<
  BlipHttpResponseTemplate<any>,
  "resource"
>;

export class BlipHttpResponseTemplateBuilder<T> {
  private _instance: BlipHttpResponseTemplate<T> | null;

  constructor() {
    this._instance = null;
  }

  create(
    override?: Partial<BlipHttpResponseTemplate<T>>
  ): BlipHttpResponseTemplateBuilder<T> {
    this._instance = {
      type: "application/json",
      method: "get",
      status: "success",
      id: "123",
      from: "",
      to: "",
      resource: {} as T,
      metadata: {
        "#command.uri": "",
      },
      ...override,
    };
    return this;
  }

  withType(type: string): BlipHttpResponseTemplateBuilder<T> {
    this._instance = {
      ...this._instance,
      type,
    } as BlipHttpResponseTemplate<T>;
    return this;
  }

  withId(id: string): BlipHttpResponseTemplateBuilder<T> {
    this._instance = {
      ...this._instance,
      id,
    } as BlipHttpResponseTemplate<T>;
    return this;
  }

  withResource(resource: T): BlipHttpResponseTemplateBuilder<T> {
    this._instance = {
      ...this._instance,
      resource,
    } as BlipHttpResponseTemplate<T>;
    return this;
  }
  withSuccess(isSuccess: boolean): BlipHttpResponseTemplateBuilder<T> {
    this._instance = {
      ...this._instance,
      status: isSuccess ? "success" : "failure",
    } as BlipHttpResponseTemplate<T>;

    return this;
  }
  build(): BlipHttpResponseTemplate<T> {
    if (this._instance) {
      return this._instance;
    }
    return this.create().build();
  }
}
