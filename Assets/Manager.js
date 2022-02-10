const Employee = require('./Employee')

class Manager extends Employee {
    constructor({name, id, email,officeNumber}) {
        super({name,email,id});
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole () {
        return "Manager";
    }

}

module.exports = Manager;