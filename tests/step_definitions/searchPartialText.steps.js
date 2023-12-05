const { I } = inject();
// Add in your custom step files

Given('User is on the oranum home page', () => {
  I.amOnPage('/');
});

When('User searches the pshycics with <partial> text', () => {
  I.seeElement('.toolbar-search-input');
  I.click('.toolbar-search-input');
  I.fillField('.toolbar-search-input','matt');
  I.pressKey('Enter');
});

Then('User should be displayed with search results matching the searched text', () => {
  I.see('MATT','h1');
  I.see('Matt','.thumb-data-item--name');
});