const commonMethods = require ('./common.methods');

// Selectors
const countrySearchInput = 'input[type="search"]';
const countryListboxButton  = 'button[aria-haspopup="listbox"]';
const wirelessPricingPageTitle = 'div>h1';

class WirelessPricingPage {

    getWirelessPricingPageTitle () {
        return $(wirelessPricingPageTitle);
    }

    async clickCountryListboxButton() {
        await commonMethods.clickElem(countryListboxButton);
    }

    async fillCountrySearchInput (text) {
        await commonMethods.typeInput(countrySearchInput, text);
    }

}

module.exports = new WirelessPricingPage();