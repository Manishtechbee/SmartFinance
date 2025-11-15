
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();



const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Load users from JSON file
const usersFile = './data/users.json';
const readUsers = () => JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
const saveUsers = (users) => fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

// Login Endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.email === email && u.password === password);
  if(user) {
    res.json({ success: true, message: 'Login Successful!', user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

// Signup Endpoint
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  const users = readUsers();

  if(users.find(u => u.email === email)) {
    return res.status(400).json({ success: false, message: 'Email already exists' });
  }

  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);
  saveUsers(users);
  res.json({ success: true, message: 'User registered successfully', user: newUser });
});








const dotenv = require("dotenv");
dotenv.config();

const OpenAI=require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: message,
    });

    res.json({
      success: true,
      reply: response.output_text
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Chatbot error" });
  }
});














const connectDB = require('./db');

connectDB();

app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));






// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
