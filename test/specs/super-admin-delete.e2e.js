const LoginPage = require ('../pageobjects/login.page')
const SuperAdminPage = require ('../pageobjects/super-admin.page')
const AdminsListPage = require ('../pageobjects/admins-list.page')

describe('Delete Admin', () => {
    beforeAll('Navigate URL', () => {
        browser.url('https://alfon-a-trackgenix-eejrv4lm4-basp-a2022.vercel.app/');
    })

    it('should deleted admin successfully', async () => {
        await LoginPage.loginButton.click();
        await LoginPage.login('orodrig9@hostgator.com', 'q3obMq4sAa0');
        await browser.pause(2000);
        await expect(browser).toHaveUrl('https://alfon-a-trackgenix-eejrv4lm4-basp-a2022.vercel.app/');
        await SuperAdminPage.selectAdmins.click();
        await expect(browser).toHaveUrl('https://alfon-a-trackgenix-eejrv4lm4-basp-a2022.vercel.app/admins');
        await AdminsListPage.deleteButton.click();
        await AdminsListPage.modalDelete.waitForDisplayed({timeout: 2000});
        // await SuperAdminPage.logOutButton.click();
        // await browser.refresh();
    });
});