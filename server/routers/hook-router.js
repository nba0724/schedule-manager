const express = require("express");
const router = express.Router();
const line = require("@line/bot-sdk");

const lineConfig = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_SECRET_KEY
};

router.use(line.middleware(lineConfig));
router.post("/", (req, res) => {
  return res.json({ test: "hook" });
});

module.exports = router;
