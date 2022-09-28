const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page');
const supportCenterPage = require ('../pageObjects/support.center.page');
const data = require('./../../data/data.js');

describe('Check search in support center', () => {
    beforeEach(async function() {
        await browser.url('/');
        await commonMethods.closeCookiesForm();
        await expect(browser).toHaveUrl('https://telnyx.com/');
        await homePage.clickSupportCenterLink();
        await expect(browser).toHaveUrlContaining('/support.telnyx.com');
        await expect(supportCenterPage.getSupportCenterHeading()).toBeDisplayed();
        await expect(supportCenterPage.getSupportCenterHeading()).toHaveTextContaining('Support Center');
    });
      
    it('TC8 - Should check search topics in main page of support center telnyx', async function() {
        await expect(supportCenterPage.getSearchMainTopics()).toBeDisplayed();
        await expect (supportCenterPage.getSearchMainTopics()).toBeElementsArrayOfSize(15);
        await supportCenterPage.consoleLogSearchMainTopics();
    });

    it('TC9 - Should check searching in support center telnyx', async function() {
        await supportCenterPage.fillSearchInput(data.search);
        await browser.keys(['Enter']);
        await expect(browser).toHaveUrlContaining(data.search);
        await expect(supportCenterPage.getSearchResultHeading()).toBeDisplayed();
        await expect(supportCenterPage.getSearchResultHeading()).toHaveTextContaining(data.search);
    });

})