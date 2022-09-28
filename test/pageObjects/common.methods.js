// Selectors
const closeCookiesButton = '[aria-label="close and deny"]';

class CommonMethods {

    getCloseCookiesButton() {
        return $(closeCookiesButton);
    }

    async closeCookiesForm() {
        await $('body').waitForDisplayed({timeout: 2000});
        if(await this.getCloseCookiesButton().isDisplayed()) {
            await this.getCloseCookiesButton().click();
        };
    }

    async clickElem (elem) {
        await browser.waitUntil(
            async () => (await $(elem).isDisplayed()) === true,
            {
                timeout: 3000,
                interval: 500,
                timeoutMsg: 'Expected button is not displayed after 3 s'
            }
        );
        await $(elem).click();
    }

    async typeInput (elem, text) {
        await browser.waitUntil(
            async () => (await $(elem).isDisplayed()) === true,
            {
                timeout: 4000,
                interval: 500,
                timeoutMsg: 'Expected input field is not displayed after 4 s'
            }
        );
        await $(elem).setValue(text);
    }


}

module.exports = new CommonMethods();


