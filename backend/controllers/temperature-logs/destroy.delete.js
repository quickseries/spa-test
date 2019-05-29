const { temperature_log, sequelize } = require('../../models');
const asyncHandler = require('express-async-handler');

/**
 * Function to delete temperature log.
 * @param {*} req Express request
 * @param {*} res Express result
 * @returns {void}
 */
const deleteTemperatureLog = async(req, res) => {
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
};

module.exports = asyncHandler(deleteTemperatureLog);