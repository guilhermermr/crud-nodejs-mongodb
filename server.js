const express = require('express')
const app = express()
const bodyParse = require('body-parser')

app.listen(3000, function(){
    console.log("Conectou")
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.set('view engine', 'ejs');

app.use(bodyParse.urlencoded({extended: true}));

app.post('/show', (req, res) => {
    console.log(req.body)
})