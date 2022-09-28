const commonMethods = require ('./common.methods');

// Selectors
const mesaggingSidebarItem = '[id="docs-desktop-sidebar"] [href="/docs/v2/messaging"]';
const phoneNumbersSidebarItem = '[id="docs-desktop-sidebar"] [href="/docs/v2/numbers"]';
const messagingHeading = '#messaging';
const phoneHeading = '#phone-numbers';
const apiDocVersionHeading = '#telnyx-api-v1-documentation';
const apiButton = '[id="docs-desktop-sidebar"] div>button';

class DevelopersPage {

    getApiDocVersionHeading () {
        return $(apiDocVersionHeading);
    }

    getMessagingHeading () {
        return $(messagingHeading);
    }

    getPhoneHeading () {
        return $(phoneHeading);
    }

    async clickMesaggingSidebarItem() {
        await commonMethods.clickElem(mesaggingSidebarItem);
    }
      
    async clickPhoneNumbersSidebarItem() {
        await commonMethods.clickElem(phoneNumbersSidebarItem);
    }

    async clickApiV1Button() {
        await commonMethods.clickElem(apiButton, 0);
    }

}

module.exports = new DevelopersPage();