'use strict';

var app      = require('../../app');
var Bluebird = require('bluebird');
var request  = require('supertest');

describe('Temerature log creation', function () {
  before(function () {
      return require('../../models').sequelize.sync();
  });

  beforeEach(function () {
    this.models = require('../../models');

    return Bluebird.all([
      this.models.temperature_log.destroy({ truncate: true }),
    ]);
  });

  it('loads correctly', function (done) {
    request(app).get('/api/temperature-logs').expect(200, done);
  });

});
