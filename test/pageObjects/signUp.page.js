const commonMethods = require ('./common.methods');

// Selectors
const createAccountButton = 'button[type="submit"]';
const workEmailInput = '#email';
const fullNameInput = '#full_name';
const passwordInput = '#password';
const privacyPolicyLink = 'a[href="/privacy-policy"]';
const privacyPolicyHeading = 'div h1';
const sinUpFormHeading = 'h1[class*=Text]';
const termsErrorMessage = '#terms_and_conditions_error';

class SignUpPage {

    getSinUpFormHeading () {
        return $(sinUpFormHeading);
    }

    getTermsErrorMessage () {
        return $(termsErrorMessage);
    }

    getPrivacyPolicyHeading () {
        return $(privacyPolicyHeading);
    }

    getWorkEmailInput () {
        return $(workEmailInput);
    }

    async clickCreateAccountButton() {
        await commonMethods.clickElem(createAccountButton);
    }

    async clickPrivacyPolicyLink() {
        await commonMethods.clickElem(privacyPolicyLink);
    }

    async fillSignUpInput (email, name, password) {
        await commonMethods.typeInput(workEmailInput, email);
        await commonMethods.typeInput(fullNameInput, name);
        await commonMethods.typeInput(passwordInput, password);
    }

}

module.exports = new SignUpPage();