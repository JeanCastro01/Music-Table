const http = require('http'),
    morgan = require('morgan'),
    cors = require('cors'),
    express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    dotenv = require("dotenv"),
    path = require("path"),
    Music = require('./models/music'),
    musicontrollers = require('./music-controller');
    ejs = require('ejs');
    dotenv.config();
    methodOverride = require('method-override')

const app = express() // declaring the app to use  express




app.use(express.static('storage'))
app.use(express.urlencoded({ extended: true })) // this is a middlware package that cames with the express package

app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.json()); // declaring the bodyparser to supprt the json

app.use(require('./routes')); // delaring the app to use routes
app.use(express.static('views')); 


app.use(express.static('public')); // making the express to use public
app.set('view engine', 'ejs'); // puling up my static page

app.set("views", path.resolve(__dirname, "views"));

app.use(methodOverride('_method'))

// Navigation path
app.use(('/index', require('./routes'))
)

app.use('/musictable' , require('./routes'))


var PORT = process.env.PORT || 8000; // declaring the port for heroku and the local port

const dbURI = process.env.DB_URL;

app.listen(PORT, function (err) {
    console.log('Listening on port: ' + PORT);// checking if my database connection is open and if open printing out a message in the console.
// that the server is connected to database. 
});

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));  // Listening to the server on the avaliable port either 5000 or avaliable one. Also show error if their is any.


