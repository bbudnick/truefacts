/* 
  TODO: 

  -- Welcome and explanation 
  -- Table of keywords on COVID that have definitions and links to the article
      where the keyword was used 
  -- Dashboard homepage/hamburger menu 

*/



var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'True Facts' });
});

module.exports = router;
