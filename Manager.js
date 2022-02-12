const TeamMembers = require('./teamMembers')

class Manager extends TeamMembers {
    constructor({name, id, email,officeNumber}) {
        super({name,id,email});
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole () {
        return this.role;
    }

}

module.exports = Manager;