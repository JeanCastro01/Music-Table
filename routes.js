const express = require('express'), // getting the express package
router = express.Router(); // declaring the router express
const Music = require('./models/music'); // getting the model
var musicCtrl = require('./music-controller');// getting the music controller to link to the function



// difining the route musictable new and rendering the static page. And a form is used to pass the user input to the api.
router.get('/musictable', (req, res) => {
    
    Music.find({}, function(err, service){ // finding the music and pu them in a array
        res.render('musictable', {
           Music: service  // get all the music in the variable
       });
     });
    });


router.get('/', function(req, res) {
  res.render('index'); // render the index page 
});


router.get('/', function(req, res) {
  res.render('musictable'); // render the musictable page 
});


/**
 * 
 */
router.post('/music', musicCtrl.createMusic); // method frm controller to creat a new music details

router.get('/music', musicCtrl.getMusic); // method from controller to get all music frm the DB collection

router.get('/music/:_id', musicCtrl.getMusic); // method from the controller to get specific music by using ID

router.put('/music/:_id', musicCtrl.updateMusic); // method from the controller to update the row of the table music by passing a ID

router.delete('/music/:id', musicCtrl.deleteMusic); // method from controller to delete the music by using the ID

module.exports = router;
