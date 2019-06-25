const express = require('express');
let routes = express.Router();
var user_info = {};
var ch_letter = "";
var correct_words = ['sandwich', 'have music lessons', 'go to the park', 'pineapple', 'play football', 'cupboard'];
var ins_words = [];
var err_numb = 0;

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


routes.get('/demo_input', function(req, res, next) {
  res.render('demo_input');
});
routes.post('/demo_input', function(req, res) {
  if(!req.body) console.log("ERROR POST");
  user_info.dat_input = req.body.input;
  //console.log(user_info); // Оставил для контроля
  res.render('demo_input');
});


routes.get('/demo_translate', function(req, res, next) {
    res.render('demo_translate');
});
routes.post('/demo_translate', function(req, res) {
//    if(!req.body) console.log("ERROR POST");
//    user_info.dat_input = req.body.input;  не разобрался, для чего это
    res.render('demo_translate');
});

routes.get('/demo_snake', function(req, res, next) {
    res.render('demo_snake');
});
routes.post('/demo_translate', function(req, res) {
    res.render('demo_snake');
});


routes.post('/choose_letter', function(req, res) {
    res.render('choose_letter');
});

routes.get('/choose_letter', function(req, res, next) {
  res.render('choose_letter');
});

routes.get('/insert_words', function(req, res, next) {
  res.render('insert_words');
});
routes.post('/insert_words', function(req, res) {
  // TO DO
  res.render('insert_words');
});

routes.get('/results', function(req, res, next) {
  res.render('results', {err_numb: err_numb});
});


routes.get('/page10', function(req, res, next) {
  res.render('page10');
});

routes.post('/page10', function(req, res) {
  ins_words = req.body.txt;
  words_cmp(ins_words);
  res.render('page10');
});

routes.get('/page13', function(req, res, next) {
  res.render('page13');
});

routes.post('/page13', function(req, res) {
  res.render('page13');
});

routes.post('/choose_image', function(req, res) {
  res.render('choose_image');
});

routes.get('/choose_image', function(req, res, next) {
  res.render('choose_image');
});

routes.get('/bad', function(req, res, next) {
  err_numb++;
  res.render('results', {err_numb: err_numb});
});

routes.get('*', function(req, res, next) {
  res.status(404);
  res.render('error404');
});

function words_cmp(ins_words) {
  for (var i = 0; i < ins_words.length; i++) {
    if (ins_words[i] != correct_words[i])
      err_numb++;
  }
}

module.exports = routes;
