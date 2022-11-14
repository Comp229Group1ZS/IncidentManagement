const express = require('express')
const router = express.Router();
const Incident = require('../models/Incident')



router.post('/create', async (req, res) => {
    try {
        const incident = new Incident(req.body)
        const response = await incident.save()
        res.redirect('/view')
    } catch (error) {
        res.status(500).render('error')
    }
})

router.get('/delete', async (req, res) => {
    try {
        const response = await Incident.findOne()
        await Incident.deleteOne({ _id: response._id })
        res.redirect('/view')
    } catch (error) {
        res.status(500).render('error')

    }
})

router.post('/edit/:id', async (req, res) => {
    const _id = req.params.id
    const body = req.body
    try {
        const data = await Incident.replaceOne({ _id }, body)
        res.redirect('/view')

    } catch (error) {
        res.status(500).render('error')

    }
})

module.exports = router