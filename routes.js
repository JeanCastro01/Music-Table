const express = require('express'),
router = express.Router();


var userCtrl = require('./user-controller');
router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

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