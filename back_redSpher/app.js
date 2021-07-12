var createError = require('http-errors');
var express = require('express');
var path = require('path');
var http = require('http');
var mathRouter = require('./routes/math');
var indexRouter = require('./routes/index');
const { env } = require('process');
const cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Nouveau Body-Parser Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//Ajout des CORS pour eviter les restrictions cross domains
app.use(cors())

//On ajoute le routeur de mathématique
app.use('/math', mathRouter);
//On ajoute le routeur "index" pour permettre d'avoir un affichage sur l'URL de base
app.use('/', indexRouter);

// catch 404 and forward to error handler (par défaut)
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler (par défaut)
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

//Création du serveur HTTP sur le port indiqué dans les variables d'environnement OU le 3001
const PORT = process.env.PORT || '3001';
app.set('port', PORT);

//On lance la création du serveur Http avec un message callback indiquant que le serveur est bien ouvert
var server = http.createServer(app);
server.listen(PORT,()=>{
  console.log(`Le serveur est à l'écoute sur le port ${PORT}`)
});

module.exports = app;
