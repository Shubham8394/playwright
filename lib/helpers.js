"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helpers = void 0;
const playwright_1 = require("playwright");
var browser;
var page;
class Helpers {
    launchBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            browser = yield playwright_1.chromium.launch({ headless: false, args: ['--start-maximized'] });
            page = yield browser.newPage();
            yield page.setDefaultTimeout(30000);
        });
    }
    launchUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield page.goto(url, { waitUntil: 'domcontentloaded' });
        });
    }
    closeBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            yield browser.close();
        });
    }
    click(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield page.locator(element).click();
        });
    }
    enterText(element, text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield page.locator(element).type(text);
        });
    }
    getText(element) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield page.locator(element).innerText();
        });
    }
    getUrl() {
        return page.url();
    }
    isDisplayed(element) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield page.locator(element).isVisible();
        });
    }
}
exports.Helpers = Helpers;
