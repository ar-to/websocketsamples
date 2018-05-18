# Websockets Tests
Repo hopes to test websockets by examples.

Table of Contents
- [Treehouse Tutorial](#treehouse-tutorial)
- [Medium Tutorial](#medium-tutorial)
- [Servers](#servers)


## Getting Started

Install a websocket client extension for chrome: [Smart Websocket Client](https://chrome.google.com/webstore/detail/smart-websocket-client/omalebghpgejjiaoknljcfmglgbpocdp/related?hl=en-US)
Move into a folder and run server

## Treehouse Tutorial

start server
```
cd treehouse-tutorial
node server.js
```
Does not require the use of the websocket client extension because it loads a website that acts as the client and connects to an external websocket.

[tutorial url](http://blog.teamtreehouse.com/an-introduction-to-websockets)
[tutorial codepen](https://codepen.io/matt-west/pen/tHlBb)

Tutorial goes over using websockets in the client. This repo refactors the setup into OOP structure and adds a few features:

- Disable on open/close clicks
- reinitialize the connection on open click

## Medium Tutorial

[tutorial url](https://medium.com/factory-mind/websocket-node-js-express-step-by-step-using-typescript-725114ad5fe4)

Tutorial runs a websocket server in the same port as the express server. The tutorial uses typescript and in this repo it was not used but the typescript code is commented.

```
cd medium-tutorial
node server.js
```
Open websocket client extension and enter `ws://localhost:8999/` and test sending messages.

## 2 Servers

This directory serves two websocket servers. One uses the same port as the express server (8080) and the other is 8081.

```
cd ws-servers
node servers.js
```
Open websocket client extension and enter `ws://localhost:8080/` and test sending messages.
Open a new websocket client extension tab by clicking the icon again and enter `ws://localhost:8081/` and test sending messages.

Reference tutorial and repo that were helpful:
[tutorial](https://hackernoon.com/nodejs-web-socket-example-tutorial-send-message-connect-express-set-up-easy-step-30347a2c5535)
[repo](https://github.com/wahengchang/nodejs-websocket-example)