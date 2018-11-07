const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const Client = require('./models/clientModel')

const SERVER_PORT = 3030;

mongoose.connect('mongodb://localhost/clientsDB', ()=> {
    console.log("DB connected");
})

// const data = require('./src/data.json')
// data.forEach(client => {
//    let c = new Client(client)
//    c.save()
// });

const clientsApi = require('./routes/clientsApi')
const actionsApi = require('./routes/actionsApi')

const app = express()
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
})

app.use('/', clientsApi)
app.use('/', actionsApi)


app.listen(SERVER_PORT, ()=> {
    console.log(`Server running on port ${SERVER_PORT}`);
});