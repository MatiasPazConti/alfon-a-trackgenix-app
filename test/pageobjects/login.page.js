

const Page = require('./page');


class LoginPage extends Page {

     get btnLogin () {
        return $('.navbar_buttonItem__IZsPX');
    }

    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }


    async login (email, password) {
        await this.btnLogin.click();
        await this.browser.pause(1000);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
