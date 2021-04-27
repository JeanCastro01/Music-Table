var Music = require('./models/music')




exports.createMusic = function(req, res) { 
    var newmusic = new Note({
    artistname: req.body.artistname,
    albumname: req.body.albumname,
    yearofrelease: req.body.yearofrelease,
    recordlabelname: req.body.recordlabelname
    })
    
    newmusic.save(function (err, music) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(music); 
        console.log("foi salvado")
});
};

exports.getMusic = function(req, res) {
  Music.find({}, function (err, musics) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(musics);
  }); 
};




exports.getMusic = function(req, res) {
  Music.findOne({_id: req.params.id}, function (err, musics) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(musics);
  }); 
};

exports.updateMusic = function(req, res) {
  User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, musics) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(musics);
  }); 
};

exports.deleteMusic = function(req, res) {
  Music.findByIdAndRemove({_id: req.params.id}, function (err, musics) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(musics);
  }); 
};

