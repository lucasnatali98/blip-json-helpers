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

  build(): BlipHttpResponseTemplate<T> {
    if (this._instance) {
      return this._instance;
    }
    return this.create().build();
  }
}
