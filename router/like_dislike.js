const express = require('express');
const knex = require('../database/db')
// const jwt= require('jsonwebtoken')
const router = express.Router();


router.post('/dataInsert',(req, res)=> {
    console.log(req.body);
    knex('LikeDislike')
    .insert(req.body)
    .then((data) => {
        console.log('like successfuly updated')
        res.send('like successfuly updated')
    }).catch((err) => {
        res.send(err)
        console.log(err)
    })
})




router.put('/like/:id',(req, res)=> {
    console.log(req.body);
    knex('LikeDislike')
    .where("user_id",req.params.id)
    .update({"like":req.body.like,"dislike":false})
    .then((data) => {
        console.log('like successfuly updated')
        res.send('like successfuly updated')
    }).catch((err) => {
        res.send(err)
        console.log(err)
    })
})


router.put('/dislike/:id',(req, res)=> {
    console.log(req.body);
    knex('LikeDislike')
    .where("user_id",req.params.id)
    .update({"dislike":req.body.dislike,"like":false})
    .then((data) => {
        console.log('like successfuly updated')
        res.send('like successfuly updated')
    }).catch((err) => {
        res.send(err)
        console.log(err)
    })
})
module.exports =router

