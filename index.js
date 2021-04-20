const http = require('http'),
  
    morgan = require('morgan'),
    cors = require('cors'),
    express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    dotenv = require("dotenv"),
    path = require("path"),
    Music = require('./models/music');
    upload = require('./middleware/multer_hundler'),
    ejs = require('ejs');


port = process.env.PORT || 8000;
dotenv.config();

const app = express()

app.use(express.static(root))
app.use(express.static('storage'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(require('./routes'));



app.use(express.static(path.join(__dirname, "view")));



app.set('view engine', 'ejs');



app.use('/update', upload.single('image'), (req, res) => {

    let musicupload = new Music()
    musicupload.artistname = req.body.artistname,
    musicupload.albumname = req.body.albumname,
    musicupload.yearofrelease = req.body.yearofrelease,
    musicupload.recordlabelname = req.body.recordlabelname,
    musicupload.file = req.file.filename

    musicupload.save(err => {
        if (err)
            return res.sendStatus(400);
          res.redirect('/')
    })
})



app.get('/', (req, res) => {

  Music.find({}, function(musics) {

         res.render('index', {
            
            musiclist : musics

         })

  })

      


});







const dbURI = process.env.DB_URL;

app.listen(port, function (err) {
    console.log('Listening on port: ' + port);
});

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));


