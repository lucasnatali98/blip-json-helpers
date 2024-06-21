import { Flow } from "@/shared/flow";
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
export function endingFlow(flow: Flow, payload: EndingFlowPayload) {
  try {
    const { endingBlockInfo, endingCondition } = payload;
    const endingBlockId = endingBlockInfo.stateId;
    const blockToPassArray = ["welcome", "desk"];
    const resultFlow = {};
    for (const [key, value] of Object.entries(flow)) {
      if (blockToPassArray.includes(key)) {
        continue;
      }

      const contentActions = value.$contentActions ?? null;

      if (contentActions === null) {
        continue;
      }

      for (const contentAction of contentActions) {
        if (!contentAction.input?.bypass) {
          const endingFlowOutputCondition = endingFlowConditionOutput({
            stateId: key,
          });

          const isEndingFlowOutputConditionAlreadyExists =
            contentAction.$conditionOutputs.some(
              (conditionOutput) =>
                conditionOutput.stateId === endingBlockId ||
                arraysDeepEqual(
                  conditionOutput.conditions,
                  endingFlowOutputCondition.conditions
                )
            );

          if (!isEndingFlowOutputConditionAlreadyExists) {
            contentAction.$conditionOutputs.splice(
              0,
              0,
              endingFlowOutputCondition
            );
          }
        }
      }
    }

    resultFlow = { ...flow };
    return resultFlow;
  } catch (error) {
    return error;
  }
}
