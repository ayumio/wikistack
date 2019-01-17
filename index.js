const express = require('express');
const morgan = require('morgan');
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
})