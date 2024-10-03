import { Given, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { Helpers } from '../lib/helpers';
import { expect } from 'chai';

var loginPage = new LoginPage();
var helpers = new Helpers();

Given(/^I click on submit button$/, async () => {
    await helpers.click(loginPage.loginButton);
});

Then(/^I enter username as '(.*?)'$/, async (text: string) => {
    await helpers.enterText(loginPage.usernameTextBox, text);
});

Then(/^I enter password as '(.*?)'$/, async (text: string) => {
    await helpers.enterText(loginPage.passwordTextBox, text);
});

Then(/^I validate page url as '(.*?)'$/, async (url: string) => {
    expect(helpers.getUrl()).to.equal(url);
});

Then(/^I validate logout button$/, async () => {
    expect(await helpers.isDisplayed(loginPage.logoutButton)).to.equal(true);
});

Then(/^I validate header text as '(.*?)'$/, async (text: string) => {
    expect(await helpers.getText(loginPage.headerText)).to.equal(text);
});

Then(/^I validate sub-header text as '(.*?)'$/, async (text: string) => {
    expect(await helpers.getText(loginPage.subHeaderText)).to.equal(text);
});

Then(/^I validate error message '(.*?)'$/, async (message: string) => {
    expect(await helpers.getText(loginPage.errorMessage)).to.equal(message);
});
