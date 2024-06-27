import { Block } from "./block";

export class BlockBuilder {
  private _instance: Block | null;

  constructor() {
    this._instance = {} as Block;
  }
  create(block?: Partial<Block>): BlockBuilder {
    this._instance = {
      ...block,
    } as Block;
    return this;
  }
  build(): Block {
    if (this._instance) return this._instance;
    return this.create().build();
  }
  buildCollection() {}
}
