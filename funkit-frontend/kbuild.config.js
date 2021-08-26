const typescript = require('@kelpjs/build/plugins/typescript');

exports.output = {
  publicPath: 'dist/'
};

exports.plugins = [
  typescript()
];