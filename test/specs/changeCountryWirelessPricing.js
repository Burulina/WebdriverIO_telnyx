const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page');
const wirelessPricingPage = require ('../pageObjects/wireless.pricing.page');

describe('Check ability to change country on wireless pricing page', function() {
    before(async function() {
        await browser.url('/');
        await commonMethods.closeCookiesForm();
        await expect(browser).toHaveUrl('https://telnyx.com/');
    });
      
    it('TC14 - Should check ability to change country on wireless pricing page', async function() {
        await homePage.getPricingMenuItem().moveTo(); 
        await homePage.clickWirelessSubmenuItem();
        await expect(browser).toHaveUrlContaining('/pricing/iot-data-plans');
        await wirelessPricingPage.clickCountryListboxButton();
        await wirelessPricingPage.fillCountrySearchInput('Ukraine');
        await browser.keys(['Enter']);
        await expect(browser).toHaveUrlContaining('/pricing/iot-data-plans/ua');
        await expect(wirelessPricingPage.getWirelessPricingPageTitle()).toBeDisplayed();
        await expect(wirelessPricingPage.getWirelessPricingPageTitle()).toHaveTextContaining('Ukraine');
    });

})