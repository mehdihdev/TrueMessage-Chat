const express = require('express')
const app = express()
const port = process.env.PORT || 80;
const http = require('http').Server(app);
app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.get('/chat', function (req, res) {
  res.render('chat.ejs');
});

app.get('/login', function (req, res) {
  res.render('login.ejs');
});

const server = http.listen(port, function() {
    console.log('listening on *:80');
});
