const commonMethods = require ('./common.methods');

// Selectors
const homePageButton = '#Logo-Dark_svg__Layer_1';
const clickToCallDialogHeading = '[id="telnyx-click2call-dialog"] h4';
const loginButton = 'a:nth-child(4)[href*="/portal.telnyx.com"]';
const singUpButton = 'li:nth-child(2) a[href="/sign-up"]';
const talkExpertButton = 'li>div>a[href="/contact-us"]';
const tryForFreeButton = 'button[type="submit"]';
const clickToCallDialog = 'div[role="dialog"]';
const emailInput = 'input[type="email"]';
const callUsLink = 'header [type=button]';
const cookiesPolicyLink = '//span[contains (text(),"Cookie Policy")]';
const joinWaitlistLink = 'header span a[href="/products/storage"]';
const loginLink = 'footer [href*="/portal.telnyx.com/"]';
const signUpLink = '//span[contains (text(),"Sign up")]';
const supportCenterLink = 'audio + a[href*="/support.telnyx.com"]';
const twitterLink = '//span[contains (text(),"Follow on Twitter")]';
const networkMenuItem = 'header span [href="/solutions/global-ip-network"]';
const resourcesMenuItem = '//span[contains (text(),"Resources")]';
const pricingMenuItem =  '//span[contains (text(),"Pricing")]';
const companyMenuItem =  '//span[contains (text(),"Company")]';
const blogSubmenuItem = 'header [href="/resources"]';
const wirelessSubmenuItem = 'header [href="/pricing/iot-data-plans"]';
const integrationsSubmenuItem = 'a[href="/integrations"]';
const developerDocsSubmenuItem = 'header [href*="/developers.telnyx.com/docs"]';

class HomePage {

    getCompanyMenuItem () {
        return $(companyMenuItem);
    }

    getResourcesMenuItem () {
        return $(resourcesMenuItem);
    }

    getPricingMenuItem () {
        return $(pricingMenuItem);
    }

    getclickToCallDialog () {
        return $(clickToCallDialog);
    }

    getClickToCallDialogHeading () {
        return $(clickToCallDialogHeading);
    }

    async fillEmailInput(text) {
        await commonMethods.typeInput(emailInput, text);
    }

    async clickHomePageButton() {
        await commonMethods.clickElem(homePageButton);
    }
    
    async clickLogInButton() {
        await commonMethods.clickElem(loginButton);
    }

    async clickSingUpButton() {
        await commonMethods.clickElem(singUpButton);
    }

    async clickTalkExpertButton() {
        await commonMethods.clickElem(talkExpertButton);
    }
    
    async clickTryForFreeButton() {
        await commonMethods.clickElem(tryForFreeButton);
    }

    async clickTwitterLink() {
        await commonMethods.clickElem(twitterLink);
    }

    async clickCallUsLink() {
        await commonMethods.clickElem(callUsLink);
    }

    async clickCookiesPolicyLink() {
        await commonMethods.clickElem(cookiesPolicyLink);
    }

    async clickJoinWaitlistLink() {
        await commonMethods.clickElem(joinWaitlistLink);
    }

    async clickLoginLink() {
        await commonMethods.clickElem(loginLink);
    }

    async clickSignUpLink() {
        await commonMethods.clickElem(signUpLink);
    }

    async clickSupportCenterLink() {
        await commonMethods.clickElem(supportCenterLink);
    }

    async clickWirelessSubmenuItem() {
        await commonMethods.clickElem(wirelessSubmenuItem);
    }

    async clickNetworkMenuItem() {
        await commonMethods.clickElem(networkMenuItem);
    }

    async clickBlogSubmenuItem() {
        await commonMethods.clickElem(blogSubmenuItem);
    }

    clickIntegrationsSubmenuItem() {
        commonMethods.clickElem(integrationsSubmenuItem);
    }

    async clickDeveloperDocsSubmenuItem() {
        await commonMethods.clickElem(developerDocsSubmenuItem);
    }

}

module.exports = new HomePage();