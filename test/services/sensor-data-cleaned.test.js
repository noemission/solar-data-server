const app = require('../../src/app');

describe('\'sensor-data-cleaned\' service', () => {
  it('registered the service', () => {
    const service = app.service('sensor-data-cleaned');
    expect(service).toBeTruthy();
  });
});
