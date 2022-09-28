const commonMethods = require ('./common.methods');

// Selectors
const searchInput = '.search__input';
const supportCenterHeading = 'h1.header__headline';
const searchResultHeading = '.search__headline';
const searchMainTopics = 'h2.c__primary';

class SupportCenterPage {

    getSearchMainTopics () {
        return $$(searchMainTopics);
    }
    
    getSupportCenterHeading () {
        return $(supportCenterHeading);
    }

    getSearchResultHeading () {
        return $(searchResultHeading);
    }

    async fillSearchInput (text) {
        await commonMethods.typeInput(searchInput, text);
    }

    async consoleLogSearchMainTopics() {
        const searchArray = await this.getSearchMainTopics().map(elem => elem.getText());
        console.log ("SearchMainTopics: " + searchArray);
    }

}

module.exports = new SupportCenterPage();