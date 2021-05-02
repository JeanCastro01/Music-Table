var Music = require('./models/music') // passing the music model schema
mongoose = require('mongoose'),


/**
 * 
 * 
 * method to creat the new music entered by the user in the html form
 */
exports.createMusic = async (req, res) => {

    const newmusic = new Music({

     // requesting each inupt field name
        artistname: req.body.artistname, 
        albumname: req.body.albumname,
        yearofrelease: req.body.yearofrelease,
        recordlabelname: req.body.recordlabelname

    });
    try {
        await newmusic.save(); // everything is saved to the database collection
        console.log(newmusic);
    } catch (error) {
        console.log("There was an error with your messsage");
        console.log(error);
    }
    //redirecting to index page, therefore will update table
    res.redirect('musictable');

};



exports.getMusic = async (req, res) => { // getting the music details from database collection 
    Music.find({}, function (err, service) {
        res.render('musictable', {
            Music: service
        });
    });
    //rendering index page, sending the fetched music
};


// method to delete the music from the db collection
exports.deleteMusic = function(req, res) {
  Music.findByIdAndRemove({_id: req.params.id}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.redirect('/musictable')
  }); 
};



// method to get the especific music from the music table collection
exports.getMusic = function (req, res) {
    Music.findOne({ _id: req.params.id }, function (err, musics) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(musics);
    });
};

// method to updating music from the table
exports.updateMusic = function (req, res) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, musics) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(musics);
    });
};




