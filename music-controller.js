var Music = require('./models/music')



exports.createMusic = async (req, res) => {

    const newmusic = new Music({

        artistname: req.body.artistname,
        albumname: req.body.albumname,
        yearofrelease: req.body.yearofrelease,
        recordlabelname: req.body.recordlabelname

    });
    try {
        await newmusic.save();
        console.log(newmusic);
    } catch (error) {
        console.log("There was an error with your messsage");
        console.log(error);
    }
    //redirecting to index page, therefore will update table
    res.redirect('musictable');
    // res.render('musictable');
};



exports.getMusic = async (req, res) => {
    Music.find({}, function (err, service) {
        res.render('musictable', {
            Music: service
        });
    });
    //rendering index page, sending the fetched products
};


exports.getMusic = function (req, res) {
    Music.findOne({ _id: req.params.id }, function (err, musics) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(musics);
    });
};

exports.updateMusic = function (req, res) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, musics) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(musics);
    });
};

exports.deleteMusic = function (req, res) {
    Music.findByIdAndRemove({ _id: req.params.id }, function (err, musics) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(musics);
         res.redirect('index');
    });
};

