import { ClientFunction } from 'testcafe';
import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://start.duckduckgo.com/`;

const getPageUrl = ClientFunction(() => window.location.href);

test('Test pozytywny', async t => {
    console.log(await getPageUrl());
    const valueInput = Selector('#search_form_input_homepage');
    const searchInput = Selector('html.js.no-touch.opacity.csstransforms3d.csstransitions.svg.cssfilters.is-not-mobile-device body#pg-bang.page-bang div.site-wrapper.site-wrapper--static.js-site-wrapper div#content_wrapper.content-wrap div.bang.bang--list.blk div#bangs-list.cw--c.bang--list__cw.js-bangs-wrap div.bang__search input.frm__input.js-bang-search');
    const osCount = Selector('.bang__results.js-bang-results strong').withText('StackOverflow').count;
    const existing =Selector('.bang__results.js-bang-results')
    const logo  = Selector('#logo_homepage_link');
    const Bangs = Selector('h1').withText('Start Using Bangs');
    const dropdown = Selector('#wedonttrack')
    await t   
        .maximizeWindow()
        .expect(valueInput.exists).ok()
        .expect(valueInput.innerText).eql('')
        .expect(logo.exists).ok()
        .click(dropdown)
        .click(Bangs)
        .expect(getPageUrl()).contains('/bang')
        .typeText(searchInput,'StackOverflow')
        .expect(osCount).gt(1)
        .expect(existing.innerText).contains('!stackoverflow')    
        console.log("Test zakończył się sukcesem"); 
});