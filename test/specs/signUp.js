const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page');
const signUpPage = require ('../pageObjects/signUp.page');
const data = require('./../../data/data.js');

describe('Check sign up', () => {
    beforeEach(async function() {
        await browser.url('/');
        await commonMethods.closeCookiesForm();
        await expect(browser).toHaveUrl('https://telnyx.com/');
    });
      
    it('TC1 - Should check ability to sign up without agree terms of conditions and privacy policy', async function() {
        await homePage.clickSingUpButton();
        await expect(browser).toHaveUrlContaining('/sign-up');
        await expect(signUpPage.getSinUpFormHeading()).toBeDisplayed();
        await expect(signUpPage.getSinUpFormHeading()).toHaveTextContaining('Create a free account');
        await signUpPage.fillSignUpInput(data.email, data.name, data.password);
        await signUpPage.clickCreateAccountButton();
        await expect(signUpPage.getTermsErrorMessage()).toBeDisplayed();
        await expect(signUpPage.getTermsErrorMessage()).toHaveTextContaining('Please accept the terms and conditions');
    });

    it('TC2 - Should check redirection to the "Sign Up" page after clicking "Try for free" button with valid email', async function() {
        await homePage.fillEmailInput(data.email);
        await homePage.clickTryForFreeButton();
        await expect(browser).toHaveUrlContaining('/sign-up?email=' + data.email);
        await expect(signUpPage.getWorkEmailInput()).toHaveValue(data.email);
    });

    it.skip('TC3 - Should check ability to open sign up page after clicking "Try for free" with invalid email', async function() {
        await homePage.fillEmailInput(data.invalidEmail);
        await homePage.clickTryForFreeButton();
        await browser.saveScreenshot('./test/screenshots/errorEmail.png');
        await expect(browser).toHaveUrl('https://telnyx.com/');
    });

    it('TC4 - Should check ability to read Privacy Policy information before Sign Up', async function() {   
        await homePage.clickSignUpLink();
        await expect(browser).toHaveUrlContaining('/sign-up');
        await expect(signUpPage.getSinUpFormHeading()).toBeDisplayed();
        await expect(signUpPage.getSinUpFormHeading()).toHaveTextContaining('Create a free account');       
        await signUpPage.clickPrivacyPolicyLink();
        await browser.pause(2000);
        await browser.switchWindow('/privacy-policy');
        await commonMethods.closeCookiesForm();
        await expect(browser).toHaveUrlContaining('/privacy-policy');
        await expect(signUpPage.getPrivacyPolicyHeading()).toBeDisplayed();
        await expect(signUpPage.getPrivacyPolicyHeading()).toHaveTextContaining('Privacy Policy');
    });

})