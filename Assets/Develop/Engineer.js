const Employee = require ('../teamMembers');

class Engineer extends Employee {
    constructor ({name, id, email,githubUsername}) {
        super({name,id, email});
        this.githubUsername =githubUsername;
        this.role = "Engineer";
    }
    getGithubUsername (){
        return this.githubUsername;
    }
    getRole () {
        return "Engineer";
    }
}
module.exports = Engineer;