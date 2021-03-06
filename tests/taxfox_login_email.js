module.exports = {

    "@tags": ['login', 'all'],

    "loginWithEmail": (browser) => {

        const {emailPhoneField, passwordField, submitButton, checkbox} = browser.globals.login_fields;
        const {unlinked_credentials: credentials} = browser.globals;

        browser
            .url(browser.globals.urls.login)
            .setValue(emailPhoneField, credentials.email)
            .setValue(passwordField, credentials.password)
            .click(checkbox)
            .click(submitButton)
            .pause(10000)
            .assert.urlContains('/linkphone', 'Unlinked email redirects to add phone option')
        ;
    }
};