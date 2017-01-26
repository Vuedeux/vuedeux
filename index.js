const MixinCreator = require('./vdxPluginCreator');
const PluginCreator = require('./vdxMixinCreator');

const vdx = {
  MixinCreator,
  PluginCreator,
};

vdx.printMsg = function () {
  console.log('This is a message from the demo package');
};

module.exports = vdx;
