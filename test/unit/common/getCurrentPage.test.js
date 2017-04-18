const assert = require('chai').assert;
const getCurrentPage = require('../../../src/common/getCurrentPage');

const PAGER_HTML = `<div class="pager"><form method="post" action="/index"><span class="current"><input type="text" name="page" class="page" pattern="[0-9]+" numeric="integer" min="1" max="1247" value="1247"></span><a href="/index/1246"><span class="arr">→</span><span>1246</span></a></form></div>`;

describe('common::getCurrentPage', () => {
  it('Should properly parse current page from an HTML', () => {
    const page = getCurrentPage(PAGER_HTML);

    assert.equal(page, 1247);
  });
});

