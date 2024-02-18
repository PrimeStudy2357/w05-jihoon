import { getAirData as getAirData1 } from "./src/crawler/request_callback.js";
import { getAirData as getAirData2 } from "./src/crawler/request_promise.js";
import { getAirData as getAirData3 } from "./src/crawler/request_async_await.js";

const TARGET = "장덕동 성덕 초등학교";

getAirData1(TARGET, (result) => {
  console.log(result);
});

getAirData2(TARGET).then((result) => {
  console.log(result);
});

getAirData3(TARGET).then((result) => {
  console.log(result);
});
