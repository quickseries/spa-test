'use strict';

var expect = require('expect.js');

describe('models/index', function () {
  it('returns the temperature log model', function () {
    var models = require('../../models');
    expect(models.TemperatureLog).to.be.ok();
  });
});
