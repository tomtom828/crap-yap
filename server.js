// Node Dependencies
var express = require('express');
var exphbs = require('express-handlebars');

// Set up Express App
var app = express();

// Express-Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Serve Static elements
app.use(express.static('public'));

// Server Routing Map 
// ============================================================
app.get('/', function (req, res) {
  res.render('index')
})

app.get('*', function(req, res) {
  res.render('404'); 
})

// ============================================================

// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Running on port: ' + port);
});
