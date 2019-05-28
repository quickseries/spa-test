'use strict';

var app      = require('../../app');
var Bluebird = require('bluebird');
var request  = require('supertest');

describe('user creation page', function () {
  before(function () {
      return require('../../models').sequelize.sync();
  });

  beforeEach(function () {
    this.models = require('../../models');

    return Bluebird.all([
      this.models.TemperatureLog.destroy({ truncate: true }),
    ]);
  });

  it('loads correctly', function (done) {
    request(app).get('/temperature-logs').expect(200, done);
  });

  it('lists a user if there is one', function (done) {
    this.models.TemperatureLog.create({ temperature: '-14.9 °c' }).then(function () {
      request(app).get('/temperature-logs').expect(/-14.9 °c/, done);
    })
  });

});
