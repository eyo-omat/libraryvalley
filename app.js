var express = require('express');

var app = express();

var routes = require('./routes');
var bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('view engine', 'ejs');

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);
app.get('/addbooks', routes.addbooks);
app.post('/createbook', routes.createbook);
app.get('/signup', routes.signup);
app.post('/register', routes.register);
app.get('/booksummary/:bookname?', routes.singlebook);
app.post('/borrowbook/:borrowedValue/:bookname', routes.borrowbook);
app.post('/deletebook/:bookname', routes.deletebook);
app.get('/managebook/:bookname', routes.managebook);
app.post('/updatebook/:bookname', routes.updatebook);

app.listen(4400, function(){
	console.log("The application runs on localhost:4400");
})










