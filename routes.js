const express = require('express'),
router = express.Router();
const Music = require('./models/music');


// router.get('/musictable', (req, res) => {
//     //    res.sendFile(__dirname + '/views/musictable.ejs')
//     res.render('musictable')
// })

var musicCtrl = require('./music-controller');

router.get('/musictable', (req, res) => {
    
    Music.find({}, function(err, service){
        res.render('musictable', {
           Music: service
       });
     });
    });

router.get('/', function(req, res) {
  res.render('index');
});


router.get('/', function(req, res) {
  res.render('musictable');
});

router.post('/music', musicCtrl.createMusic);

router.get('/music', musicCtrl.getMusic);

router.get('/music/:id', musicCtrl.getMusic);

router.put('/music/:id', musicCtrl.updateMusic);

router.delete('/music/:id', musicCtrl.deleteMusic);

module.exports = router;