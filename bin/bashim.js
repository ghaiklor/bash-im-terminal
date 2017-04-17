#!/usr/bin/env node

const blessed = require('blessed');
const getQuotes = require('../src');
const screenComponent = require('../src/components/screen');
const headerComponent = require('../src/components/header');
const quotesComponent = require('../src/components/quotes');
const footerComponent = require('../src/components/footer');

const updateQuotes = async function () {
  quotesComponent.setContent('Loading...');
  screenComponent.render();

  const quotes = await getQuotes();
  const text = quotes.map(quote => `#${quote.getId()} - ${quote.getRating()} (${quote.getDate().toDateString()}) - ${quote.getUrl()}\n${quote.getText()}`).join(`\n${'-'.repeat(process.stdout.columns - 3)}`)
  quotesComponent.setContent(`${text}\n\nYou've just read the last quote, press R to load new quotes...`);

  screenComponent.render();
};

const scrollQuotes = function (down = true) {
  quotesComponent.scroll(down ? 1 : -1);
  screenComponent.render();
};

screenComponent.key('r', updateQuotes);
screenComponent.key('down', scrollQuotes.bind(this, true));
screenComponent.key('up', scrollQuotes.bind(this, false));

screenComponent.append(headerComponent);
screenComponent.append(quotesComponent);
screenComponent.append(footerComponent);
screenComponent.key(['escape', 'q', 'C-c'], () => process.exit(0));
screenComponent.render();

updateQuotes();
