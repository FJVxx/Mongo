const express = require ('express');
const { getPayaso } = require('../controller/payaso.controller');
const router = express.Router();
const payasoController = require('../controller/payaso.controller');
const { model } = require('../database');

router.get('/', payasoController.getPayaso);
router.post('/', payasoController.addPayaso);

module.exports = router;