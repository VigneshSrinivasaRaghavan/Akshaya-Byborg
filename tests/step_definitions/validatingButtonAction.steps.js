const { I } = inject();

Given('User is on the oranum home page', async() => {
  I.amOnPage('/');
});

When('User opens the live pshycic', async () => {
  const psychicCount = await I.grabNumberOfVisibleElements("//div[@class='swiper-wrapper']/article");

  for (let i = 1; i <= psychicCount; i++) {
    const psychicLiveStatus = await I.grabAttributeFrom(`//div[@class='swiper-wrapper']/article[${i}]`, 'data-status');
    if (psychicLiveStatus == 1) {
      const tileButton = `//div[@class='swiper-wrapper']/article[${i}]/a`;
      I.click(tileButton);
      break;
    }
  }
});

When('User clicks on surprise button', async () => {
  I.wait(10);
  I.waitForElement("//div[@data-id='surpriseIcon']", 60)
  I.waitForVisible("//div[@data-id='surpriseIcon']");
  I.click("//div[@data-id='surpriseIcon']");
});

Then('User should be displayed with sign up overlay box', async () => {
  const signUpBoxLocator = ".mc_dialog__header";
  const signUpBoxCloseLocator = '//div[@class="mc_js_login_or_signup"]/div/a/i';
  I.seeElement(signUpBoxLocator);
  I.click(signUpBoxCloseLocator);
});