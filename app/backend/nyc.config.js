module.exports = {
  all: true,
  extends: "@istanbuljs/nyc-config-typescript",
  include: ['src/**/*.ts'],
  exclude: [
    'src/tests',
    'src/database/config',
    'src/database/migrations',
    'src/database/seeders'
  ]
};
