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

//Envolver em um try catch
const configFile = fs.readFileSync("config.json", "utf8");
const config = JSON.parse(configFile);
console.log("config file: ", config);
const validOperationArgumentsByOperation = {
  event_tracking: ["action", "category"],
  ending_flow: ["add", "remove"],
  tags: [],
  mapping_flow: [],
  inactivity: [],
  contact_journey: [],
  blacklist: [],
  names: [],
};

const preprocessingErrors = Object.entries(config).map(([key, value]) => {
  const processingResult = {
    hasError: false,
    invalidKeys: [],
    error: "",
  };

  if (!validArgs.includes(key)) {
    processingResult.hasError = true;
    processingResult.invalidKeys.push(key);
    processingResult.error = `A chave ${key} não é válida.`;
    return processingResult;
  }
  const operationArgumentsKeys = validOperationArgumentsByOperation[key];
  const isOperationParametersValid = value.every((operation) =>
    operationArgumentsKeys.includes(operation.operation)
  );

  if (!isOperationParametersValid) {
    processingResult.hasError = true;
    processingResult.invalidKeys.push(key);
    processingResult.error = `Os argumentos da operação ${key} não são válidos.`;
    return processingResult;
  }
});

if (preprocessingErrors.some((error) => error.hasError)) {
  throw new Error(preprocessingErrors.map((error) => error.error).join("\n\n"));
}

for (const [key, value] of Object.entries(config)) {
  console.log(key, value);
}
