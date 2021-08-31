const express = require('express');
const knex = require('../database/db')
const jwt= require('jsonwebtoken')
const router = express.Router();

// router.use(express.json())   

router.get('/home', (req, res) => {
    console.log('hello');
    res.send("hello brother")
})

// update

router.put('/update/:id',(req,res)=>{
    knex('users')
    .where('id',req.params.id)
    .update(req.body)
    .then((data) => {
        console.log({'userdata successfuly updated':data})
        res.send({'userdata successfuly update':data})
    }).catch((err) => {
        res.send(err)
        console.log(err)
    })
})

// delete

router.delete('/delete/:id', (req, res)=>{
    knex('users')
    .where('id',req.params.id)
    .del()
    .then((data)=> {
        console.log({'userdata successfully deleted':data})
        res.send({'userdata successfully deleted':data})
    }).catch((err) => {
        res.send(err)
        console.log(err)
    })
})


router.post('/login',(req,res)=>{
    if(req.body.email ===undefined || req.body.password === undefined){
        console.log({"suggestion":"email and password both are needed"})
    }else
    knex.select('*').from('users').where('email',req.body.email).then((data)=>{
        if(data.length > 0){
            if(data[0].password === req.body.password){
                // var token=({"id":data[0].id, "name":data[0].name, "email":data[0].email, "password":data[0].password},"maapaa")
                const token= jwt.sign({email:req.body.email},"qwertyuiopasdfghjkl")
                res.cookie("key",token);


                console.log({"login success":data,token});
                res.send({"login success":data,});
            }else{res.send({"error":"Password is invalid"});}
        }else{res.send({"Error":"This user doesn't exit...."})}
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;