const { temperature_log }  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/', async (req, res) => {
  const logs = await temperature_log.findAll();
  res.json(logs);
});

router.post('/create', async(req, res) => {

});

router.delete('/:id', async(req, res) => {

});

module.exports = router;
