const TeamMembers = require('./teamMembers')

class Manager extends TeamMembers {
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