
var cfg = {
  server: {
    base: 'client',
    vendor: [
      'node_modules'
    ]
  }
};

module.exports = {
  files: ['*.css', '*.js'],
  injectChanges: true,
  open: true,
  reloadDelay: 0,
  server: {
    baseDir: [ cfg.server.base ].concat(cfg.server.vendor),
    middleware: []
  }
};
