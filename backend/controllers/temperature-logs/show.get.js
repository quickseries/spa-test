const { temperature_log } = require('../../models');
const asyncHandler = require('express-async-handler');

/**
 * Function to get all temperature logs.
 * @param {*} req Express request
 * @param {*} res Express result
 * @returns {void}
 */
const getAllTemperatureLogs = async (req, res) => {
    const logs = await temperature_log.findAll();
    res.json(logs);
};

module.exports = asyncHandler(getAllTemperatureLogs);