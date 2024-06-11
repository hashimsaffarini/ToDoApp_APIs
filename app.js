const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Task = require('./models/tasks');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ToDo', { useNewUrlParser: true, useUnifiedTopology: true });



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

//update
app.get('/update/:id/:title', async (req, res) => {
  try {
    //update a task
    await Task.updateOne({ _id: req.params.id }, { title: req.params.title });
    console.log('Task updated');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
});


app.listen(3000, () => console.log('Express Started!'));