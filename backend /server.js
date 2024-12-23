// server.js
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const UserModel = require('./models/User.js');

const app = express();
app.use(cors());
app.use(express.json()); // Use express's built-in JSON parser
app.use(express.urlencoded({ extended: true })); // For parsing form-urlencoded data

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/resumeBuilder", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/Submit', (req, res) => {
  console.log("Received data:", req.body); // Log incoming data
  UserModel.create(req.body)
    .then((user) => {
      console.log("User saved:", user); // Log success
      res.json(user);
    })
    .catch((err) => {
      console.error("Error saving user:", err); // Log error
      res.status(400).json(err);
    });
});



// Start the server
app.listen(3001, () => {
    console.log(`Server is running `);
});
