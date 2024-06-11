const mongoose = require('mongoose');


// Create a schema
const schema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
});
module.exports = mongoose.model('Task', schema);