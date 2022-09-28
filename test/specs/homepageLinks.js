const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page');


describe('Check links on homepage', () => {
    beforeEach(async function() {
        await browser.url('/');
        await commonMethods.closeCookiesForm();
        await expect(browser).toHaveUrl('https://telnyx.com/');
    });
      
    it('TC10 - Should test functionality of HomePage button in header', async function() {
        await homePage.clickTalkExpertButton();
        await expect(browser).toHaveUrlContaining('/contact-us');
        await homePage.clickHomePageButton();
        await expect(browser).toHaveUrl('https://telnyx.com/');
        await homePage.clickNetworkMenuItem();
        await expect(browser).toHaveUrlContaining('/solutions/global-ip-network');
        await homePage.clickHomePageButton();
        await expect(browser).toHaveUrl('https://telnyx.com/');
    });

    it('TC11 - Check ability to activate the "Call" dialog from header of Homepage', async function() {
        await homePage.clickCallUsLink();
        await expect(homePage.getclickToCallDialog()).toBeDisplayed();
        await expect(homePage.getClickToCallDialogHeading()).toHaveTextContaining('Talk to an Expert');
    });

    it('TC12 - Check redirection to Cookie Policy information from footer', async function() {
        await homePage.clickCookiesPolicyLink();
        await expect(browser).toHaveUrlContaining('/cookie-policy');
    });

    it('TC13 - Check redirection to the "Twitter" site from footer', async function() {
        await homePage.clickTwitterLink();
        await browser.pause(2000);
        await browser.switchWindow('https://twitter.com/telnyx');
        await expect(browser).toHaveUrlContaining('twitter.com/telnyx');
    });

})