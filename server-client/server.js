const express = require('express')
const http = require('http');
const WebSocket = require('ws');

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

const server = http.createServer(app);

//start our server
server.listen(process.env.PORT || 8999, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});


const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(`Websocket Server sends: ${message}`)
  });

  ws.send('server websocket connected!');

  setInterval(
    // () => ws.send(`${new Date()}`),
    // () => ws.send(`something`),
    () => ws.send(`Websocket Server sends: new data at date ${Date.now()}`),
    1000
  )

  setTimeout(function timeout() {
    // ws.send(Date.now());
    // wss2.send('yep')
    ws.send(`Websocket Server sends: data once at date ${Date.now()}`)
  }, 3000);
});

// const wss2 = new WebSocket('ws://localhost:8080');
// const wss2 = new WebSocket('ws://echo.websocket.org');
// const wss2 = new WebSocket('ws://localhost:8081');
// const wss2 = new WebSocket('ws://localhost:8082');
// const wss2 = new WebSocket('ws://localhost:8999');
// const wss2 = new WebSocket('ws://localhost:3000');
const wss2 = new WebSocket('ws://localhost:3000/echo');

wss2.on('open', function open() {
  wss2.send('client socket send on open');
});

wss2.on('message', function incoming(data) {
  console.log(' server data:', data);
  // setTimeout(function timeout() {
  //   // ws.send(Date.now());
  //   wss2.send('yep')
  // }, 1000);
});