var express = require('express')
var app = express()
//app.METHOD(PATH, HANDLER)

//app.use('/static', express.static('public'))
//app.use('/static', express.static(path.join(__dirname, 'public')))
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}


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
app.use(express.static('public'))
app.use(express.static('files'))
app.get('/', function (req, res) {
  res.sendFile('LED_Control_test_2.html')
})
//app.use('/static', express.static(path.join(__dirname, 'public')))
app.listen(3000)