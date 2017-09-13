var express = require('express')
var app = express()
//app.METHOD(PATH, HANDLER)

//app.use('/static', express.static('public'))
//app.use('/static', express.static(path.join(__dirname, 'public')))
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(express.static('public'))
app.use(express.static('files'))
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
var end, start;

start = new Date();
for (var i = 0; i < 10000000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
app.use(requestTime)
console.log('LOGGED')
var mw = require('./my-middleware.js')

app.use(mw({ option1: '1', option2: '2' }))
app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.get('/', function (req, res) {
  res.send('Hello!')
  console.log('GET')
})
app.post('/', function (req, res) {
  res.send('Got a POST request')
  console.log('POSTED')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
  console.log('PUT')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
  console.log('deleted')
})
app.listen(3000)