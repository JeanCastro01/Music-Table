var Music = require('./models/music')

function createMusicTest(){

    console.log("I am in the create music function")

    var artistName = document.getElementById("artistname").nodeValue;

    console.log(artistName);
}


exports.createMusic = function(req, res) { 
    var newmusic = new Music(req.body);
    newmusic.save(function (err, user) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(user); 
});
};

exports.getMusic = function(req, res) {
  Music.find({}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};

exports.getMusic = function(req, res) {
  Music.findOne({_id: req.params.id}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};

exports.updateMusic = function(req, res) {
  User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};

exports.deleteMusic = function(req, res) {
  Music.findByIdAndRemove({_id: req.params.id}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};

