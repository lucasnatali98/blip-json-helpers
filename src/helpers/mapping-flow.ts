import { Flow } from "@/shared/flow";

export function mappingFlow(flow: Flow) {
  try {
    const flowMap = {};
    for (const [key, value] of Object.entries(flow)) {
      const contentActions = value.$contentActions;
      const actionsCount = value.$contentActions.length;
      const enteringCustomActions = value.$enteringCustomActions;
      const leavingCustomActions = value.$leavingCustomActions;

      const leavingCustomActionsLength = leavingCustomActions.length;
      const enteringCustomActionsLength = enteringCustomActions.length;
      const totalCustomActions =
        leavingCustomActionsLength + enteringCustomActionsLength;

      const outputConditions = value.$outputConditions;
      const outputConditionsLength = outputConditions.length;
      const tags = value.$tags;
      const title = value.$title;

      const hasUserInput = contentActions.some((action) => action === "input");
      const hasBotMessages = false;

      const enteringCustomActionsTypes = enteringCustomActions.map(
        (action) => action.type
      );
      const leavingCustomActionsTypes = leavingCustomActions.map(
        (action) => action.type
      );

      flowMap[key] = {
        title: title,
        hasUserInput: hasUserInput,
        hasBotMessage: hasBotMessages,
        actionsCount: actionsCount,
        actionsTypes: enteringCustomActionsTypes.concat(
          leavingCustomActionsTypes
        ),
        outputConditionsCount: outputConditionsLength,
        hasTags: tags.length > 0,
      };
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}
