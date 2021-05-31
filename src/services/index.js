const users = require('./users/users.service.js');
const sensorDataParser = require('./sensor-data-parser/sensor-data-parser.service.js');
const sensorData = require('./sensor-data/sensor-data.service.js');
const sensorDataCleaned = require('./sensor-data-cleaned/sensor-data-cleaned.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(sensorDataParser);
  app.configure(sensorData);
  app.configure(sensorDataCleaned);
};
