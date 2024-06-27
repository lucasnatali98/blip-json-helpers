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
  conditionOutputs: ContentAction[];
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

  constructor(block: Block) {}

  private _validateBlock(block: Block) {}
}

/**
 *
 *
 */
export interface BlockService {
  create(flow: Flow, blockInfo: any): Block;
  addTextToBlock(block: Block, text: string): Block;
  addTrackingToBlock(block: Block, tracking: any): Block;
  updateBlockInputProperty(block: Block, property: string, value: any): Block;
}

export class BlockServiceImpl implements BlockService {
  create(flow: Flow, blockInfo: any): Block {
    return {} as Block;
  }
  addTextToBlock(block: Block, text: string): Block {
    block.contentActions.splice(0, 0, {
      action: {
        $id: generateUUID(),
        $typeOfContent: "",
        type: "SendMessage",
        settings: {
          id: generateUUID(),
          type: "text/plain",
          content: text,
          metadata: {},
        },
        $cardContent: {
          document: {
            id: generateUUID(),
            type: "text/plain",
            content: text,
            metadata: {},
          },
          editable: true,
          deletable: true,
          position: "left",
          editing: false,
        },
      },
      $invalid: false,
    });

    return block;
  }
  addTrackingToBlock(block: Block, tracking: any): Block {
    block.enteringCustomActions.push({
      id: generateUUID(),
      typeOfContent: "",
      type: "TrackEvent",
      title: "",
      invalid: false,
      settings: {
        extras: {},
        category: tracking.category,
        action: tracking.action,
      },
      condition: [],
    });
    return block;
  }
  updateBlockInputProperty(block: Block, property: string, value: any): Block {
    block.contentActions.map((action) => {
      if (action.input) {
        action.input[property] = value;
      }
    });

    return block;
  }
}
