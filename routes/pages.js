const express = require('express')
const router = express.Router();
const Incident = require('../models/Incident')

router.get('/', (req, res) => {
    res.render('index')
})
router.get('/view', async (req, res) => {
    const allIncidents = await Incident.find()


    res.render('view', {
        title: 'All Records',
        data: allIncidents

    })
})
router.get('/create', (req, res) => {
    res.render('create')
})

router.get('/edit', async (req, res) => {
    const allIncidents = await Incident.find()


    res.render('edit', {
        title: 'All Records',
        data: allIncidents

    })
})
module.exports = router