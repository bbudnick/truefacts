var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();
var unirest = require("unirest");
const jade = require('jade');
const bodyParser = require("body-parser");

router.use(
  bodyParser.urlencoded({
    extended: false,
    limit: 1024,
  })
);

/* GET home page. */
router.get('/', function (req, res, next) {

  const url = unirest("GET", "https://covid-19-data.p.rapidapi.com/country");
  url.query({
    "name": "usa",
  });
  url.headers({
    "x-rapidapi-key": "d93b61c9demshbf08c34f5be30dbp1e14c0jsn1124be3651ef",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    "useQueryString": true
  });
  url.then(function(result) {
    jade.compile('index'); 
    res.render('index', { title: 'True Facts', curData: result.raw_body});
    console.log(result);
  });
});



module.exports = router;
