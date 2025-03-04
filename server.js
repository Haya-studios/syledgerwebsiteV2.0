const express = require('express');
const path = require('path');
const WebSocket = require('ws');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to save info manager data
app.post('/save-info', (req, res) => {
  const info = req.body;
  fs.readFile('info.json', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).send('Error reading file');
    }
    const infos = data ? JSON.parse(data) : [];
    infos.push(info);
    fs.writeFile('info.json', JSON.stringify(infos, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.status(200).send('Info saved');
    });
  });
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Set up WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Broadcast the message to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});