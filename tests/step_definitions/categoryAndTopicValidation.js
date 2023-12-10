const { I } = inject();

When('User clicks on the {string} button', async (categoryOrTopicName) => {
  I.wait(2);
  selectCategoryOrTopic(categoryOrTopicName);
  
});

Then('User should be displayed with the selected {string}', async (categoryOrTopicName) => {
  categoryOrTopicCountCheck(categoryOrTopicName);
});

async function selectCategoryOrTopic(categoryOrTopicName){
  I.click(`//a[@class="sidebar-filters-link "][contains(text(),'${categoryOrTopicName}')]`);
  I.wait(2);
  I.scrollTo("//div[@class='page-foot-main page-wrap']");
  I.wait(2);
}

async function categoryOrTopicCountCheck(categoryOrTopicName){
  const numberOfElements1 = await I.grabNumberOfVisibleElements(`//div[contains(@class,'thumb-container')]/article/div/div/a[contains(text(),'${categoryOrTopicName}')]`);
  const numberOfElements2 = await I.grabNumberOfVisibleElements("//div[contains(@class,'thumb-container')]/article[contains(@data-type,'performer')]");
  expect(numberOfElements1).equal(numberOfElements2)
}