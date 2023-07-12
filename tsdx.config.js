const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, _options) {
    config.plugins.push(
      postcss({
        plugins: [],
      }),
    );
    return config; // always return a config.
  },
};
