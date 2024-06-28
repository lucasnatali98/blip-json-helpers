import { Flow } from "@/blip/flow/flow";
import { generateUUID } from "@/utils/util";

export interface ConditionOutput {}

export type BlockSettingsContent = {
  state: string;
  interval: number;
};
export interface BlockSettings {
  id: string;
  type: string;
  content: BlockSettingsContent;
  metadata: any;
}

export type BlockCardContentDocument = {
  id: string;
  type: string;
  content: BlockSettingsContent;
};
export interface BlockCardContent {
  document: BlockCardContentDocument;
  editable: boolean;
  deletable: boolean;
  position: string;
  editing?: boolean;
}
export interface Action {
  id: string;
  typeOfContent: string;
  type: string;
  settings: BlockSettings;
  cardContent: BlockCardContent;
  invalid: boolean;
  hashKey: string;
}
export interface Input {
  bypass: boolean;
  cardContent: BlockCardContent;
  invalid: boolean;
  [key: string]: any;
}
export interface ContentAction {
  action: Action;
  input: Input;
}
export interface EnteringCustomAction {}
export interface LeavingCustomAction {}
export interface InputSuggestion {}
export interface DefaultOutput {}

export interface Tags {}
export interface Position {
  top: string;
  left: string;
}

/**
 *
 *
 */
export interface Block {
  contentActions: ContentAction[];
  conditionOutputs: ConditionOutput[];
  enteringCustomActions: EnteringCustomAction[];
  leavingCustomActions: LeavingCustomAction[];
  inputSuggestions: InputSuggestion[];
  defaultOutput: DefaultOutput;
  tags: Tags[];
  id: string;
  root: boolean;
  title: string;
  isAiGenerated: boolean;
  invalid: boolean;
  invalidContentActions: boolean;
  invalidOutputs: boolean;
  invalidCustomActions: boolean;
}
export class BlockImpl implements Block {
  contentActions: ContentAction[] = [];
  conditionOutputs: ContentAction[] = [];
  enteringCustomActions: EnteringCustomAction[] = [];
  leavingCustomActions: LeavingCustomAction[] = [];
  inputSuggestions: InputSuggestion[] = [];
  defaultOutput!: DefaultOutput;
  tags: Tags[] = [];
  id!: string;
  root: boolean = false;
  title!: string;
  isAiGenerated: boolean = false;
  invalid: boolean = false;
  invalidContentActions: boolean = false;
  invalidOutputs: boolean = false;
  invalidCustomActions: boolean = false;

  constructor(block: Block) {
    if (!this._validateBlock(block)) {
      throw new Error("Invalid block");
    }
  }

  private _validateBlock(block: Block): boolean {
    return false;
  }
}

/**
 *
 *
 */
export interface BlockService {
  create(blockInfo: Block): Block;
  addTextToBlock(block: Block, text: string): Block;
  addTrackingToBlock(block: Block, tracking: any): Block;
  updateBlockInputProperty(block: Block, property: string, value: any): Block;
}

export class BlockServiceImpl implements BlockService {
  constructor(private readonly _block: Block) {}
  addTextToBlock(block: Block, text: string): Block {
    throw new Error("Method not implemented.");
  }
  addTrackingToBlock(block: Block, tracking: any): Block {
    throw new Error("Method not implemented.");
  }
  updateBlockInputProperty(block: Block, _property: string, value: any): Block {
    throw new Error("Method not implemented.");
  }
  create(blockInfo: Block): Block {
    return {
      ...this._block,
      ...blockInfo,
    } as Block;
  }
}
