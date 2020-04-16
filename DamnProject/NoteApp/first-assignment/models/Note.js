var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const NoteSchema = new Schema(
    {
    
           noteIndex: {
                type: Number,
                required: true
            },

            noteAuthor: {
                type: String,
                required: true

            },

            title: {
                type: String,
                required: true

            },

            content: {
                type: String,
                required: true

            }
     });

var Note = mongoose.model('Note',NoteSchema);
module.exports = Note;