var mongoose = require('mongoose');

var musicSchema = new mongoose.Schema({ 
    artistname: String,
    albumname: String,
    yearofrelease: String,
    recordlabelname: String,

},
{ timestamps: true }
);

module.exports = mongoose.model('music', musicSchema);

