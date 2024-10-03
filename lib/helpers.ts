import { Browser, Page, chromium } from 'playwright';

var browser: Browser;
var page: Page;

export class Helpers {

    async launchBrowser() {
        browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
        page = await browser.newPage();
        await page.setDefaultTimeout(30000);
    }

    async launchUrl(url: string) {
        await page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    async closeBrowser() {
        await browser.close();
    }

    async click(element: string) {
        await page.locator(element).click();
    }

    async enterText(element: string, text: string) {
        await page.locator(element).type(text);
    }

    async getText(element: string) {
        return await page.locator(element).innerText();
    }

    getUrl() {
        return page.url();
    }

    async isDisplayed(element: string) {
        return await page.locator(element).isVisible();
    }
}
