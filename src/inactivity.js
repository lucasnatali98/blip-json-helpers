import {
  addTextToBlock,
  addTrackingToBlock,
  createBlock,
  updateBlockInputProperty,
} from "./block";
export function inactivity(flow, inactivityInfo) {
  try {
    const { firstMessage, lastMessage, firstDelay, lastDelay } = inactivityInfo;
    const resultFlow = flow;
    let inactivityBlockId;
    for (const [key, value] of Object.entries(flow)) {
      if (value.$title.toLowerCase() === "inatividade") {
        inactivityBlockId = key;
        resultFlow[key] = addTextToBlock({ key: value }, firstMessage);
        resultFlow[key] = addTrackingToBlock(
          { key: value },
          {
            category: "inatividade",
            action: "inatividade",
          }
        );
        break;
      } else {
        let newBlock = createBlock(flow, {
          title: "",
          xpos: 0,
          ypos: 0,
        });
        newBlock = updateBlockInputProperty(value);
        newBlock = addTextToBlock(newBlock, firstMessage);
        newBlock = addTrackingToBlock(newBlock, {
          category: "inatividade",
          action: "inatividade",
        });
      }
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}
