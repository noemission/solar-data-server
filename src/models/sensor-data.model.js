// sensor-data-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'sensorData';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    sensor: { type: String, required: true },
    value: { type: Number, required: true },
  }, {
    timestamps: true
  });

  schema.index({ sensor: 1 });
  schema.index({ updatedAt: -1 });
  schema.index({ updatedAt: -1, sensor: 1 });
  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
