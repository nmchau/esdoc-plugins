exports.onHandleCodeParser = function(ev) {
  const option = ev.data.option || {};
  const plugins = ev.data.parserOption.plugins;

  if (!('enable' in option)) option.enable = true;

  if (option.enable) plugins.push('jsx');
};
