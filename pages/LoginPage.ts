

export class LoginPage {

    get usernameTextBox() {
        return "[id='username']";
    }

    get passwordTextBox() {
        return "[id='password']";
    }

    get loginButton() {
        return "[id='submit']";
    }

    get headerText() {
        return "[class='post-title']";
    }

    get subHeaderText() {
        return "strong";   
    }

    get logoutButton() {
        return "[class*='block-button__link']";
    }

    get errorMessage() {
        return "[id='error']"
    }
}
