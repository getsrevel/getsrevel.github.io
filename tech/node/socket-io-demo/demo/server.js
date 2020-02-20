const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

// Set up the server
// process.env.PORT is related to deploying on heroku
const server = app.listen(port);
app.use(express.static('public'));
console.log(`Server is running on http://localhost:${port}`);


const socket = require('socket.io');
const io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log(`New connection ${socket.id}`);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data){
        socket.broadcast.emit('mouse',data);
        // NB! send to all listeners (including source of incomming event)
        // io.emit('some event, theDataToSend)
        console.log(data);
    }
}
