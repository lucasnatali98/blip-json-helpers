import { Flow } from "@/blip/flow/flow";
import { arraysDeepEqual, generateUUID } from "@/utils/util";

export type EndingFlowPayload = {
  message: string;
  condition: any;
};

const endingFlowConditionOutput = (info: any) => {
  const stateId = info.stateId;

  return {
    stateId: stateId,
    $id: generateUUID(),
    conditions: [
      {
        source: "input",
        comparison: "equals",
        values: ["sair", "encerrar"],
      },
    ],
  };
};
export function endingFlow(flow: Flow, payload: EndingFlowPayload) {}

export class EndingFlowUseCase {
  execute(input: any): Flow {
    return {} as Flow;
  }
}
