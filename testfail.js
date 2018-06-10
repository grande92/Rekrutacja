import { ClientFunction } from 'testcafe';
import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://start.duckduckgo.com/`;

const getPageUrl = ClientFunction(() => window.location.href);

test('Test negatywny', async t => {
    console.log(await getPageUrl());
    const valueInput = Selector('#search_form_input_homepage');
    const logo  = Selector('#logo_homepage_link');
    const entirepage = Selector('#links_wrapper');
    await t   
        .maximizeWindow()
        .expect(valueInput.exists).ok()
        .expect(valueInput.innerText).eql('')
        .expect(logo.exists).ok()
        .typeText(valueInput,'what is the ultimate question of life the universe and everything')
        .pressKey('enter')
        .wait(5000) 
        .takeScreenshot('fail.png')
        .expect(entirepage.innerText).notContains('42');
});