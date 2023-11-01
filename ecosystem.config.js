module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [{
    name: 'alcovision_frontend',
    exec_mode: 'cluster', // Optional: If you want it run multiple instances.
    instances: 'max', // Or a number of instances.
    // 'max' auto detects how many CPU cores there are.
    // The previous option must exist to use the above.
    script: './node_modules/react-scripts/bin/react-scripts.js',
    args: 'start',

  }]
};