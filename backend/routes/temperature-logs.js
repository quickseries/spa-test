const { temperature_log, sequelize } = require('../models');
const asyncHandler = require('express-async-handler')
const express = require('express');
const router  = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const logs = await temperature_log.findAll();
  res.json(logs);
}));

router.post('/', asyncHandler(async(req, res) => {
  const { body : { temperature }} = req;
  const log = await temperature_log.create({
    temperature: temperature
  });
  res.json(log);
}));

router.delete('/:id', asyncHandler(async(req, res) => {
  const { params : { id }} = req;
  const transaction = await sequelize.transaction(async t => {
    const options = { transaction: t };
    const found = await temperature_log.findOne({ where: { id: id }, ...options });
    if(found) {
      await temperature_log.destroy({
        where: {
          id: id
        },
        ...options
      });
      return "Temperature deleted successfully.";
    }
    throw new Error("Temperature does not exist.");
  });
  res.json({ message: transaction});
}));

module.exports = router;
