import expres from "express";
import config from "./config";
import { S_IFMT } from "constants";
//import fs from "fs";

const server = expres();

server.set("view engine", "ejs");

server.get("/", (req, res) => {
  //res.send("welcom to express server");
  res.render("index", {
    content: "hello Express and <em>Ejs</em>"
  });
});

server.use(expres.static("public"));

// server.get("/about.html", (req, res) => {
//   fs.readFile("about.html", (err, data) => {
//     res.send(data.toString());
//   });
// });

server.listen(config.port, () => {
  console.info("Express is listening on port ", config.port);
});

// import config, { NODE_ENV, logStar } from "./config";

// console.log(config, NODE_ENV);
// logStar("no Error");

// import https from "https";
// https.get("https://www.lynda.com", res => {
//   console.log("response status log: " + res.statusCode);

//   res.on("data", chunk => {
//     console.log(chunk.toString());
//   });
// });

// import http from "http";

// const server = http.createServer();

// server.listen(8080);
// server.on("request", (req, res) => {
//   res.write("Hello http");
//   setTimeout(() => {
//     res.write("I can stream!");
//     res.end();
//   }, 10000);
// });
