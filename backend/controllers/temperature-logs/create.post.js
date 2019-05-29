const { temperature_log } = require('../../models');
const asyncHandler = require('express-async-handler');

/**
 * Function to create temperature log.
 * @param {*} req Express request
 * @param {*} res Express result
 * @returns {void}
 */
const createTemperatureLog = async(req, res) => {
    const { body : { temperature }} = req;
    const log = await temperature_log.create({
      temperature: temperature
    });
    res.json(log);
};

module.exports = asyncHandler(createTemperatureLog)