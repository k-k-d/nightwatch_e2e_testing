module.exports = {

    "@tags": ['login', 'all'],

    "loginWithEmail": (browser) => {

        const {emailPhoneField, passwordField, submitButton, checkbox} = browser.globals.login_fields;
        const {credentials} = browser.globals;

        browser
            .url(browser.globals.urls.login)
            .setValue(emailPhoneField, credentials.email)
            .setValue(passwordField, credentials.password)
            .click(checkbox)
            .click(submitButton)
            .pause(10000)
            .assert.urlContains('/linkphone')
        ;
    },

    "providePhone": (browser) => {
        const {field, submitButton} = browser.globals.link_page;
        const {credentials} = browser.globals;

        browser
            .setValue(field, credentials.phone)
            .pause(5000)
            .click(submitButton)
            .pause(10000)
        ;
    }
};