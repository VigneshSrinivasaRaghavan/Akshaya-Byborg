const { I } = inject();

Given('User is on the oranum home page', () => {
  I.amOnPage('/');
});

When('User opens the live pshycic', () => {
  const psychicCount = I.grabNumberOfVisibleElements("//div[@class='swiper-wrapper']/article");
   
  for (let i=1;i<=psychicCount;i++){
   const psychicLiveStatus = I.grabAttributeFrom(`//div[@class='swiper-wrapper']/article[${i}]`,'data-status');
   if(psychicLiveStatus==1){
   I.click(`//div[@class='swiper-wrapper']/article[${i}]`);
   break;
   }
  }
});

When('User clicks on surprise button', () => {
  I.waitForElement("//div[@data-id='surpriseIcon']",60)
  I.waitForVisible("//div[@data-id='surpriseIcon']");
  I.click("//div[@data-id='surpriseIcon']");
});

Then('User should be displayed with sign up overlay box', () => {
  const signUpBoxLocator = ".mc_dialog__header";
  const signUpBoxCloseLocator = '//div[@class="mc_js_login_or_signup"]/div/a/i';
  I.seeElement(signUpBoxLocator);
  I.click(signUpBoxCloseLocator);
});