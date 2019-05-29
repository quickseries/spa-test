'use strict';

var expect = require('expect.js');

describe('models/task', function () {
  before(function () {
      return require('../../models').sequelize.sync();
  });

  beforeEach(function () {
    this.TemperatureLog = require('../../models').temperature_log;
  });

  describe('create', function () {
    it('creates a temperature log', function () {
      return this.TemperatureLog.create({ temperature: -14.9 }).then((log) => {
        expect(log.temperature).to.equal(-14.9);
      });
    });
  });
});
