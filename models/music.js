// var mongoose = require('mongoose');

// var musicSchema = new mongoose.Schema({ 
//     artistname: String,
//     albumname: String,
//     yearofrelease: String,
//     recordlabelname: String,

// },
// { timestamps: true }
// );

// module.exports = mongoose.model('music', musicSchema);

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


const musicSchema = { 
    artistname: String,
    albumname: String,
    yearofrelease: String,
    recordlabelname: String,

}

const Note = mongoose.model('musics', musicSchema);

app.post("/" , function(req, res) { 
    let newmusic = new Note({
    artistname: req.body.artistname,
    albumname: req.body.albumname,
    yearofrelease: req.body.yearofrelease,
    recordlabelname: req.body.recordlabelname
    });
    
    newmusic.save();
     res.redirect("/")
})