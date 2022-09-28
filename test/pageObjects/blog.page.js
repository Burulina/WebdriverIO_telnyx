const commonMethods = require ('./common.methods');

// Selectors
const newProdFeaturesButton = 'div[id="filter-by-content"]~ul>li:nth-child(1)>button';
const blogPageHeading = 'div>h1';
const searchResultHeading = '[id="articles"]>div[class*="Text"]';
const searchInput = '#search';
const newsArticlesTopics = 'header>span';

class BlogPage {

    getBlogPageHeading () {
        return $(blogPageHeading);
    }

    getNewProdFeaturesButton () {
        return $(newProdFeaturesButton);
    }

    getSearchResultHeading () {
        return $(searchResultHeading);
    }

    async fillSearchInput (text) {
       await commonMethods.typeInput(searchInput, text);
    }

    async clickNewProdFeaturesButton() {
        await commonMethods.clickElem(newProdFeaturesButton);
    }

    async consoleLogSearchMainTopics() {
        const searchArray = await this.getSearchMainTopics().map(elem => elem.getText());
        console.log ("SearchMainTopics: " + searchArray);
    }

    async checkFilterContent (data) {
        await $$(newsArticlesTopics).map(async elem => {
            let Text = await elem.getText();
            console.log(Text)
            await expect(Text).toContain(data);
        });
    }
 
}

module.exports = new BlogPage ();