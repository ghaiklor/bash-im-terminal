const blessed = require('blessed');

const footer = blessed.box({
  border: {
    type: 'line',
    bold: true,
    fg: 'white',
  },
  style: {
    fg: 'red',
  },
  align: 'right',
  valign: 'middle',
  width: '100%-9',
  height: 3,
  content: 'Up/Down - Scroll | Left/Right - Pages | R - Random | H - Home | Q - Quit | http://github.com/ghaiklor/bash-im-terminal',
  right: 0,
  bottom: 0
});

module.exports = footer;
