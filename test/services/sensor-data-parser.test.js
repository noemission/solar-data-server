const app = require('../../src/app');

describe('\'sensor-data-parser\' service', () => {
  it('registered the service', () => {
    const service = app.service('data');
    expect(service).toBeTruthy();
  });
});
