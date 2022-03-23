const req = require('express/lib/request');
const res = require('express/lib/response');
const payasoModel = require('../models/payaso.model');
const payasoController = {};

payasoController.getPayaso = async (req, res)=> {
    const payaso = await payasoModel.find();
    res.json(payaso);
};

payasoController.addPayaso = async (req, res) => {
    const payaso = new payasoModel(req.body);
    await payaso.save();
    res.json({'status': 'Autpo almacenando existosamente!'});
};

module.exports = payasoController;