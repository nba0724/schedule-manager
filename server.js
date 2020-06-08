// express本体の設定
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// express Routerの設定
// const api = require("./server/routers/api");

// クラスターモジュール用
const cluster = require("cluster");
const os = require("os");

// XSSなどもろもろの設定用
const helmet = require("helmet");

// ログ出力
const logger = require("morgan");
app.use(logger("combined"));

// 並列化処理の設定
const numCPUs = os.cpus().length;
if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    console.log(" worker %d is up!!", i);
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(" worker %d is stop (%s).", worker.process.pid, signal || code);
    cluster.fork();
  });
} else {
  // Middlewareの設定
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // APIルーティング
  //app.use("/_api", api);

  // 静的ファイルのパス
  app.use(express.static(__dirname + "/dist/"));
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
  });

  app.listen(port);
}
