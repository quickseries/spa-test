const dotenv = require('dotenv');
const fs = require('fs');
const DEFAULT_ENV_FILE = `${__dirname}/../.env`;

/**
 * Function to create a sequelize config object from .env
 * @param {*} path File path
 */
const getConfig = path => {
  const isValidPath = path && fs.existsSync(path);
  const { parsed } = isValidPath ? dotenv.config({ path }) : dotenv.config({ path: DEFAULT_ENV_FILE });
  return {
    username: parsed.DB_USERNAME,
    password: parsed.DB_PASSWORD,
    database: parsed.DB_NAME,
    host: parsed.DB_HOST,
    dialect: parsed.DB_DIALECT,
    pool: {
      max: parsed.DB_POOL_MAX,
      min: parsed.DB_POOL_MIN,
      acquire: parsed.DB_POOL_ACQUIRE,
      idle: parsed.DB_POOL_IDLE,
    },
    logging: !(parsed.DB_LOGGING === 'false'),
  };
};

module.exports = {
  development: getConfig(),
  staging: getConfig(),
  production: getConfig(),
  test: getConfig(),
};
