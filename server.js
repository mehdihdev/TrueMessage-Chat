const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index.ejs')
})

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})