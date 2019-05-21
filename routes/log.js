const express = require('express');
const logRouter = express.Router();

const {
  getAllTemperatureLogs,
  createTemperatureMlab,
  deleteTemperatureEntry
} = require('../utils/log');

// @route GET api/log/all
// @desc return all temperature logs 
// @access Public
logRouter.get('/all',(req,res)=>{
  getAllTemperatureLogs()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).send(err))
});

// @route post api/log/temperature
// @desc  create temperature route
// @access Public
logRouter.post('/temperature',(req,res)=>{
  const {temperature, date,logid} = req.body;
  createTemperatureMlab(temperature,date,logid)
    .then(temperatureLog=>res.json(temperatureLog) ) 
    .catch(err=>res.status(500).send(err))
});

// @route delete api/log/temperature
// @desc  delete temperature route
// @access Public
logRouter.delete('/temperature/:id',(req,res)=>{
  deleteTemperatureEntry(req.params.id)
    .then(temperatureLog=>res.json(temperatureLog))
    .catch(err=>res.status(500).send(err))
});

module.exports = logRouter;
