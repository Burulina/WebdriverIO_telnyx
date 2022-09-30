const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page');
const prodStoragePage = require ('../pageObjects/prod.storage.page');
const data = require('./../../data/data.js');

describe('Check join waitlist', function() {
    before(async function() {
        await browser.url('/');
        await commonMethods.closeCookiesForm();
        await expect(browser).toHaveUrl('https://telnyx.com/');
    });
      
    it('TC7 - Should check ability to join waitlist for Telnyx storage after redirection from home page', async function() {
        await homePage.clickJoinWaitlistLink();
        await expect(browser).toHaveUrlContaining('/products/storage');
        await prodStoragePage.clickJoinWaitlistButton();
        await expect(browser).toHaveUrlContaining('/products/storage#form');
        await prodStoragePage.fillJoinWaitlistForm(data.name, data.lastname, data.email, data.company);
        await prodStoragePage.clickRecieveEmailCheckBox();  
    });

})