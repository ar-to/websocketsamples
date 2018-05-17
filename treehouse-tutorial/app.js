window.onload = function () {

  // Get references to elements on the page.
  var form = document.getElementById('message-form');
  var messageField = document.getElementById('message');
  var messagesList = document.getElementById('messages');
  var socketStatus = document.getElementById('status');
  var openBtn = document.getElementById('open');
  var closeBtn = document.getElementById('close');
  var disableBtn = document.getElementById('disable');

  // The rest of the code in this tutorial will go here...

  // Create a new WebSocket.
  // Open connection when page loaded
  // var socket = new WebSocket('ws://echo.websocket.org');
  var socket;

  // Show a connected message when the WebSocket is opened.
  // socket.onopen = function (event) {
  //   socketStatus.innerHTML = 'Connected to: ' + event.currentTarget.url;
  //   socketStatus.className = 'open';
  // };
  var App = {
    socket: null,
    init: function () {
      return App.initWebsocket();
    },
    initWebsocket: function () {
      return setTimeout(function () {
        socket = new WebSocket('ws://echo.websocket.org');
        App.error();
        App.message();
        App.close();
        App.disableBtn();
        return App.open();
      }, 500);
    },
    disableBtn: function () {
      return openBtn.setAttribute("disabled", "");
    },
    enableBtn: function () {
      return openBtn.removeAttribute("disabled");
    },
    // Show a connected message when the WebSocket is opened.
    open: function () {
      socket.onopen = function (event) {
        socketStatus.innerHTML = 'Connected to: ' + event.currentTarget.url;
        socketStatus.className = 'open';
      };
    },
    // Handle any errors that occur.
    error: function () {
      socket.onerror = function (error) {
        console.log('WebSocket Error: ' + error);
      };
    },
    // Show a disconnected message when the WebSocket is closed.
    close: function () {
      socket.onclose = function (event) {
        socketStatus.innerHTML = 'Disconnected from WebSocket.';
        socketStatus.className = 'closed';
        App.enableBtn();
      };
    },
    // Handle messages sent by the server.
    message: function () {
      socket.onmessage = function (event) {
        var message = event.data;
        messagesList.innerHTML += '<li class="received"><span>Received:</span>' +
          message + '</li>';
      };
    },
  }

  // initialize websocket connection on page load
  App.init();


  // Open connection again via button
  openBtn.onclick = function (e) {
    e.preventDefault();
    console.log('ttt')
    // connect to server websocket
    // socket = new WebSocket('ws://echo.websocket.org');
    App.init();
    return false;
  };

  // Send a message when the form is submitted.
  form.onsubmit = function (e) {
    e.preventDefault();

    // Retrieve the message from the textarea.
    var message = messageField.value;

    // Send the message through the WebSocket.
    socket.send(message);

    // Add the message to the messages list.
    messagesList.innerHTML += '<li class="sent"><span>Sent:</span>' + message +
      '</li>';

    // Clear out the message field.
    messageField.value = '';

    return false;
  };

  // Close the WebSocket connection when the close button is clicked.
  closeBtn.onclick = function (e) {
    e.preventDefault();

    // Close the WebSocket.
    socket.close();

    return false;
  };
};

// (function () {
//   window.onload = function () {
//   // $(window).load(function () {
//     App.init();
//   };
// })();