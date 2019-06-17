const express = require('express');
let routes = express.Router();
var user_info = {};

routes.get('/', function(req, res, next) {
  res.render('index');
});

routes.get('/index', function(req, res, next) {
  res.render('index');
});

routes.get('/language_level', function(req, res, next) {
  res.render('language_level');
});
routes.post('/language_level', function(req, res) {
  if(!req.body) console.log("ERROR POST");
  user_info.user_name = req.body.userName;
  res.render('language_level');
});


routes.get('/memory_type', function(req, res, next) {
  res.render('memory_type');
});
routes.post('/memory_type', function(req, res) {
  if(!req.body) console.log("ERROR POST");
  user_info.lang_level = req.body.level;
  res.render('memory_type');
});

routes.get('/data_input', function(req, res, next) {
  res.render('data_input');
});
routes.post('/data_input', function(req, res) {
  if(!req.body) console.log("ERROR POST");
  user_info.mem_type = req.body.memory;
  res.render('data_input');
});


routes.get('/demo1', function(req, res, next) {
  res.render('demo1');
});
routes.post('/demo1', function(req, res) {
  if(!req.body) console.log("ERROR POST");
  user_info.dat_input = req.body.input;
  //console.log(user_info); // Оставил для контроля
  res.render('demo1');
});

routes.get('*', function(req, res, next) {
  res.status(404);
  res.render('error404');
});

module.exports = routes;
