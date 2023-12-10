const { I } = inject();

When('User searches the pshycics with {string} text', (word) => {
  I.seeElement('.toolbar-search-input');
  I.click('.toolbar-search-input');
  I.fillField('.toolbar-search-input', word);
  I.pressKey('Enter');
});

Then('User should be displayed with search results matching the searched text {string}', (word) => {
  //Validating the header
  I.see(word.toUpperCase(), 'h1');

  //  Validating the results
  I.see(word, '.thumb-data-item--name');
});