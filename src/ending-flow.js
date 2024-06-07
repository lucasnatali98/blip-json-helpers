export function endingFlow(flow, payload) {
  try {
    const { endingBlockInfo, endingCondition } = payload;
    const blockToPassArray = ["welcome", "desk"];
    for (const [key, value] of Object.entries(flow)) {
      if (blockToPassArray.includes(key)) {
        continue;
      }
    }
  } catch (error) {
    return error;
  }
}
