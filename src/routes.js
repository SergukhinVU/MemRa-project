const express = require('express');
let routes = express.Router();

routes.get('/', function(req, res, next) {
    res.render('index');
});

routes.get('/index', function(req, res, next) {
    res.render('index');
});

routes.get('/language_level', function(req, res, next) {
    res.render('language_level');
});

routes.get('/memory_type', function(req, res, next) {
    res.render('memory_type');
});

routes.get('/data_input', function(req, res, next) {
    res.render('data_input');
});

routes.get('/demo1', function(req, res, next) {
    res.render('demo1');
});

routes.get('*', function(req, res, next) {
  res.status(404);
  res.render('error404');
});

module.exports = routes;
