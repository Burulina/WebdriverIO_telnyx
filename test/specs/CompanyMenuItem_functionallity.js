const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page');
const integrationsPage = require ('../pageObjects/integrations.page');
const data = require('./../../data/data.js');


describe('Check CompanyMenuItem functionallity', function() {
    beforeEach(async function() {
        await browser.url('/');
        await commonMethods.closeCookiesForm();
        await expect(browser).toHaveUrl('https://telnyx.com/');
        await homePage.getCompanyMenuItem().moveTo();
        await homePage.clickIntegrationsSubmenuItem();
        await expect(browser).toHaveUrlContaining('/integrations');
    });
      
    it('TC17 - Check ability to submit "Beta Tester" form with invalid email', async function() {
        await integrationsPage.getBecomeBetaTesterForm().scrollIntoView();
        await expect (integrationsPage.getBetaTesterFormHeading()).toBeDisplayed();
        await expect (integrationsPage.getBetaTesterFormHeading()).toHaveTextContaining('Become a Beta Tester');
        await integrationsPage.fillInputs(data.name, data.lastname, data.invalidEmail);
        await integrationsPage.selectPrimaryUseDropdown('Call Tracking');
        await integrationsPage.clickSubmitButton();
        await expect (integrationsPage.getEmailErrorMessage()).toBeDisplayed();
        await expect (integrationsPage.getEmailErrorMessage()).toHaveTextContaining('Must be valid email');
    });


    it('TC18 - Check redirection to telnyx marketplace page from the "Integrations" page', async function() {
        await integrationsPage.clickExploreMarketButton();
        await expect(browser).toHaveUrlContaining('/marketplace.telnyx.com');
    });

})