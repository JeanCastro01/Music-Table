const http = require('http'),
// axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
dotenv = require("dotenv");


var app = express();
var port = 8000;
dotenv.config();

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

app.get('/web',(req,res)=>{res.render('index.html');});


const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));


        