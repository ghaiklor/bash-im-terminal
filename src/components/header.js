const blessed = require('blessed');

const header = blessed.box({
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
  height: 3,
  content: 'Bash.IM (http://bash.im)',
  left: 'left',
  top: 'top'
});

module.exports = header;
