module.exports = {

    "@tags": ['login', 'all'],

    "loginWithPhone": (browser) => {

        const {emailPhoneField, passwordField, submitButton, checkbox} = browser.globals.login_fields;
        const {credentials} = browser.globals;

        browser
            .url(browser.globals.urls.login)
            .setValue(emailPhoneField, credentials.phone)
            .setValue(passwordField, credentials.password)
            .click(checkbox)
            .click(submitButton)
            .pause(8000)
            .assert.urlContains('/linkemail')
        ;
    }
};