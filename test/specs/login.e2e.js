const LoginPage = require('../pageobjects/login.page');
const EmployeePage = require('../pageobjects/employee.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('pepito@algo.com', '12345678');
        await expect(browser).toHaveUrl(
            'https://alfon-a-trackgenix-app.vercel.app/');
        await EmployeePage.btnEmployee.click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl(
            'https://alfon-a-trackgenix-app.vercel.app/employees');
    });
});


