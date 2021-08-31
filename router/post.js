const express = require('express');
const knex = require('../database/db')
// const jwt= require('jsonwebtoken')
const router = express.Router();

router.get('/getallblog',(req, res)=>{
    knex('blogs')
    .select("*")
    .from('blogs')
    .then((data) => {
        console.log({"userdata":data})
        res.send({"userdata":data})
    }).catch((err) => {
        res.send(err)
        console.log(err)
    })
})



router.get('/get/:id',(req, res)=>{
    knex('blogs')
    .select("*")
    .from("blogs")
    .where("id",req.params.id)
    .then((data) => {
        console.log({"userdata":data})
        res.send({"userdata":data})
    }).catch((err)=>{
        res.send(err)
        console.log(err)
    })
})

router.post('/postblog',(req, res)=>{
    knex('blogs')
    .insert(req.body)
    .then((data) => {
        console.log({"userdata":data})
        res.send({"userdata":data})
    }).catch((err)=>{
        res.send(err)
        console.log(err)
    })
})

router.put('/update/:id',(req, res)=>{
    knex('blogs')
    .where('id',req.params.id)
    .update(req.body)
    .then((data) => {
        console.log({"userdata":data})
        res.send({"userdata":data})
    }).catch((err)=>{
        res.send(err)
        console.log(err)
    })
})



router.delete('/delete/:id',(req, res)=>{
    knex('blogs')
    .where('id',req.params.id)
    .del()
    .then((data) => {
        console.log({"userdata":data})
        res.send({"userdata":data})
    }).catch((err)=>{
        res.send(err)
        console.log(err)
    })
})







module.exports =router