import { resolve } from "path";
import winston from "winston";

const logPath = resolve(__dirname, `../../storage/logs/`);

const createLoggerFile = ["true", true, 1].includes(
  String(process.env.LOGGER_FILE)
);

const transportsFiles = createLoggerFile
  ? [
      new winston.transports.File({
        filename: resolve(logPath, "error.log"),
        level: "error",
      }),
      new winston.transports.File({
        filename: resolve(logPath, "combined.log"),
      }),
    ]
  : [];

function stringify(obj: unknown) {
  let cache: unknown[] = [];
  const str = JSON.stringify(obj, function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        return;
      }
      cache.push(value);
    }
    return value;
  });
  cache = [];
  return str;
}

const logger = winston.createLogger({
  level: "info", // Define o nível mínimo de log
  format: winston.format.combine(
    // winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.printf(
      ({ timestamp, level, message, ...rest }) =>
        `${timestamp} ${level}: ${message} ${stringify(rest)}`
    )
  ),
  transports: [new winston.transports.Console(), ...transportsFiles],
});

export default logger;
