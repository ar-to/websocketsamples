const express = require('express')
const http = require('http');
const WebSocket = require('ws');

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

const server = http.createServer(app);

//start our server
server.listen(process.env.PORT || 8080, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});


const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(`Websocket Server sends: ${message}`)
  });

  ws.send('server1 websocket connected');
});

const wss2 = new WebSocket.Server({ port: 8081 });

wss2.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received2: %s', message);
    ws.send(`Websocket Server2 sends: ${message}`)
  });

  ws.send('server2 websocket connected');
});

const wss3 = new WebSocket.Server({ port: 8082 });

wss3.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received2: %s', message);
    // ws.send(`Websocket Server2 sends: ${message}`)
  });
  ws.send('server2 websocket connected');

  setTimeout(function timeout() {
    // ws.send(Date.now());
    // wss2.send('yep')
    ws.send(`Websocket Server2 sends: data once at ${Date.now()}`)
  }, 1000);

  setInterval(
    // () => ws.send(`${new Date()}`),
    // () => ws.send(`something`),
    () => ws.send(`Websocket Server2 sends: new data at date ${Date.now()}`),
    1000
  )
});