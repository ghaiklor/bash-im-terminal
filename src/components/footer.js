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
  align: 'left',
  valign: 'middle',
  width: '100%',
  height: 3,
  content: 'Up/Down - scroll | R - Next | Q - Quit | Github: http://github.com/ghaiklor/bash-im-terminal',
  left: 'left',
  bottom: 0
});

module.exports = footer;
