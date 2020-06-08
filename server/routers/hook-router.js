const express = require("express");
const router = express.Router();
const line = require("@line/bot-sdk");

const lineConfig = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_SECRET_KEY
};
const client = new line.Client(lineConfig);

router.use(line.middleware(lineConfig));
router.post("/", (req, res) => {
  res.status(200).end();
  const events = req.body.events;
  const promises = [];
  for (let i = 0, l = events.length; i < l; i++) {
    const ev = events[i];
    promises.push(echoman(ev));
  }
  Promise.all(promises).then(console.log("pass"));
});
async function echoman(ev) {
  const pro = await client.getProfile(ev.source.userId);
  return client.replyMessage(ev.replyToken, {
    type: "text",
    text: `${pro.displayName}さん、今「${ev.message.text}」って言いました？`
  });
}
module.exports = router;
