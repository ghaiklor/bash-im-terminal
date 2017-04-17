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
  height: '100%-4',
  shrink: true,
  scrollable: true,
  alwaysScroll: true,
  scrollbar: {
    style: {
      bg: 'red'
    }
  },
  content: 'Loading...',
  left: 'left',
  top: 2
});

module.exports = quotes;
