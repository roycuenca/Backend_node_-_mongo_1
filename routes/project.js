'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });

// home
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);

// projects routes
router.get('/projects', ProjectController.getAll);
router.post('/projects', ProjectController.save);
router.get('/projects/:id?', ProjectController.getById);
router.put('/projects/:id', ProjectController.update);
router.delete('/projects/:id', ProjectController.delete);

// images
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImageFile);

module.exports = router;