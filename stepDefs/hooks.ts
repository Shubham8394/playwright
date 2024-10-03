import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
import { Helpers } from '../lib/helpers';
import { LoginPage } from '../pages/LoginPage';

var helpers = new Helpers();
var loginPage = new LoginPage();

BeforeAll(async () => {
    await helpers.launchBrowser();
});

Before(async () => {
    await helpers.launchUrl("https://practicetestautomation.com/practice-test-login/");
});

// After(async () => {
//     await helpers.click(loginPage.logoutButton);
// });

AfterAll(async () => {
    await helpers.closeBrowser();
});
