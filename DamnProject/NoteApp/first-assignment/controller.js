const mongoose = require('mongoose');
const Note = require('./models/Note');

module.exports.createNote=(req,res)=>{
       console.log("Inside Post");
         let noteObj = new Note({
                noteIndex: req.body.index,
                noteAuthor: req.body.author,
                title: req.body.title,
                content: req.body.content
          });
          console.log('Req Body', req.body);

          Note.create(noteObj,function(err,note){
              if(!err){
                  res.status(201).json({
                      status: 201,
                      message: 'Note Created Successfully',
                      note: note
                  });
                  console.log(note);
              }
              else {
                  res.status(500).send({
                    status: 500,
                    message: 'Note Creaion failed'
                  });
              }

          });

        }
      
       


module.exports.getNote = (req,res)=>{

    var query = Note.find({});
    query.exec((err,doc)=>{
      if(!err){
         res.status(201).send(doc);
       }
    });

}




module.exports.getNoteById = (req,res)=>{

var query = Note.findById({'noteIndex':req.params.noteIndex});
query.exec((err,result)=>{
        res.send(result);
    }
);
}



module.exports.updateNote= (req,res)=>{

    const query = Note.findByIdAndUpdate({'noteIndex':req.params.noteIndex},{$set:{title:'Edited'},$set:{content:'Edited Content'}},(req,result)=>{
        res.send(`Title:${result.title}   Content:${result.content}`).status(201);
       // res.send(`Content:${result.content}`).status(201);
    });
    

}

module.exports.deleteNote = (req,res)=>{

    const query =  Note.findByIdAndDelete({'_id':req.params._id},(req,result)=>{
        res.send('Note deleted successfully');
    })

}