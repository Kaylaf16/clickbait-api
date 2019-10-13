const express = require('express');
const router = express.Router();
// define routes here

router.use("/test", require("./v1/test_route.js"));


module.exports=router;
