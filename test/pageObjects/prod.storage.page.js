const commonMethods = require ('./common.methods');

// Selectors
const joinWaitlistButton = 'h1 ~div>div>a[href="#form"]';
const applyNowButton = 'button[type="submit"]';
const recieveEmailCheckBox = '.mktoCheckboxList #LblSubscription_Opt_In__c';
const addInfoTextForm = '#Form_Additional_Information__c';
const firstNameInput = '#FirstName';
const lastNameInput = '#LastName';
const businessEmailInput = '#Email';

class ProdStoragePage {

    async fillJoinWaitlistForm (firstname, lastname, email, text) {
        await commonMethods.typeInput(firstNameInput, firstname);
        await commonMethods.typeInput(lastNameInput, lastname);
        await commonMethods.typeInput(businessEmailInput, email);
        await commonMethods.typeInput(addInfoTextForm, text);
    }
    
    async clickApplyNowButton() {
        await commonMethods.clickElem(applyNowButton);
    }

    async clickJoinWaitlistButton() {
        await commonMethods.clickElem(joinWaitlistButton);
    }

    async clickRecieveEmailCheckBox (){
        await commonMethods.clickElem(recieveEmailCheckBox);
    }

}

module.exports = new ProdStoragePage();