var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.send("Reputable Resource, The Game");
});

module.exports = router;