

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EmployeePage extends Page {
    /**
     * define selectors using getter methods
     */

     get btnEmployee () {
        return $('//*[@id="root"]/div/div[1]/header/nav/div/ul/li[1]/a');
    }

    get newEmployee () {
        return $('//*[@id="root"]/div/div[2]/section/div/div/div[2]/img');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('employee');
    }
}

module.exports = new EmployeePage();