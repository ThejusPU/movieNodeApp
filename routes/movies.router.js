var express = require('express');
var router = express.Router();
const movieController = require('../controllers/movie.controller');

router.get('/search', movieController.searchMovie);
router.get('/movie', movieController.movieDetails);

module.exports = router;
