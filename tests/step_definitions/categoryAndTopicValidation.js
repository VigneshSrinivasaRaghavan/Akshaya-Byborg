const { I } = inject();

Given('User is on the oranum home page', async() => {
  I.amOnPage('/');
});

When('User clicks on {string} button', async (categoryOrTopicName) => {
  I.wait(10);
  selectCategoryOrTopic(categoryOrTopicName);
  
});

Then('User should be displayed with the selected {string}', async (categoryOrTopicName) => {
  categoryOrTopicCountCheck(categoryOrTopicName);
});

async function selectCategoryOrTopic(categoryOrTopicName){
  I.click(`//a[contains(@class,'sidebar-filters-link')][normalize-space()='${categoryOrTopicName}']`);
  I.wait(10);
  I.scrollTo("//div[@class='page-foot-main page-wrap']");
  I.wait(6);
}

async function categoryOrTopicCountCheck(categoryOrTopicName){
  const numberOfElements1 = await I.grabNumberOfVisibleElements(`//div[contains(@class,'thumb-container')]/article/div/div/a[contains(text(),'${categoryOrTopicName}')]`);
  const numberOfElements2 = await I.grabNumberOfVisibleElements("//div[contains(@class,'thumb-container')]/article[contains(@data-type,'performer')]");
  expect(numberOfElements1).equal(numberOfElements2)
}