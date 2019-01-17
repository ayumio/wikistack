const express = require('express');
const morgan = require('morgan');
const { db } = require('./models');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded ({extended: false}));

app.get('/', (req,res,next) =>{
    res.send('hello world')
});

let cat = 'meow';

const PORT = 3000;

app.listen(PORT, ()=>{
console.log('listing on Port', PORT)
});

db.authenticate().
then(() => {
  console.log('connected to the database');
})

