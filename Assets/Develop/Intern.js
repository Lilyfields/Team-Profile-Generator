const TeamMembers = require ('./teamMembers');

class Intern extends TeamMembers {
    constructor ({name, id, email,school}) {
        super ({name,id, email});
        this.school = school;
        this.role = "Intern";
    }
        
getSchool () {
    return this.school;
}
getRole () {
    return "Intern";
}
}

module.exports= Intern;