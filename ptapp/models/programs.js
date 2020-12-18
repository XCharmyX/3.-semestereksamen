const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const programSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
