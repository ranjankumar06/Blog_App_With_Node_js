
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kumer@123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'Kumer@123',
      database : 'blogs'
    }
  })

knex.schema.createTable('users', function (table) {
    table.increments().primary();
    table.string('name');
    table.string("email")
    table.string("password")
  }).then((data) => {
    console.log("Successfully created table")
}).catch((err) => {
    console.log("already exists")
});

knex.schema.createTable("use",function (table) {
    table.increments('id').primary();
    table.string("name")
    table.string("email")
    table.string("password")
}).then((data)=>{
    console.log("Successfully created table")
}).catch((err)=>{
    console.log("already exists")
});


knex.schema.createTable("LikeDislike",(table)=>{
    table.increments('id').primary()
    table.integer('user_id')
    table.boolean('like').notNullable();
    table.boolean('dislike').notNullable();
}).then((data)=>{
    console.log("Successfully created table")
}).catch((err)=>{
    console.log("already created table..")
});


knex.schema.createTable("blogs",(table)=>{
    table.increments('id').primary()
    table.string('title', 255).notNullable()
    table.string('description', 255).notNullable()
    table.string('author', 255).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
}).then((data)=>{
    console.log("Successfully created table")
}).catch((err)=>{
    console.log("already created table..")
});



module.exports =knex





