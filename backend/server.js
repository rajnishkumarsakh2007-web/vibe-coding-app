const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

app.get('/api/languages', (req, res) => {
  res.json({
    languages: ['JavaScript', 'Python', 'Java', 'C++', 'HTML/CSS']
  });
});

app.post('/api/execute', (req, res) => {
  const { code, language } = req.body;
  
  // Placeholder - actual execution logic would go here
  try {
    res.json({
      success: true,
      output: 'Code executed successfully!',
      language
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🎵 Vibe Coding App Backend running on port ${PORT}`);
});

module.exports = app;
