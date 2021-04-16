const http = require('http'),
// axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
dotenv = require("dotenv"),
path = require("path");

var app = express();
var port = 8000;
dotenv.config();


app.use(express.static(path.join(__dirname,"view")));

app.get('/',(req,res)=>{res.render('index');});

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});















app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));





























const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));


        