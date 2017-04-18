const assert = require('chai').assert;
const getQuotes = require('../../../src/common/getQuotes');
const Quote = require('../../../src/Quote');

const QUOTES_HTML = `<div class="quote"><div class="actions"><a href="/quote/444474/rulez" class="up" rel="nofollow" onclick="v('444474',0,0); return false;">+</a><span class="rating-o"><span id="v444474" class="rating">152</span></span><a href="/quote/444474/sux" class="down" rel="nofollow" onclick="v('444474',1,0); return false;">–</a><a href="/quote/444474/bayan" class="old" id="vb444474" rel="nofollow" onclick="v('444474',2,0); return false;">[:||||:]</a><span class="share" id="s444474"><span class="b-share"><a class="b-share__handle" id="ya-share-0.6597246360429414-1492511905521" data-hdirection="" data-vdirection=""><span class="b-share__text">Поделиться</span></a></span></span><span class="date">2017-04-18 12:46</span><a href="/quote/444474" class="id">#444474</a></div><div class="text">Свершилось! Яндекс почта отправила в спам письма от команды Яндекс диска)</div></div>`;
const QUOTES_WITH_ESCAPED_HTML = `<div class="quote"><div class="actions"><a href="/quote/444474/rulez" class="up" rel="nofollow" onclick="v('444474',0,0); return false;">+</a><span class="rating-o"><span id="v444474" class="rating">152</span></span><a href="/quote/444474/sux" class="down" rel="nofollow" onclick="v('444474',1,0); return false;">–</a><a href="/quote/444474/bayan" class="old" id="vb444474" rel="nofollow" onclick="v('444474',2,0); return false;">[:||||:]</a><span class="share" id="s444474"><span class="b-share"><a class="b-share__handle" id="ya-share-0.6597246360429414-1492511905521" data-hdirection="" data-vdirection=""><span class="b-share__text">Поделиться</span></a></span></span><span class="date">2017-04-18 12:46</span><a href="/quote/444474" class="id">#444474</a></div><div class="text">Свершилось! &#34;Яндекс&#34; почта отправила в спам письма от команды Яндекс диска)</div></div>`;
const ADV_HTML = `<div class="quote"><div style="width: 728px; height: 90px; margin: 0 auto;"><div id="beacon_d390cb12a0" style="position: absolute; left: 0px; top: 0px; visibility: hidden;"><img src="http://a.chatty.fish/www/delivery/lg.php?bannerid=12&amp;campaignid=12&amp;zoneid=4&amp;loc=1&amp;referer=http%3A%2F%2Fbash.im%2F&amp;cb=d390cb12a0" width="0" height="0" alt="" style="width: 0px; height: 0px;"></div></div></div>`;

describe('common::getQuotes', () => {
  it('Should properly parse quotes from an HTML', () => {
    const quotes = getQuotes(QUOTES_HTML);

    assert.instanceOf(quotes, Array);
    assert.instanceOf(quotes[0], Quote);
    assert.equal(quotes[0].getId(), 444474);
    assert.equal(quotes[0].getText(), 'Свершилось! Яндекс почта отправила в спам письма от команды Яндекс диска)');
    assert.equal(quotes[0].getRating(), 152);
    assert.equal(quotes[0].getDate().toDateString(), 'Tue Apr 18 2017');
    assert.equal(quotes[0].getUrl(), 'http://bash.im/quote/444474');
  });

  it('Should properly skip quote if advertisement inside', () => {
    const quotes = getQuotes(ADV_HTML);

    assert.instanceOf(quotes, Array);
    assert.equal(quotes.length, 0);
  });

  it('Should properly parse quotes from an HTML with escaped codes', () => {
    const quotes = getQuotes(QUOTES_WITH_ESCAPED_HTML);

    assert.instanceOf(quotes, Array);
    assert.instanceOf(quotes[0], Quote);
    assert.equal(quotes[0].getId(), 444474);
    assert.equal(quotes[0].getText(), 'Свершилось! "Яндекс" почта отправила в спам письма от команды Яндекс диска)');
    assert.equal(quotes[0].getRating(), 152);
    assert.equal(quotes[0].getDate().toDateString(), 'Tue Apr 18 2017');
    assert.equal(quotes[0].getUrl(), 'http://bash.im/quote/444474');
  });
});
