var Music = require('./models/music') // passing the music model schema


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
// method to delete a selected music from the bd collection
  exports.deleteMusic = async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Product.findByIdAndDelete(id); // passing the music selected id to the variable 
  
      
      if (!result) {
        throw createError(404, 'Product does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Product id'));
        return;
      }
      next(error);
    }
  }



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




