const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  return res.json({ test: "hook" });
});

module.exports = router;
