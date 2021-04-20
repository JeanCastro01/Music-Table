const express = require('express'),
router = express.Router();

module.exports.UPLOAD_PATH = "uploads";

var multer = require("multer");
var upload = multer({ dest: module.exports.UPLOAD_PATH});


var imageCtrl = require('./image-controller');
router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);


var musicCtrl = require('./music-controller');
router.post('/music', musicCtrl.createMusic);
router.get('/music', musicCtrl.getMusic);
router.get('/music/:id', musicCtrl.getMusic);
router.put('/music/:id', musicCtrl.updateMusic);
router.delete('/music/:id', musicCtrl.deleteMusic);

module.exports = router;