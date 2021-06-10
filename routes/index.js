var express = require('express');
var router = express.Router();
var unirest = require("unirest");


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'True Facts' });

  var req = unirest("GET", "https://covid-19-data.p.rapidapi.com/report/country/name");

  req.query({
    "name": "USA",
    "date": "2020-06-10"
  });

  req.headers({
    "x-rapidapi-key": "d93b61c9demshbf08c34f5be30dbp1e14c0jsn1124be3651ef",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    "useQueryString": true
  });


  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
});

module.exports = router;



