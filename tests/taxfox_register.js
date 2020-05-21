module.exports = {
    "1": (browser) => {

        const {emailField, passwordField, confirmPasswordField, submitButton,} = browser.globals;

        browser
            .url('https://uat.taxfox.co.in/en/register/')
            .assert.visible(emailField, 'Email field rendered')
            .assert.not.elementPresent(passwordField, 'Password field not rendered')
            .assert.not.elementPresent(confirmPasswordField, 'Confirm password field not rendered')
            .assert.domPropertyEquals(submitButton, 'disabled', true, 'Submit button disabled')
        ;
    },
    "2": (browser) => {

        const {emailField, passwordField, confirmPasswordField, submitButton, freeSpace} = browser.globals;

        browser
            .setValue(emailField, "invalid_email")
            .click(freeSpace)
            .assert.domPropertyEquals(emailField, 'value', "invalid_email", "Email value rendered correctly")
            .assert.not.elementPresent(passwordField, 'Password field not rendered')
            .assert.not.elementPresent(confirmPasswordField, 'Confirm password field not rendered')
            .assert.domPropertyEquals(submitButton, 'disabled', true, 'Submit button disabled')
            // .waitForElementPresent('p[class="MuiFormHelperText-root"]', 15000, false)
            // .assert.elementPresent('p[class="MuiFormHelperText-root"]', 'Helper text rendered')
            // .saveScreenshot("tests_output/scrnsht.png");
        ;
    },
    "3": (browser) => {

        const {emailField, passwordField, confirmPasswordField, submitButton, freeSpace} = browser.globals;

        browser
            .clearValue(emailField)
            .setValue(emailField, "valid@email.com")
            .assert.domPropertyEquals(emailField, 'value', "valid@email.com", "Email value rendered correctly")
            .assert.elementPresent(passwordField, 'Password field rendered')
            .assert.not.elementPresent(confirmPasswordField, 'Confirm password field not rendered')
            .assert.domPropertyEquals(submitButton, 'disabled', true, 'Submit button disabled')
            .click(freeSpace)
            // .assert.cssProperty('div[class="MuiInputBase-root"]', 'border-color', 'rgb(94, 210, 145)')
            // .waitForElementPresent('p[class="MuiFormHelperText-root"]', 15000, false)
            // .assert.elementPresent('p[class="MuiFormHelperText-root"]', 'Helper text rendered')
            // .saveScreenshot("tests_output/scrnsht.png");
        ;
    },
    "5": (browser) => {

        const {emailField, passwordField, confirmPasswordField, submitButton, freeSpace} = browser.globals;

        browser
            .setValue(passwordField, "ValPass123!")
            .click(freeSpace)
            .assert.domPropertyEquals(passwordField, 'value', "ValPass123!", "Password value rendered correctly")
            .assert.elementPresent(confirmPasswordField, 'Confirm password field rendered')
            .assert.domPropertyEquals(submitButton, 'disabled', true, 'Submit button disabled')
            // .assert.cssProperty('div[class="MuiInputBase-root"]', 'border-color', 'rgb(94, 210, 145)')
            // .waitForElementPresent('p[class="MuiFormHelperText-root"]', 15000, false)
            // .assert.elementPresent('p[class="MuiFormHelperText-root"]', 'Helper text rendered')
            // .saveScreenshot("tests_output/scrnsht.png");
        ;
    },
    "7": (browser) => {

        const {emailField, passwordField, confirmPasswordField, submitButton, freeSpace} = browser.globals;

        browser
            .setValue(confirmPasswordField, "ValPass123!")
            .click(freeSpace)
            .assert.domPropertyEquals(confirmPasswordField, 'value', "ValPass123!", "Confirm password value rendered correctly")
            .assert.domPropertyEquals(submitButton, 'disabled', false, 'Submit button disabled')
            // .assert.cssProperty('div[class="MuiInputBase-root"]', 'border-color', 'rgb(94, 210, 145)')
            // .waitForElementPresent('p[class="MuiFormHelperText-root"]', 15000, false)
            // .assert.elementPresent('p[class="MuiFormHelperText-root"]', 'Helper text rendered')
            // .saveScreenshot("tests_output/scrnsht.png");
        ;
    }
};