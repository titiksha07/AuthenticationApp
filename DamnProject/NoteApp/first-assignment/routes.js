const express = require('express');
var routes = express.Router();
const controller = require('./controller')

//making calls 

//Create Note

routes.post('/apinote/note',controller.createNote);

//Get Note

routes.get('/apinote/notes',controller.getNote);

//Find Note By ID

routes.get('/apinote/notes/:_id',controller.getNoteById);

//Update Note

routes.put('/apinote/notes/:_id',controller.updateNote);

//Delete Note

routes.delete('/apinote/notes/:_id',controller.deleteNote);

module.exports = routes;