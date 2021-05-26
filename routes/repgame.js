var express = require("express");
var router = express.Router();
const app = new express(); 

router.get("/", function (req, res, next) {
    res.render('repgame');
});

app.use(express.static(__dirname+'/public'));

module.exports = router;