const fs = require("fs");
const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateSite = require ('./generateSite')
const OUTPUT_DIR = path.resolve(_dirname, "output");
const outputPath = path.join(OUTPUT_DIR,"teamProfile.html");


const teamMembers = [];

const validateInput = (response) => {
    if (response === "") {
        return "Please answer question before continuing.";
    } else {
        return true;
    }
};

let userChoice = inquirer.prompt (choices);


    const createTeamProfile = () => {
        return inquirer.prompt([
                 
            {
                name: "memberSelection",
                type: "list",
                message: "Please choose the module you would like to add to the team profile.",
                choices: [
                    { name: "Manager", value: "manager", short: "Manager" },
                    { name: "Engineer", value: "engineer", short: "Engineer" },
                    { name: "Intern", value: "intern", short: "Intern" },
                    { name: "None", value: "none", short: "None" },
                    
                ],
                validate: userChoice = ()=> {
                    if (userChoice === "none"){
                        return buildProfile();
                    
                    }else{
                        if (userChoice ==="manager") {
                            return createManager();
                        }
                        if (userChoice === "engineer"){
                            return createEngineer();
                        }
                        if(userChoice === "intern"){
                            return createIntern();
                        }
                    }

                }
            },

        ])};



const createManager = () => {
    return inquirer.prompt ([

        {
            type: "input",
            name: "name",
            message: "Please enter the person name?",
            validate: validateInput,
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the person id?",
            vaildate: validateInput,
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the person email?",
            validate: validateInput,
        },
        {
            type: "input",
            name: "OfficeNumber",
            message: "Please enter the person office number?",
            validate: function (value) {
                let pass = value.match(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
                if (pass) {
                    return true;
                } else {
                    return "Please enter a valid office number?";
                }
            }
        },
    ]);
}

const managerResponse = inquirer.prompt(response);
const manager = new Manager(managerResponse);
teamMembers.push(manager);
createTeamProfile();


const createEngineer = () => {
    return inquirer.prompt ([

        {
            type: "input",
            name: "name",
            message: "Please enter the person name?",
            validate: validateInput,
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the person id?",
            vaildate: validateInput,
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the person email?",
            validate: validateInput,
        },
        {
            type: "input",
            name: "githubUsername",
            message: "Please enter the person Github Username?",
            validate: function (value) {
                let pass = value.match(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
                if (pass) {
                    return true;
                } else {
                    return "Please enter a valid Github Username.";
                }
            }
        },
    ]);
}

const engineerResponse = inquirer.prompt(response);
const engineer = new Engineer(engineerResponse);
teamMembers.push(engineer);
createTeamProfile();

const createIntern = () => {
    return inquirer.prompt ([

        {
            type: "input",
            name: "name",
            message: "Please enter the person name?",
            validate: validateInput,
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the person id?",
            vaildate: validateInput,
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the person email?",
            validate: validateInput,
        },

        {
            type: "input",
            name: "school",
            message: "Please enter the person school name?",
            validate: validateInput,
        },
    ]);
}

const internResponse = inquirer.prompt(response);
const intern = new Intern(internResponse);
teamMembers.push(intern);
createTeamProfile ();


const buildProfile = () => {
    console.log (`
    ***Team Profile Completed!***
    `);

    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outpath,generateSite(teamMembers), "utf-8");
}

createTeamProfile();
