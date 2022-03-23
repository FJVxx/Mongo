const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const PayasoSchema = new Schema({
    name: {type: String, required: true},
    model: {type: String, required: true},
    act: {type: Number, required: true},
    type: {type: String, required: true}
});

module.exports = mongoose.model('payaso', PayasoSchema);