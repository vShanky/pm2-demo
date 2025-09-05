const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple API endpoint
app.get('/', (req, res) => {
  res.send('🚀 NodeGuardian is alive! PM2 keeps me running.');
});

// Random quote endpoint
app.get('/quote', (req, res) => {
  const quotes = [
    "Stay hungry, stay foolish.",
    "Code. Sleep. Repeat.",
    "Keep calm and Node on.",
    "PM2 got your back!",
    "Self-healing apps FTW!"
  ];
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

// Crash simulation endpoint
app.get('/crash', (req, res) => {
  res.send('💥 Crashing app on purpose...');
  process.exit(1); // Exit process to test PM2 auto-restart
});

app.listen(PORT, () => {
  console.log(`NodeGuardian running on port ${PORT}`);
});
