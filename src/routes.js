const express = require('express');
let routes = express.Router();
var user_info = {};
var ch_letter = "";
var correct_words = ['sandwich', 'have music lessons', 'go to the park', 'pineapple', 'play football', 'cupboard'];
var ins_words = [];
var err_numb = 0;


routes.get('/', function (req, res) {
  // SEND DATA TO PAGE
  res.render('index');
});

routes.post('/', function (req, res) {
  // GET DATA FROM PAGE
  if (!req.body) console.log("ERROR POST");
  user_info.user_name = req.body.userName;
  res.redirect('/language_level');
});


routes.get('/language_level', function (req, res) {
  // SEND DATA TO PAGE
  res.render('language_level');
});

routes.post('/language_level', function (req, res) {
  // GET DATA FROM PAGE
  if (!req.body) console.log("ERROR POST");
  user_info.lang_level = req.body.level;
  res.redirect('/memory_type');
});


routes.get('/memory_type', function (req, res) {
  // SEND DATA TO PAGE
  res.render('memory_type');
});

routes.post('/memory_type', function (req, res) {
  // GET DATA FROM PAGE
  if (!req.body) console.log("ERROR POST");
  user_info.mem_type = req.body.memory;
  res.redirect('/data_input');
});


routes.get('/data_input', function (req, res) {
  // SEND DATA TO PAGE
  res.render('data_input');
});

routes.post('/data_input', function (req, res) {
  // GET DATA FROM PAGE
  if (!req.body) console.log("ERROR POST");
  user_info.dat_input = req.body.input;
  res.redirect('/demo_input');
});


routes.get('/demo_input', function (req, res) {
  // SEND DATA TO PAGE
  res.render('demo_input');
});

routes.post('/demo_input', function (req, res) {
  // GET DATA FROM PAGE
  res.redirect('/demo_translate');
});


routes.get('/demo_translate', function (req, res) {
  // SEND DATA TO PAGE
  res.render('demo_translate');
});

routes.post('/demo_translate', function (req, res) {
  // GET DATA FROM PAGE
  res.render('demo_snake');
  //res.redirect('/choose_letter');
});

// routes.get('/demo_snake', function(req, res) {
//     res.render('demo_snake');
// });
// routes.post('/demo_translate', function(req, res) {
//     res.render('demo_snake');
// });


routes.get('/choose_letter', function (req, res) {
  // SEND DATA TO PAGE
  res.render('choose_letter');
});

routes.post('/choose_letter', function (req, res) {
  // GET DATA FROM PAGE
  res.redirect('/insert_words');
});


routes.get('/insert_words', function (req, res) {
  // SEND DATA TO PAGE
  res.render('insert_words');
});

routes.post('/insert_words', function (req, res) {
  // GET DATA FROM PAGE
  ins_words = req.body.txt;
  words_cmp(ins_words);
  res.redirect('/page10');
});

routes.get('/results', function (req, res) {
  // SEND DATA TO PAGE
  res.render('results', { err_numb: err_numb });
});


routes.get('/page10', function (req, res) {
  // SEND DATA TO PAGE
  res.render('page10');
});

routes.post('/page10', function (req, res) {
  // GET DATA FROM PAGE
  res.redirect('/page13');
});


routes.get('/page13', function (req, res) {
  // SEND DATA TO PAGE
  res.render('page13');
});

routes.post('/page13', function (req, res) {
  // GET DATA FROM PAGE
  res.redirect('/choose_image');
});


routes.get('/choose_image', function (req, res) {
  // SEND DATA TO PAGE
  res.render('choose_image');
});

routes.post('/choose_image', function (req, res) {
  // GET DATA FROM PAGE
  res.render('choose_image');
});

routes.get('/bad', function (req, res) {
  // SEND DATA TO PAGE
  err_numb++;
  res.render('results', { err_numb: err_numb });
});


routes.get('*', function (req, res) {
  // SEND DATA TO PAGE
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
