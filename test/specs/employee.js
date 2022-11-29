const { BrowserRouter } = require('react-router-dom');
const LoginPage = require('../pageobjects/login.page');

describe('Employee tests', () => {
    beforeAll ('Navigate to url', () => {
        browser.url ('https://alfon-a-trackgenix-app.vercel.app/');
        LoginPage.login('', '');
    });


});