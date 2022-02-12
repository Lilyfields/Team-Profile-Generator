const TeamMembers = require ('./teamMembers');

class Engineer extends TeamMembers{
    constructor ({name, id, email,githubUsername}) {
        super({name,id, email});
        this.githubUsername =githubUsername;
        this.role = "Engineer";
    }
    getGithubUsername (){
        return this.githubUsername;
    }
    getRole () {
        return this.role;
    }
}
module.exports = Engineer;