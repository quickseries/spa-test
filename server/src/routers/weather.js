const express = require('express')
const Weather = require('../models/weather')
const router = new express.Router()

router.get('/weather', async (req, res) => {
    try {
        const weather = await Weather.find({}).sort({
            date: 'desc'
        })
        res.send(weather)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/weather/:id', async (req, res) => {
    try {
        const weather = await Weather.findById(req.params.id)

        if (!weather)
            return res.status(404).send()

        res.send(weather)
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/weather', async (req, res) => {
    const weather = new Weather(req.body)

    try {
        await weather.save()
        res.status(201).send(weather)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/weather/:id', async (req, res) => {
    try {
        const weather = await Weather.findByIdAndDelete(req.params.id)

        if (!weather)
            res.status(404).send()

        res.send(weather)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router