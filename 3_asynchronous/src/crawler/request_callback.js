import fs from "fs";
import { parseTargetData } from "../parser/parser.js";

export function getAirData(target, callback) {
  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    const jsonData = JSON.parse(data);
    const result = parseTargetData(jsonData, target);

    callback(result);
  });
}
