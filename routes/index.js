var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Рубля */
router.get('/rub', function(req, res, next) {
    res.send("<h1>Страница Рубля</h1>")
});

/* Страница Доллара */
router.get('/usd', function(req, res, next) {
    res.send("<h1>Страница Даллара</h1>")
});

/* Страница Евро */
router.get('/eu', function(req, res, next) {
    res.send("<h1>Страница Евро</h1>")
});

module.exports = router;
