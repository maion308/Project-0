var express = require('express');
var path = require('path');
const app = express();
var nunjucks = require('nunjucks');
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
var bodyParser = require('body-parser');

nunjucks.configure('templates', {
 autoescape: true,
 express: app 
});

app.set('view engine','nunjucks');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extended: false
}));

app.use(express.static('includes'));



app.route('/')
 .get((req, res) => {
   res.render('index');
})

app.route('/index')
 .get((req, res) => {
   res.render('index');
})

app.route('/contact-us')
 .get((req, res) => {
   res.render('contact-us');
})

app.route('/inventory')
 .get((req, res) => {
   res.render('inventory');
})

app.listen(9000);