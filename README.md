## WeatherApp

### Introduction
Welcome to my WeatherApp project. I am currently developing this mobile app with Nodejs, the Openweather api and the database service mongodb.
I just completed setting up the database for later use. Today I will be working on adding diffrent locations to the database and also creating 
and styling the home (landing) page.

### Setting up the database
For the database I have used the service Mongodb Atlas combined with Mongoose so that I can manipulate data more easily and effective. 
I am going to use the database for storing the users locations so that they can always see the weather quickly on their mobile phone.

#### Code for setting up the database:
````
const dbURI = `mongodb+srv://EmileKost:<password>@locations.c5xghby.mongodb.net/?retryWrites=true&w=majority`;
const Weather = require('./models/weather.js');

mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true })
    .then((result) => app.listen(port), console.log('Database connected. App listening on: ' + port))
    .catch((err) => console.log('the following error has occured: ' + err))
 ````
