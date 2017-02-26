// Global Messages Variable
var viewMessages;

// Node Dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

// Set up Express App and Body Parser
var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}))

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

app.post('/post/messages', function (req, res) {
  viewMessages = JSON.stringify(req.body, null, '<br>')
  res.sendStatus(200);
})

app.get('/messages', function (req, res) {
  if(viewMessages == undefined){
    res.send('Go to the <a href="/">hompage</a> first!');
  }
  else{
    res.send(viewMessages);
  }
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
