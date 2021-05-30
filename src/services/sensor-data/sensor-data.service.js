// Initializes the `sensor-data` service on path `/sensor-data`
const { SensorData } = require('./sensor-data.class');
const createModel = require('../../models/sensor-data.model');
const hooks = require('./sensor-data.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sensor-data', new SensorData(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sensor-data');

  service.hooks(hooks);
};
