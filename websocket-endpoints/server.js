var express = require('express');
var app = express();
const http = require('http');
const server = http.createServer(app);
var expressWs = require('express-ws')(app, server);
const WebSocket = require('ws');
 
app.use(function (req, res, next) {
  console.log('middleware');
  req.testing = 'testing';
  return next();
});
 
app.get('/', function(req, res, next){
  console.log('get route', req.testing);
  res.end();
});
 
app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    console.log('received from request: ',msg);
    ws.send('websocket server message for /')
  });
  console.log('socket', req.testing);
});

app.ws('/echo', function(ws, req) {
  // console.log('req for /echo:', req)//object
  ws.on('message', function(msg) {
    ws.send(`Received request for /echo: ${msg}`);
  })
  setTimeout(function timeout() {
    // ws.send(Date.now());
    wss2.send(`server sends message at date ${Date.now()}`)
  }, 1000);
  console.log('/echo socket', req.method);
})
 
// app.listen(3000);


//start our server
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});



// client
const wss2 = new WebSocket('ws://localhost:3000/echo');

wss2.on('open', function open() {
  wss2.send('client socket send on open');
});

wss2.on('message', function incoming(data) {
  console.log(' server data:', data);
  // setTimeout(function timeout() {
  //   // ws.send(Date.now());
  //   wss2.send(`client sends message at date ${Date.now()}`)
  // }, 1000);
});