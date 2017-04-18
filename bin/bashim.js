#!/usr/bin/env node

const blessed = require('blessed');
const getQuotes = require('../src');
const screenComponent = require('../src/components/screen');
const headerComponent = require('../src/components/header');
const quotesComponent = require('../src/components/quotes');
const footerComponent = require('../src/components/footer');
const pagerComponent = require('../src/components/pager');

let currentPage = 0;

async function updateQuotesComponent(page = 0) {
  quotesComponent.setContent('Loading...');
  screenComponent.render();

  const {quotes, currentPage: bashPage} = await getQuotes(page);
  const text = quotes.map(quote => `#${quote.getId()} - ${quote.getRating()} - ${quote.getDate().toDateString()} - ${quote.getUrl()}\n${quote.getText()}`).join(`\n${'-'.repeat(process.stdout.columns - 3)}`)
  quotesComponent.setContent(`${text}\n\nYou've just read the last quote, navigate to next page...`);

  currentPage = bashPage;
  pagerComponent.setContent(isNaN(bashPage) ? 'RANDOM' : currentPage.toString());
  screenComponent.render();
}

function scrollQuotesComponent(down = true) {
  quotesComponent.scroll(down ? 1 : -1);
  screenComponent.render();
}

screenComponent.key('up', scrollQuotesComponent.bind(this, false));
screenComponent.key('down', scrollQuotesComponent.bind(this, true));
screenComponent.key('left', () => updateQuotesComponent(currentPage + 1));
screenComponent.key('right', () => updateQuotesComponent(currentPage - 1));
screenComponent.key('r', () => updateQuotesComponent(-1));
screenComponent.key('h', () => updateQuotesComponent(0));
screenComponent.key(['escape', 'q', 'C-c'], () => process.exit(0));
screenComponent.append(headerComponent);
screenComponent.append(quotesComponent);
screenComponent.append(footerComponent);
screenComponent.append(pagerComponent);
screenComponent.render();

updateQuotesComponent();
