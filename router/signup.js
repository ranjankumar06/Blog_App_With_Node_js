const express = require('express');
const knex = require('../database/db')
const app = express()
const route = express.Router()
route.use(express.json())   

route.post('/Register/user', (req, res) => {
    if(req.body.email===undefined || req.body.password===undefined ){
        console.log({"suggestion":"email and password both are require"})
    }else
    knex.select("*").from('users').where({ 'email': req.body.email }).then((data) => {
        if (data.length < 1) {
            knex("users")
                .insert(req.body)
                .then((data) => {
                    res.send(data)
                }).catch((err) => {
                    console.log("err");
                    res.send("err")
                })
        }else{

            console.log("already exists");
            res.send("already exists")
        }

    })
})


module.exports = route;



