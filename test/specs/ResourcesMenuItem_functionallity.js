const commonMethods = require ('../pageObjects/common.methods');
const homePage = require ('../pageObjects/home.page');
const developersPage = require ('../pageObjects/developers.page');
const blogPage = require ('../pageObjects/blog.page');
const data = require('./../../data/data.js');

describe('Check ResourcesMenuItem functionallity', () => {
    beforeEach(async function() {
        await browser.url('/');
        await commonMethods.closeCookiesForm();
        await expect(browser).toHaveUrl('https://telnyx.com/');
        await homePage.getResourcesMenuItem().moveTo(); 
    });
      
    it('TC15 - Should check searching for news on the "Blog" page', async function() {
        await homePage.clickBlogSubmenuItem();
        await expect(browser).toHaveUrlContaining('/resources');
        await expect(blogPage.getBlogPageHeading()).toBeDisplayed();
        await expect(blogPage.getBlogPageHeading()).toHaveTextContaining('Blog');
        await blogPage.fillSearchInput(data.search);
        await browser.keys(['Enter']);
        await expect(browser).toHaveUrlContaining(data.search);
        await expect(blogPage.getSearchResultHeading()).toBeDisplayed();
        await expect(blogPage.getSearchResultHeading()).toHaveTextContaining(data.search);
    });

    it('TC16 - Should check ability to filter news by content on the "Blog" page', async function() {
        await homePage.clickBlogSubmenuItem();
        await expect(browser).toHaveUrlContaining('/resources');
        await expect(blogPage.getBlogPageHeading()).toBeDisplayed();
        await expect(blogPage.getBlogPageHeading()).toHaveTextContaining('Blog');
        await blogPage.clickNewProdFeaturesButton();
        await expect (blogPage.getNewProdFeaturesButton()).toHaveAttribute('aria-checked', 'true');
        await expect(browser).toHaveUrlContaining('Features');
    });
    
    it('TC19 - Should check ability to filter Developer docs by category', async function() {
        await homePage.clickDeveloperDocsSubmenuItem();
        await expect(browser).toHaveUrlContaining('/developers.telnyx.com/docs');
        await developersPage.clickMesaggingSidebarItem();
        await expect(developersPage.getMessagingHeading()).toBeDisplayed();
        await expect(developersPage.getMessagingHeading()).toHaveTextContaining('Messaging');
        await developersPage.clickPhoneNumbersSidebarItem();
        await expect(developersPage.getPhoneHeading()).toBeDisplayed();
        await expect(developersPage.getPhoneHeading()).toHaveTextContaining('Phone Numbers');
    });

    it('TC20 - Should check ability to choose version of API Docs on "Developers" page', async function() {
        await homePage.clickDeveloperDocsSubmenuItem();
        await expect(browser).toHaveUrlContaining('/developers.telnyx.com/docs');
        await developersPage.clickApiV1Button();
        await expect(browser).toHaveUrlContaining('/developers.telnyx.com/docs/v1');
        await expect(developersPage.getApiDocVersionHeading()).toBeDisplayed();
        await expect(developersPage.getApiDocVersionHeading()).toHaveTextContaining('Telnyx API V1 Documentation');
    });

})