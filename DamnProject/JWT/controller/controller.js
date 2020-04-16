const mongoose = require('mongoose');
const User = require('./../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signUpuser = function(req,res){
    bcrypt.hash(req.body.password,10,function(err,encryptedpwd){
        if(!err){
            let userObj = new User({
                email: req.body.email,
                password: encryptedpwd
          });

          User.create(userObj,function(err,user){
              if(!err){
                  res.status(201).json({
                      status: 201,
                      message: 'User Created Successfully',
                      user: user
                  });
                  console.log(user);
              }
              else {
                  res.status(500).send({
                    status: 500,
                    message: 'User Creaion failed'
                  });
              }

          });

        }
        else {
            res.status(500).send({
                status: 500,
                message: 'Error occured during password encryption'
            });
        }
    });
}

module.exports.signInuser =  function(req,res){
    User.findOne({email:req.body.email},(err,user)=>{
        console.log('BABACHODA',req.body.email,user);
        if(!user){
            bcrypt.compare(req.body.password,user.password,(error,result)=>{
                console.log('Dmn ',error);
                if(!error){
                    console.log('Password',req.body.password);
                    console.log('Ass',user.password);
                    let JWTtoken = jwt.sign({
                        email: req.body.email
                    },
                    'secret',
                    {
                        expiresIn: '2h'
                    }
                    )
                    res.status(201).json({
                        status : 201,
                        token: JWTtoken});


                }
                else {
                    res.status(401).json({
                        status: 401,
                        message: 'Password is Invalid',
                        
                    });
                }
            })

        }
        else{
            res.status(500).send({
                status : 500,
                message : 'User Not Found'
                
            });
        }
    })

}

module.exports.executeApi =  function(req,res){
    let token = req.headers['token'];
    jwt.verify(token,'secret',function(err, decryptedToken){
        if(!err){
            User.findOne({email: decryptedToken.email},(err,user)=>{
                res.send(user);

            });

        }
        else{
            res.status(401).send('No User with this token');
        }
        
    });
    

}