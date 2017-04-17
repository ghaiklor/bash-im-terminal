const blessed = require('blessed');

const screen = blessed.screen({
  smartCSR: true,
  autoPadding: true,
  dockBorders: true,
  fullUnicode: true,
  title: 'Bash.IM'
});

module.exports = screen;
