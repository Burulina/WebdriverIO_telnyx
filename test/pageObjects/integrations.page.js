const commonMethods = require ('./common.methods');

// Selectors
const exploreMarketButton = 'div>[href="https://marketplace.telnyx.com"]';
const submitButton = 'button[type="submit"]';
const firstNameInput = '#FirstName';
const lastNameInput = '#LastName';
const emailInput  = '#Email';
const phoneInput = '#Form_Phone__c';
const companyInput  = '#Company';
const betaTesterFormHeading = 'section>h3';
const patnerTypeDropdown = '#Partner_Type__c';
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

    async fillInputs (firstname, lastname, email, phone, company) {
        await commonMethods.typeInput(firstNameInput, firstname);
        await commonMethods.typeInput(lastNameInput, lastname);
        await commonMethods.typeInput(emailInput, email);
        await commonMethods.typeInput(phoneInput, phone);
        await commonMethods.typeInput(companyInput, company);
    }

    async clickSubmitButton() {
        await commonMethods.clickElem(submitButton);
    }

    async clickExploreMarketButton() {
        await commonMethods.clickElem(exploreMarketButton);
    }

    async selectPartnerTypeDropdown (option) {
        await $(patnerTypeDropdown).selectByAttribute('value', option);
    } 

}

module.exports = new IntegrationsPage ();