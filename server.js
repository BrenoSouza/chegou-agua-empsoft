const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const port = process.port.ENV || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server is running on port ${port}');
})