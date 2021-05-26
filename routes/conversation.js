var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.send("How to have a productive conversation about difficult things");
});

module.exports = router;