import axios from "axios";
import { parseTargetData } from "../parser/parser.js";

export function getAirData(target) {
  return axios
    .get("http://openapi.airgwangsan.kr:8080/Gwangsan/getDustDataAPI?apiId=01")
    .then((res) => {
      const result = parseTargetData(res.data, target);

      return result;
    });
}
