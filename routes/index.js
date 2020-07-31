var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    code: 0,
    data: {
      title: '你好dadsd'
    }
  });
});

module.exports = router;
