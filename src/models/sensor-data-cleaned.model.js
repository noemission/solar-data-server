// sensor-data-cleaned-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'sensorDataCleaned';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    sensor: { type: String, required: true },
    value: { type: Number, required: true },
    date: { type: Date, required: true },
  });


  mongooseClient.connection.dropCollection('sensordatacleaned', () => {
    mongooseClient.connection.createCollection('sensordatacleaned', {
      viewOn: app.service('sensor-data').Model.collection.name,
      pipeline: [
        {
          $group: {
            _id: {
              sensor: '$sensor',
              date: { $dateToString: { format: '%Y-%m-%dT%H:%M:%S%z', date: '$updatedAt' } },
            },
            value: { $avg: '$value' }
          }
        },
        {
          $set: {
            _id: '$$REMOVE',
            sensor: '$_id.sensor',
            value:  { $trunc : [ '$value' , 2 ] },
            date: {
              $dateFromString: {
                dateString: '$_id.date',
              }
            }
          }
        }
      ]
    });
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema, 'sensordatacleaned');

};
