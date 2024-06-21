import { generateUUID } from "@/utils/util";

export type Block = {};
export function createBlock(flow: any, blockInfo: any) {
  try {
    const { title, xpos, ypos } = blockInfo;
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
      $title: title,
      $position: {
        top: `${ypos}px`,
        left: `${xpos}px`,
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

export function addTextToBlock(block, text) {
  block.$contentActions.splice(0, 0, {
    action: {
      $id: generateUUID(),
      $typeOfContent: "",
      type: "SendMessage",
      settings: {
        id: uuidv4(),
        type: "text/plain",
        content: text,
        metadata: {},
      },
      $cardContent: {
        document: {
          id: uuidv4(),
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
}
export function addTrackingToBlock(block, tracking) {
  block.$enteringCustomActions.push({
    $id: generateUUID(),
    $typeOfContent: "",
    type: "TrackEvent",
    $title: "",
    $invalid: false,
    settings: {
      extras: {},
      category: tracking.category,
      action: tracking.action,
    },
    condition: [],
  });
  return block;
}

export function updateBlockInputProperty(block, property, value) {
  block.$contentActions.map((action) => {
    if (action.input) {
      action.input[property] = value;
    }
  });

  return block;
}
