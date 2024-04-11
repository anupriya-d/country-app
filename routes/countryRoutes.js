const express = require('express');
const router = express.Router();
const { getData, getCountryData } = require('../controllers/countryController');

router.get('/', (req, res) => getData(req, res));

//for get details by country name
router.get('/:countryName', (req, res) => getCountryData(req, res));

module.exports = router;