import fs from "fs";
import path from "node:path";
const DEFAULT_INPUT_DIR = "../input/";
export function loadFile(path) {
  try {
    const file = fs.readFileSync(path, "utf8");
    return JSON.parse(file);
  } catch (error) {
    return error;
  }
}
