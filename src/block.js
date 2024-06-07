import { generateUUID } from "./utils/util";

export function createBlock(flow, blockInfo) {
  try {
    const uuid = generateUUID();
    const block = {
      $contentActions: [
        {
          input: {
            bypass: true,
            $cardContent: {
              document: {
                id: "07544ef9-b8c1-420d-9229-1e7036344449",
                type: "text/plain",
                textContent: "Entrada do usuário",
                content: "Entrada do usuário",
              },
              editable: false,
              deletable: true,
              position: "right",
              editing: false,
            },
            $invalid: false,
          },
          $invalid: false,
        },
      ],
      $conditionOutputs: [],
      $enteringCustomActions: [],
      $leavingCustomActions: [],
      $inputSuggestions: [],
      $defaultOutput: { stateId: "fallback", $invalid: false },
      $tags: [],
      id: newId,
      root: false,
      $title: blockInfo.title,
      $position: {
        top: `${createBlock.ypos}px`,
        left: `${createBlock.xpos}px`,
      },
      $invalidContentActions: false,
      $invalidOutputs: false,
      $invalidCustomActions: false,
      $invalid: false,
    };

    const outputFlow = (flow[uuid] = block);
    return outputFlow;
  } catch (error) {
    console.error(error);
    return error;
  }
}
