'use strict';

var expect = require('expect.js');

describe('models/task', function () {
  before(function () {
      return require('../../models').sequelize.sync();
  });

  beforeEach(function () {
    this.TemperatureLog = require('../../models').TemperatureLog;
  });

  describe('create', function () {
    it('creates a temperature log', function () {
      return this.TemperatureLog.create({ temperature: '-14.9 °c' }).then(function (log) {
        expect(log.temperature).to.equal('-14.9 °c');
      });
    });
  });
});
