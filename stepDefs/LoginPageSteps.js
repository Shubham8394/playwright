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
const cucumber_1 = require("@cucumber/cucumber");
const LoginPage_1 = require("../pages/LoginPage");
const helpers_1 = require("../lib/helpers");
const chai_1 = require("chai");
var loginPage = new LoginPage_1.LoginPage();
var helpers = new helpers_1.Helpers();
(0, cucumber_1.Given)(/^I click on submit button$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield helpers.click(loginPage.loginButton);
}));
(0, cucumber_1.Then)(/^I enter username as '(.*?)'$/, (text) => __awaiter(void 0, void 0, void 0, function* () {
    yield helpers.enterText(loginPage.usernameTextBox, text);
}));
(0, cucumber_1.Then)(/^I enter password as '(.*?)'$/, (text) => __awaiter(void 0, void 0, void 0, function* () {
    yield helpers.enterText(loginPage.passwordTextBox, text);
}));
(0, cucumber_1.Then)(/^I validate page url as '(.*?)'$/, (url) => __awaiter(void 0, void 0, void 0, function* () {
    (0, chai_1.expect)(helpers.getUrl()).to.equal(url);
}));
(0, cucumber_1.Then)(/^I validate logout button$/, () => __awaiter(void 0, void 0, void 0, function* () {
    (0, chai_1.expect)(yield helpers.isDisplayed(loginPage.logoutButton)).to.equal(true);
}));
(0, cucumber_1.Then)(/^I validate header text as '(.*?)'$/, (text) => __awaiter(void 0, void 0, void 0, function* () {
    (0, chai_1.expect)(yield helpers.getText(loginPage.headerText)).to.equal(text);
}));
(0, cucumber_1.Then)(/^I validate sub-header text as '(.*?)'$/, (text) => __awaiter(void 0, void 0, void 0, function* () {
    (0, chai_1.expect)(yield helpers.getText(loginPage.subHeaderText)).to.equal(text);
}));
(0, cucumber_1.Then)(/^I validate error message '(.*?)'$/, (message) => __awaiter(void 0, void 0, void 0, function* () {
    (0, chai_1.expect)(yield helpers.getText(loginPage.errorMessage)).to.equal(message);
}));
