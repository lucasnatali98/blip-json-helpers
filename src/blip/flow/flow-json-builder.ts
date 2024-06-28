import { Flow } from "./flow";

export class FlowJsonBuilder {
  private _instance: Flow;
  constructor() {
    this._instance = {} as Flow;
  }

  create(): FlowJsonBuilder {
    this._instance = {} as Flow;
    return this;
  }

  build(): Flow {
    return this._instance;
  }

  buildCollection(): Flow[] {
    return [this._instance];
  }
}
