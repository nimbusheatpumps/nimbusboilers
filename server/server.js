require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const Sentry = require('@sentry/node');

Sentry.init({ dsn: process.env.SENTRY_BACKEND_DSN, });

console.log('Attempting to connect to MongoDB with URI:', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000
})
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const Quote = require('./models/Quote');
const User = require('./models/User');

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

// Passport configuration
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const user = await User.findById(jwt_payload.id);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (err) {
    return done(err, false);
  }
}));

app.use(passport.initialize());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../client/build')));

// Auth routes
app.post('/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const user = new User({ name, email, password });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

app.get('/', (req, res) => {
    res.send('Welcome to Nimbus Boilers & Heat Pumps');
});

app.get('/test-error', (req, res) => {
    throw new Error('Test backend error');
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
        console.log('Mongoose connection readyState:', mongoose.connection.readyState);
        const { name, email, boilerType, propertySize } = req.body;
        const newQuote = new Quote({ name, email, boilerType, propertySize });
        await newQuote.save();

        // Send confirmation email
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Quote Request Confirmation - Nimbus Boilers & Heat Pumps',
            html: `
                <h2>Thank you for your quote request!</h2>
                <p>Dear ${name},</p>
                <p>We have received your quote request for a ${boilerType} boiler installation.</p>
                <p><strong>Details submitted:</strong></p>
                <ul>
                    <li>Name: ${name}</li>
                    <li>Email: ${email}</li>
                    <li>Boiler Type: ${boilerType}</li>
                    <li>Property Size: ${propertySize}</li>
                </ul>
                <p>Our team will review your request and get back to you within 24 hours with a detailed quote.</p>
                <p>Best regards,<br>Nimbus Boilers & Heat Pumps Team</p>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent to:', email);

        res.status(200).json({ message: 'Quote submitted successfully' });
    } catch (error) {
        console.error('Error saving quote or sending email:', error);
        res.status(500).json({ message: 'Error submitting quote' });
    }
});

app.get('/api/quotes', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const quotes = await Quote.find();
        res.json(quotes);
    } catch (error) {
        console.error('Error retrieving quotes:', error);
        res.status(500).json({ message: 'Error retrieving quotes' });
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

Sentry.setupExpressErrorHandler(app);

// Catch all handler: send back React's index.html file for client-side routing
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('uncaughtException', (err) => { Sentry.captureException(err); console.error('Uncaught Exception:', err); process.exit(1); });

process.on('unhandledRejection', (reason, promise) => { Sentry.captureException(reason); console.error('Unhandled Rejection at:', promise, 'reason:', reason); });