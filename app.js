const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ToDo', { useNewUrlParser: true, useUnifiedTopology: true });