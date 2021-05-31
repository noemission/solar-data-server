// Initializes the `sensor-data-cleaned` service on path `/sensor-data-cleaned`
const { SensorDataCleaned } = require('./sensor-data-cleaned.class');
const createModel = require('../../models/sensor-data-cleaned.model');
const hooks = require('./sensor-data-cleaned.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sensor-data-cleaned', new SensorDataCleaned(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sensor-data-cleaned');

  service.hooks(hooks);
};
