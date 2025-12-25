require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const Quote = require('./models/Quote');

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
    res.send('Welcome to Nimbus Boilers & Heat Pumps');
});

app.get('/quote', (req, res) => {
    res.send('Quote page');
});

app.get('/faq', (req, res) => {
    res.send('FAQ page');
});

app.get('/areas', (req, res) => {
    res.send('Areas page');
});

app.get('/schema', (req, res) => {
    res.send('Schema page');
});

app.post('/contact', async (req, res) => {
    try {
        const { name, email, boilerType, propertySize } = req.body;
        const newQuote = new Quote({ name, email, boilerType, propertySize });
        await newQuote.save();
        res.status(200).json({ message: 'Quote submitted successfully' });
    } catch (error) {
        console.error('Error saving quote:', error);
        res.status(500).json({ message: 'Error submitting quote' });
    }
});

app.get('/sitemap.xml', (req, res) => {
    const baseUrl = process.env.BASE_URL || `http://localhost:${PORT}`;
    const urls = ['/', '/areas-covered', '/faq', '/quote-form', '/blog'];
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `<url><loc>${baseUrl}${url}</loc></url>`).join('\n')}
</urlset>`;
    res.header('Content-Type', 'application/xml');
    res.send(xml);
});

app.get('/robots.txt', (req, res) => {
    const baseUrl = process.env.BASE_URL || `http://localhost:${PORT}`;
    const content = `User-agent: *
Disallow:

Sitemap: ${baseUrl}/sitemap.xml`;
    res.header('Content-Type', 'text/plain');
    res.send(content);
});

// Catch all handler: send back React's index.html file for client-side routing
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});