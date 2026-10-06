const express = require('express');
const router = express.Router();
const realisateursController = require('../controllers/realisateursController');

router.get('/', realisateursController.getAllRealisateurs);

module.exports = router;