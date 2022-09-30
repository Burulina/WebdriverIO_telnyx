const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page');
const signInPage = require ('../pageObjects/signIn.page');
const data = require('./../../data/data.js');

describe('Check sign in', function() {
    beforeEach(async function() {
        await browser.url('/');
        await commonMethods.closeCookiesForm();
        await expect(browser).toHaveUrl('https://telnyx.com/');
        await homePage.clickLogInButton();
        await expect(browser).toHaveUrlContaining('/sign-in');
        await expect(signInPage.getSignInTitle()).toBeDisplayed();
        await expect(signInPage.getSignInTitle()).toHaveTextContaining('Log in');
    });
      
    it('TC5 - Should check ability to Log In with not exist credentials after redirection from home page header', async function() {
        await signInPage.fillLoginInput(data.email, data.password);
        await signInPage.getLoginButton().waitForEnabled();
        await signInPage.clickLoginButton();
        await expect(signInPage.getLoginErrorMessage()).toBeDisplayed();
        await expect(signInPage.getLoginErrorMessage()).toHaveTextContaining('That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.');
    });

    it('TC6 - Should check ability to Single Sign-on with not exist credentials after redirection from home page header', async function() {
        await signInPage.clickSingleSignOnButton();
        await signInPage.fillCompanyEmailInput(data.email);
        await signInPage.clickContinueButton();
        await expect(signInPage.getLoginErrorMessage()).toBeDisplayed();
        await expect(signInPage.getLoginErrorMessage()).toHaveTextContaining('The requested resource or URL could not be found.');
        await signInPage.clickCompanyNameEmailLink();
        await signInPage.fillBusinessNameInput(data.company);
        await signInPage.clickContinueButton();
        await expect(signInPage.getLoginErrorMessage()).toBeDisplayed();
        await expect(signInPage.getLoginErrorMessage()).toHaveTextContaining('The requested resource or URL could not be found.');
    });

})