const mongoose = require('mongoose');

const { Schema } = mongoose;

const exampleSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Example = mongoose.model('Example', exampleSchema);

module.exports = Example;
