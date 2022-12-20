const LandingPage = require('../pageobjects/landing.page');
const LoginPage = require('../pageobjects/login.page');
const HomePageLogged = require('../pageobjects/homepage-logged.page');
const AdminsListPage = require('../pageobjects/admins-list.page');
const FormPage = require('../pageobjects/form-admins.page');

describe('Add new Admin', () => {
  beforeAll('Navigate URL', () => {
    browser.url('https://alfon-a-trackgenix-app.vercel.app/home');
  });
  it('should edited admin successfully', async () => {
    await LandingPage.loginButton.click();
    await LoginPage.login('ana@super-admin.com', '12345superadmin');
    await expect(browser).toHaveUrl('https://alfon-a-trackgenix-app.vercel.app/home');
    await HomePageLogged.selectAdmins.click();
    await expect(browser).toHaveUrl('https://alfon-a-trackgenix-app.vercel.app/admins');
    await AdminsListPage.editButton.click();
    await FormPage.editAdmin(
      'Testeado',
      'Juan',
      'algo@alguien.com',
      '47112225',
      '77547774',
      'Lugar 1234'
    );
    await expect(FormPage.successfullyMessage).toHaveTextContaining('Admin edited successfully!');
    await FormPage.confirmButton.click();
    await HomePageLogged.logOutButton.click();
    await expect(browser).toHaveUrl('https://alfon-a-trackgenix-app.vercel.app/home');
    await browser.refresh();
  });
});
