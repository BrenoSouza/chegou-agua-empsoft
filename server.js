const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('emitindo');
    io.emit('notificacao', {type:'new-message', text: 'foiii carai'});    
});

io.on('disconnect', () => {
    console.log('user disconnected');
});

server.listen(port, () => {
    console.log('Server is running on port ${port}');
})