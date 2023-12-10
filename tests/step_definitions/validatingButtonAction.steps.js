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

When('User clicks on {string} button', async (buttonName) => {
  I.wait(2);
  selectButtonAndValidate(buttonName);
});

Then('User should be displayed with sign up overlay box', async () => {
  closeSignupBox();
});


async function selectButtonAndValidate(buttonName){
  const button = `//div[@data-id='${buttonName}']`;
  I.waitForElement(button, 60)
  I.waitForVisible(button);
  I.click(button);
}

async function closeSignupBox(){
  const signUpBoxLocator = ".mc_dialog__header";
  const signUpBoxCloseLocator = '//div[@class="mc_js_login_or_signup"]/div/a/i';
  I.seeElement(signUpBoxLocator);
  I.click(signUpBoxCloseLocator);
}