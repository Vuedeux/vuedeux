const PluginCreator = require('./vdxPluginCreator');
const MixinCreator = require('./vdxMixinCreator');

const vdx = {
  MixinCreator,
  PluginCreator,
};

vdx.printMsg = function () {
  console.log('Made by Nikol Marentes, David Marx, & Brian Rudloff');
};

module.exports = vdx;
