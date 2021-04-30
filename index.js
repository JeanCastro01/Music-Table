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


port = process.env.PORT || 8000;
dotenv.config();

const app = express()


app.use(express.static('storage'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.json());

app.use(require('./routes'));
app.use(express.static('views'));


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set("views", path.resolve(__dirname, "views"));


// Navigation
app.use(('/index', require('./routes'))
)





const dbURI = process.env.DB_URL;

app.listen(port, function (err) {
    console.log('Listening on port: ' + port);
});

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));


