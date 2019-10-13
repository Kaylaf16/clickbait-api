const express = require('express');
const router = express.Router();

router.get("/test_get", (req, res) => {
  console.log('successful');
  res.sendStatus(200);
});

module.exports = router;
