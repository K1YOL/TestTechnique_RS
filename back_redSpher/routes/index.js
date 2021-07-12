// Routeur "index" qui va s'occuper d'afficher un message d'acceuil
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenue sur la partie Back du Test Technique RedSpher' });
});
module.exports = router;
