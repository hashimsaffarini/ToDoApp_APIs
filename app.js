const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ToDo', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema
const schema = new mongoose.Schema({ title: String });
const Task = mongoose.model('Task', schema);

//insert
const firstTask = new Task({ title: 'Learn Node.js' });
firstTask.save().then(() => console.log('new Record inserted'));