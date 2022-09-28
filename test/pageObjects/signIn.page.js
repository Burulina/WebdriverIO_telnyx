const commonMethods = require ('./common.methods');

// Selectors
const continueButton = '[class*="SSOForm__LoginButton"]';
const loginButton = '[class*="LoginForm__LoginButton"]';
const singleSignOnButton = 'button[name="sso"]';
const businessEmailInput = '[aria-label="loginForm"] input[name="email"]';
const businessNameInput = 'input[name="short_name"]';
const companyEmailInput = 'input[name="email"][placeholder]';
const passwordInput = 'input[name="password"]';
const companyNameEmailLink = '[class*="SSOForm__ButtonLink"]';
const loginErrorMessage = 'span[class*="Message__MessageCopy"]';
const signInTitle = '[data-testid="login.signin.title"]';

class SignInPage {
    
    getSignInTitle () {
        return $(signInTitle);
    }

    getLoginErrorMessage () {
        return $(loginErrorMessage);
    }

    async fillLoginInput (email, password) {
        await commonMethods.typeInput(businessEmailInput, email);
        await commonMethods.typeInput(passwordInput, password);
    }
    
    async fillBusinessNameInput(name) {
        await commonMethods.typeInput(businessNameInput, name);
    }

    async fillCompanyEmailInput (email) {
        await commonMethods.typeInput(companyEmailInput, email);
    }

    async clickLoginButton() {
        await commonMethods.clickElem(loginButton);
    }

    async clickSingleSignOnButton() {
        await commonMethods.clickElem(singleSignOnButton);
    }

    async clickContinueButton() {
        await commonMethods.clickElem(continueButton);
    }

    async clickCompanyNameEmailLink() {
        await commonMethods.clickElem(companyNameEmailLink);
    }

}

module.exports = new SignInPage();