const blessed = require('blessed');

const quotes = blessed.box({
  border: {
    type: 'line',
    bold: true,
    fg: 'white',
  },
  style: {
    fg: 'white',
  },
  align: 'center',
  valign: 'middle',
  width: '100%',
  height: 'shrink',
  content: 'Loading...',
  left: 'left',
  top: 3
});

module.exports = quotes;
