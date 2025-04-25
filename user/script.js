const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ port: 9000 });

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/user.html');
});

const PORT = 8080;

// WebSocket соединение
let clients = []
wss.on('connection', (client) => {
    console.log('Client connected');
    clients.push(client)

    client.on('message', (message) => {
        const data = JSON.parse(message)
        for(const Client of clients) {
            Client.send(JSON.stringify(data));
        }
        console.log(`Received message: ${message}`);
    });

    client.on('close', () => {
        const index = clients.indexOf(client);
        if (index !== -1) {
            clients.splice(index, 1);
        }

        console.log('Client disconnected');
    });
});

// Запуск сервера
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});