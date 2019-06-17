import { WSASERVICE_NOT_FOUND } from "constants";

const env = process.env;

export const NODE_ENV = env.NODE_VIEW || "develoopement";

export const logStar = function(message) {
  console.log("*********************");
  console.info(message);
  console.log("*********************");
};

export default {
  port: env.PORT || 8080
};
