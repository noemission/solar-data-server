const app = require('../../src/app');

describe('\'sensor-data\' service', () => {
  it('registered the service', () => {
    const service = app.service('sensor-data');
    expect(service).toBeTruthy();
  });
});
