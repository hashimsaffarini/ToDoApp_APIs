const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ToDo', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema
const schema = new mongoose.Schema({ title: String });
const Task = mongoose.model('Task', schema);

//insert
app.get('/create/:title', (req, res) => {
  const firstTask = new Task({ title: req.params.title });
  firstTask.save().then(() => console.log('new Record inserted'));
});

//find/show
app.get('/', async (req, res) => {
  try {
    //get all tasks collection
    const tasks = await Task.find({});
    tasks.forEach(task => {
      console.log(task);
    });
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
});

//delete
app.get('/delete/:id', async (req, res) => {
  try {
    //delete a task
    await Task.deleteOne({ _id: req.params.id });
    console.log('Task deleted');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
});


app.listen(3000, () => console.log('Express Started!'));