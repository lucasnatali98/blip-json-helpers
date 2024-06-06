import fs from "fs";

const args = process.argv.slice(2);
const validArgs = ["event-tracking", "ending-flow", "tags"];

args.forEach((arg) => {
  if (!validArgs.includes(arg)) {
    throw new Error(
      `O argumento da linha de comando ${arg} não é válido. \n\nConsulte a documentação do projeto: https://github.com/lucasnatali98/blip-json-helpers`
    );
  }
});

const configFile = fs.readFileSync("config.json", "utf8");
const config = JSON.parse(configFile);

const preprocessingErrors = Object.entries(config).map(([key, value]) => {
  const processingResult = {
    hasError: false,
    invalidKeys: [],
    error: "",
  };
});
