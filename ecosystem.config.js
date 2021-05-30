module.exports = {
  apps : [{
    name: 'solar-data-server',
    script: 'src/index.js',
    env: {
      NODE_ENV: 'production',
      PORT: '3002',
    },
  }]
};
