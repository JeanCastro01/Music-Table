const express = require('express'),
router = express.Router();
const Music = require('./models/music');
var musicCtrl = require('./music-controller');




router.get('/musictable', (req, res) => {
    
    Music.find({}, function(err, service){
        res.render('musictable', {
           Music: service
       });
     });
    });

router.get('/', (req, res) =>{
    Music.findByIdAndRemove({ _id: req.params.id }, function (err, musics) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(musics);
    });
})


router.get('/', function(req, res) {
  res.render('index');
});


router.get('/', function(req, res) {
  res.render('musictable');
});

router.post('/music', musicCtrl.createMusic);

router.get('/music', musicCtrl.getMusic);

router.get('/music/:_id', musicCtrl.getMusic);

router.put('/music/:_id', musicCtrl.updateMusic);

router.delete('/music/:_id', musicCtrl.deleteMusic);

module.exports = router;