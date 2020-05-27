module.exports = {

    "@tags": ['login', 'all'],

    "loginWithEmail": (browser) => {

        const {emailPhoneField, passwordField, submitButton, checkbox} = browser.globals.login_fields;
        const {linked_credentials: credentials} = browser.globals;

        browser
            .url(browser.globals.urls.login)
            .setValue(emailPhoneField, credentials.email)
            .setValue(passwordField, credentials.password)
            .click(checkbox)
            .click(submitButton)
            .pause(10000)
            .assert.urlContains('/dashboard/welcome', 'Linked email redirects to welcome page')
        ;
    }
};