const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  dato: {
    type: String,
    required: true
  },
  fokus: {
    type: String,
    required: true
  },
  noter: {
    type: String,
    required: true
  }
}, { timestamps: true });


const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
