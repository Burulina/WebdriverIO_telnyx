const commonMethods = require ('./common.methods');

// Selectors
const exploreMarketButton = 'div>[href="https://marketplace.telnyx.com"]';
const submitButton = 'button[type="submit"]';
const firstNameInput = '#FirstName';
const lastNameInput = '#LastName';
const emailInput  = '#Email';
const betaTesterFormHeading = 'section>h3';
const primaryUseDropdown = '#Use_Case_Form__c';
const becomeBetaTesterForm = '#become-a-beta-tester';
const emailErrorMessage = '#ValidMsgEmail';

class IntegrationsPage {

    getBecomeBetaTesterForm () {
        return $(becomeBetaTesterForm);
    }
    
    getBetaTesterFormHeading () {
        return $(betaTesterFormHeading);
    }
    
    getEmailErrorMessage () {
        return $(emailErrorMessage);
    }

    async fillInputs (firstname, lastname, email) {
        await commonMethods.typeInput(firstNameInput, firstname);
        await commonMethods.typeInput(lastNameInput, lastname);
        await commonMethods.typeInput(emailInput, email);
    }

    async clickSubmitButton() {
        await commonMethods.clickElem(submitButton);
    }

    async clickExploreMarketButton() {
        await commonMethods.clickElem(exploreMarketButton);
    }

    async selectPrimaryUseDropdown (option) {
        await $(primaryUseDropdown).selectByAttribute('value', option);
    }

}

module.exports = new IntegrationsPage ();