
//IMPORTING PACKAGES

const express = require('express');
const fetch = import('node-fetch');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 7600;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));


//SETTING UP DATABASE
const dbURI = `mongodb+srv://EmileKost:Edjk171200@locations.c5xghby.mongodb.net/?retryWrites=true&w=majority`;
const Weather = require('./models/weather.js');

mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true })
    .then((result) => app.listen(port), console.log('Database connected. App listening on: ' + port))
    .catch((err) => console.log('the following error has occured: ' + err))


const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=&appid=3b4a4ee478f17695c6ad24052431fd68`

// RENDERING WEBPAGE'S
app.get('/', (req, res) => {
    const locations = []
    res.render('index', {locations: locations})
})


