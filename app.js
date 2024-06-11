const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ToDo', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema
const schema = new mongoose.Schema({ title: String });
const Task = mongoose.model('Task', schema);

//insert
app.get('/create', (req, res) => {
  const firstTask = new Task({ title: 'Writing function of express' });
  firstTask.save().then(() => console.log('new Record inserted'));
});



app.listen(3000, () => console.log('Express Started!'));