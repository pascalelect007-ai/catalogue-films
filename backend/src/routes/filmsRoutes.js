const express = require('express');
const router = express.Router();
const filmsController = require('../controllers/filmsController');

router.get('/', filmsController.getAllFilms);
router.get('/:id', filmsController.getFilmById);

module.exports = router;