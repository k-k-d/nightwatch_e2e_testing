module.exports = {

    "@tags": ['register', 'all'],

    "1": (browser) => {

        const {emailField, passwordField, confirmPasswordField, submitButton,} = browser.globals.register_fields;

        browser
            .url(browser.globals.urls.register)
            .assert.visible(emailField, 'Email field rendered')
            .assert.not.elementPresent(passwordField, 'Password field not rendered')
            .assert.not.elementPresent(confirmPasswordField, 'Confirm password field not rendered')
            .assert.domPropertyEquals(submitButton, 'disabled', true, 'Submit button disabled')
        ;
    },

    "2": (browser) => {

        const {emailField, passwordField, confirmPasswordField, submitButton, helperText, freeSpace} = browser.globals.register_fields;

        browser
            .setValue(emailField, "invalid_email")
            .click(freeSpace)
            .assert.domPropertyEquals(emailField, 'value', "invalid_email", "Email value rendered correctly")
            .assert.not.elementPresent(passwordField, 'Password field not rendered')
            .assert.not.elementPresent(confirmPasswordField, 'Confirm password field not rendered')
            .assert.domPropertyEquals(submitButton, 'disabled', true, 'Submit button disabled')
            .assert.elementPresent(helperText, 'Helper text rendered')
            .assert.containsText(helperText, 'Not a valid Email', 'Helper text is correct')
            .assert.elementPresent('.Mui-error', 'Red border on email field')
        ;
    },

    "3": (browser) => {

        const {emailField, passwordField, confirmPasswordField, submitButton, freeSpace, helperText} = browser.globals.register_fields;

        browser
            .clearValue(emailField)
            .setValue(emailField, "valid@email.com")
            .click(freeSpace)
            .assert.domPropertyEquals(emailField, 'value', "valid@email.com", "Email value rendered correctly")
            .assert.elementPresent(passwordField, 'Password field rendered')
            .assert.not.elementPresent(confirmPasswordField, 'Confirm password field not rendered')
            .assert.domPropertyEquals(submitButton, 'disabled', true, 'Submit button disabled')
            .assert.not.elementPresent(helperText, 'Helper text not rendered')
            .assert.not.elementPresent('.Mui-error', 'Green border on email field')
        ;
    },

    "4": (browser) => {

        const {passwordField, confirmPasswordField, submitButton, freeSpace, passwordCriterionFailed} = browser.globals.register_fields;

        browser
            .setValue(passwordField, "InvalPass")
            .click(freeSpace)
            .assert.domPropertyEquals(passwordField, 'value', "InvalPass", "Password value rendered correctly")
            .assert.not.elementPresent(confirmPasswordField, 'Confirm password field not rendered')
            .assert.domPropertyEquals(submitButton, 'disabled', true, 'Submit button disabled')
            .assert.elementPresent(passwordCriterionFailed, 'Atleast one password criterion shows failure');
        ;
    },

    "5": (browser) => {

        const {passwordField, confirmPasswordField, submitButton, freeSpace, passwordCriterionFailed} = browser.globals.register_fields;

        browser
            .clearValue(passwordField)
            .setValue(passwordField, "ValPass123!")
            .click(freeSpace)
            .assert.domPropertyEquals(passwordField, 'value', "ValPass123!", "Password value rendered correctly")
            .assert.elementPresent(confirmPasswordField, 'Confirm password field rendered')
            .assert.domPropertyEquals(submitButton, 'disabled', true, 'Submit button disabled')
            .assert.not.elementPresent(passwordCriterionFailed, 'All password criterion show success')
        ;
    },

    "6": (browser) => {

        const {confirmPasswordField, submitButton, freeSpace, helperText} = browser.globals.register_fields;

        browser
            .setValue(confirmPasswordField, "DifferentPass")
            .click(freeSpace)
            .assert.domPropertyEquals(confirmPasswordField, 'value', "DifferentPass", "Confirm password value rendered correctly")
            .assert.domPropertyEquals(submitButton, 'disabled', true, 'Submit button disabled')
            .assert.elementPresent(helperText, 'Helper text rendered')
            .assert.containsText(helperText, 'Password and Confirm Password do not match', 'Helper text is correct')
            .assert.elementPresent('.Mui-error', 'Red border on confirm password field')
        ;
    },

    "7": (browser) => {

        const {confirmPasswordField, submitButton, freeSpace, helperText} = browser.globals.register_fields;

        browser
            .clearValue(confirmPasswordField)
            .setValue(confirmPasswordField, "ValPass123!")
            .click(freeSpace)
            .assert.domPropertyEquals(confirmPasswordField, 'value', "ValPass123!", "Confirm password value rendered correctly")
            .assert.domPropertyEquals(submitButton, 'disabled', false, 'Submit button enabled')
            .assert.not.elementPresent(helperText, 'Helper text not rendered')
            .assert.not.elementPresent('.Mui-error', 'Green border on confirm password field')
        ;
    },

    "8": (browser) => {

        const {TnC, PP} = browser.globals.register_fields;

        browser
            .click(TnC)
            .assert.urlContains(browser.globals.urls.TnC, 'Terms and conditions navigated')
            .back()
            .click(PP)
            .assert.urlContains(browser.globals.urls.PP, 'Privacy policy navigated')
        ;
    },
};