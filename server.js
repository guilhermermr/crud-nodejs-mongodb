const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const MongoClient = require('mongodb').MongoClient 

const uri = 'mongodb+srv://crud:crud123@cluster.jn4xhtl.mongodb.net/?retryWrites=true&w=majority'

await = MongoClient.connect(uri, (err, client) => {
    if(err) return console.log(err)
    db = client.db('cluster')

    app.listen(3000, function(){
        console.log("Conectou")
    })
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.set('view engine', 'ejs');

app.use(bodyParse.urlencoded({extended: true}));


app.post('/show', (req, res) => {
    db.connect('data').save(req.body, (err, result) => {
        if (err){
            return console.log(err)
        }

        console.log('Salvo no banco de dados');
        res.redirect('/')
    })
})
