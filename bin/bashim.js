// #!/usr/bin/env node

const blessed = require('blessed');
const getQuotes = require('../src');
const screenComponent = require('../src/components/screen');
const headerComponent = require('../src/components/header');
const quotesComponent = require('../src/components/quotes');

screenComponent.key('r', updateQuotes);

async function updateQuotes() {
  quotesComponent.setContent('Loading...');
  screenComponent.render();

  const quotes = await getQuotes();
  const text = quotes.map(quote => `#${quote.getId()} - ${quote.getRating()} (${quote.getDate().toDateString()})\n${quote.getText()}`).join(`\n${'-'.repeat(process.stdout.columns - 2)}`)
  quotesComponent.setContent(text);

  screenComponent.render();
}

screenComponent.append(headerComponent);
screenComponent.append(quotesComponent);
screenComponent.key(['escape', 'q', 'C-c'], () => process.exit(0));
screenComponent.render();

updateQuotes();
