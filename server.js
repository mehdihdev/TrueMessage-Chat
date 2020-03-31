const express = require('express')
const app = express()
const port = process.env.PORT || 80;
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index.ejs')
})

app.listen(port, function () {
  console.log('Example app listening on port 80!')
})