// Initializes the `sensor-data-parser` service on path `/data`
const getSensor = (sensorIndex) => {
  switch (sensorIndex) {
  case 1:
    return 'CURRENT_FROM_BATTERY_TO_INVERTER';
  case 2:
    return 'CURRENT_FROM_SOLAR_TO_BATTERY';
  case 3:
    return 'BATTERY_VOLTAGE';
  default:
    return '';
    
  }
};
module.exports = function (app) {
  
  app.use('/data', (req, res) => {
    const str = req.body;
    try {
      const parsedStr = str.match(/(\d)\s(.*)/);
      const sensorIndex = parseInt(parsedStr[1]);
      const sensorValue = parseFloat(parsedStr[2]);
      const sensorType = getSensor(sensorIndex);
      if(!sensorType) throw 'Unknown sensor';
      if(isNaN(sensorValue)) throw 'Sensor value is NAN';
      console.log({
        sensorType,
        sensorValue
      });
      app.service('sensor-data').create({
        sensor: sensorType,
        value: sensorValue,
      });
    } catch (error) {
      console.error(error);
    }
    res.send('OK');
  });


};
