const temperatureLogApiHandler = require("../controllers/temperature-logs");
const express = require('express');

// Route types constants
const ROUTE_TYPE = {
  GET: 'get',
  PUT: 'put',
  POST: 'post',
  DELETE: 'delete',
};

// Array of routes in the entire application
const routes = [
  { method: ROUTE_TYPE.GET, url: "/temperature-logs", handler: temperatureLogApiHandler.getAllTemperatureLogs },
  { method: ROUTE_TYPE.POST, url: "/temperature-log", handler: temperatureLogApiHandler.createTemperatureLog },
  { method: ROUTE_TYPE.DELETE, url: "/temperature-log/:id", handler: temperatureLogApiHandler.deleteTemperatureLog }
];

// registers route with express
const bindRoutes = (app, baseUrl) => {
  const router = express.Router();
  routes.forEach((route) => {
    router[route.method](route.url, route.handler);
  });
  app.use(baseUrl, router);
}

module.exports = { bindRoutes };