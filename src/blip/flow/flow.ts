import { Action, Block } from "../block/block";

export type GlobalActions = Action;
export type Flow = {
  flow: {
    [key: string]: Block;
  };
  globalActions: GlobalActions;
};
