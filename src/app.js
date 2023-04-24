require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const cartRoute = require('./routes/cart.Route');
const detailProductRoute = require('./routes/detailProduct.Route');
const homeRoute = require('./routes/home.Route');
const loginRoute = require('./routes/login.Route');
const registerRoute = require('./routes/register.Route');

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use('/',express.static(path.join(__dirname + '/public')));

app.use('/', cartRoute);
app.use('/:id', detailProductRoute);
app.use('/', homeRoute); 
app.use('/', loginRoute);
app.use('/', registerRoute);

app.listen(port,(err) =>{
    if(err){
        console.log('Error en el Servidor :', port)
    } else {
        console.log('Servidor escuchando en puerto', port)
    }
});