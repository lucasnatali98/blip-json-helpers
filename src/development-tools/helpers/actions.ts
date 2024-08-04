import { Flow } from "@/blip/flow/flow";

export interface Actions {
  setNames(): Flow;
}
export class ActionsImpl implements Actions {
  setNames(): Flow {
    throw new Error("Method not implemented.");
  }
}
