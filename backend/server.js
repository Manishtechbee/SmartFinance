
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const User = require("./models/User");


const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Load users from JSON file
const usersFile = './data/users.json';
const readUsers = () => JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
const saveUsers = (users) => fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

// Login Endpoint
// Login Endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ success: false, message: "Invalid email or password" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ success: false, message: "Invalid email or password" });

    // Set loggedIn to true
    user.loggedin = true;
    await user.save();

    res.json({
      success: true,
      message: "Login Successful!",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        loggedIn: user.loggedIn,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


app.post("/api/logout", async (req, res) => {
  const { userId } = req.body; // or get from token/session

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    user.loggedin = false;
    await user.save();

    res.json({ success: true, message: "Logout successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});



// Signup Endpoint
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    // Create new user
    const newUser = await User.create({ name, email, password });
    res.status(201).json({ success: true, message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
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














const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoute");

connectDB();

app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));







// Routes
app.use("/api/users", userRoutes);










const accountRoutes = require("./routes/accounts");
const transactionRoutes = require("./routes/transactions");

app.use("/api/accounts", accountRoutes);
app.use("/api/transactions", transactionRoutes);






// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
