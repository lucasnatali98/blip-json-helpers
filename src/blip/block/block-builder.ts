import { generateUUID } from "@/utils/util";
import { Block, ContentAction } from "./block";

export class BlockBuilder {
  private _instance: Block | null;

  constructor() {
    this._instance = {} as Block;
  }
  create(block?: Partial<Block>): BlockBuilder {
    this._instance = {
      conditionOutputs: [],
      contentActions: [],
      defaultOutput: [],
      enteringCustomActions: [],
      id: generateUUID(),
      inputSuggestions: [],
      invalid: false,
      invalidContentActions: false,
      invalidCustomActions: false,
      invalidOutputs: false,
      isAiGenerated: false,
      leavingCustomActions: [],

      root: false,
      tags: [],
      title: "example",
      ...block,
    } as Block;
    return this;
  }
  build(): Block {
    if (this._instance) return this._instance;
    return this.create().build();
  }

  withRoot(root: boolean): BlockBuilder {
    this._instance = {
      ...this._instance,
      root,
    } as Block;
    return this;
  }
  withIsAiGenerated(isAiGenerated: boolean): BlockBuilder {
    this._instance = {
      ...this._instance,
      isAiGenerated,
    } as Block;
    return this;
  }
  withInvalid(invalid: boolean): BlockBuilder {
    this._instance = {
      ...this._instance,
      invalid,
    } as Block;
    return this;
  }
  withInvalidContentActions(invalidContentActions: boolean): BlockBuilder {
    this._instance = {
      ...this._instance,
      invalidContentActions,
    } as Block;
    return this;
  }
  withInvalidOutputs(invalidOutputs: boolean): BlockBuilder {
    this._instance = {
      ...this._instance,
      invalidOutputs,
    } as Block;
    return this;
  }
  withInvalidCustomActions(invalidCustomActions: boolean): BlockBuilder {
    this._instance = {
      ...this._instance,
      invalidCustomActions,
    } as Block;
    return this;
  }
  withTags(tags: string[]): BlockBuilder {
    this._instance = {
      ...this._instance,
      tags,
    } as Block;
    return this;
  }
  withLeavingCustomActions(
    leavingCustomActions: ContentAction[]
  ): BlockBuilder {
    this._instance = {
      ...this._instance,
      leavingCustomActions,
    } as Block;
    return this;
  }
  withEnteringCustomActions(
    enteringCustomActions: ContentAction[]
  ): BlockBuilder {
    this._instance = {
      ...this._instance,
      enteringCustomActions,
    } as Block;
    return this;
  }
  withInputSuggestions(inputSuggestions: ContentAction[]): BlockBuilder {
    this._instance = {
      ...this._instance,
      inputSuggestions,
    } as Block;
    return this;
  }
  withDefaultOutput(defaultOutput: ContentAction): BlockBuilder {
    this._instance = {
      ...this._instance,
      defaultOutput,
    } as Block;
    return this;
  }

  withTitle(title: string): BlockBuilder {
    this._instance = {
      ...this._instance,
      title,
    } as Block;
    return this;
  }
  withConditionOutputs(conditionOutputs: ContentAction[]): BlockBuilder {
    this._instance = {
      ...this._instance,
      conditionOutputs,
    } as Block;
    return this;
  }
  withContentActions(contentActions: ContentAction[]): BlockBuilder {
    this._instance = {
      ...this._instance,
      contentActions,
    } as Block;
    return this;
  }

  withId(id: string): BlockBuilder {
    this._instance = {
      ...this._instance,
      id,
    } as Block;
    return this;
  }
  buildCollection(): Block[] {
    return [
      this.create().withId("1").build(),
      this.create().withId("2").build(),
      this.create().withId("3").build(),
    ];
  }
}
