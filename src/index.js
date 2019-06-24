var express = require('express');
var bodyParser = require('body-parser')
var app = express();
const routes = require("./routes");

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', routes);

app.listen(3000, function(err) {
    if (err) throw err;
    else console.log('Server started at http://localhost:3000');
});
