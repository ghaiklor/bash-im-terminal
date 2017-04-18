const blessed = require('blessed');

const pager = blessed.box({
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
  width: 10,
  height: 3,
  content: '',
  left: 'left',
  bottom: 0
});

module.exports = pager;
