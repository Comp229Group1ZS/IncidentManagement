const mongoose = require('mongoose')

const IncidentModel = new mongoose.Schema({
    name: String,
    type: String,
    place: String,
    date: String

}, { timestamps: true })

module.exports = mongoose.model('incident', IncidentModel)