class LoginPage {
    get loginButton (){
        return $('//*[@id="root"]/div/div[1]/header/nav/div/div/button');
    }

    get emailInput () {
        return $('#email');
    }

    get passwordInput () {
        return $('#password');
    }

    async login (email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
    }
}

export default new LoginPage();