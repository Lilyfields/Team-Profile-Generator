const fs = require("fs");
const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateSite = require('./generateSite');
const path=require("path");
const OUTPUT_DIR = path.resolve (__dirname,"html")
const outputPath = path.join(OUTPUT_DIR, "html");


const teamMembers = [];

//validation for repsonses. Prevent people from leaving questions blank.

const validateInput = (response) => {
    if (response === "") {
        return "Please answer question before continuing.";
    } else {
        return true;
    }
};

//initiate the teamProfile building process

 const init= async ()=> {
 
   
//inquirer prompts the usr with questions to select which team member they would like to enter information
       
const TeamProfileQs = [
                 
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
                validate: memberSelectionInput = () => {
                    if (memberSelectionInput) {
                        return true;
                    }else{
                        console.log ('Please select one of these options');
                        return false;
                    }}
                        
            },

        ];
//if the user click on none then the question then it will go to end stage.

const{createTeamProfile} = inquirer.prompt(TeamProfileQs);
createTeamProfile();

if (createTeamProfile === "none"){
    return builtProfile();
// if user chooses Manager, engineer, or intern then it will take to the respective process to create selected Member              
}else{
 if (memberSelectionInput ==="manager") {
return createManager();
 }

if (memberSelectionInput === "engineer"){
return createEngineer();
}
if(memberSelectionInput === "intern"){
return createIntern();
}
}
}                

//Above the Team member object is being created via users selection and response/input.


//if Manager was to be selected. it will activate the createManager funtion and inqirer will prompt array of questions to gather information on Manager.
//Similar to above information gathered will then be pushed through the TeamMember array. Call back function will return user to CreateTeamProfile upon completion.

const createManager= async ()=>{
    
        const createManagerQs= [

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
    ];


const {managerResponse} = inquirer.prompt(createManagerQs);
const manager = new Manager(managerResponse);
teamMembers.push(manager);
createTeamProfile();
};

//if Engineer was to be selected. it will activate the createEngineer funtion and inqirer will prompt array of questions to gather information on Engineer.
//Similar to above information gathered will then be pushed through the TeamMember array. Call back function will return user to CreateTeamProfile upon completion.


const createEngineer= async ()=>{

const createEngineerQs =[

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
  ];


const engineerResponse = inquirer.prompt(createEngineerQs);
const engineer = new Engineer(engineerResponse);
teamMembers.push(engineer);
createTeamProfile();


};

//if Itern was to be selected. it will activate the createEngineer funtion and inqirer will prompt array of questions to gather information on Intern.
//Similar to above information gathered will then be pushed through the TeamMember array. Call back function will return user to CreateTeamProfile upon completion.


const createIntern = async () => {

const createInternQs = [

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
    ];


const internResponse = inquirer.prompt (createInternQs);
const intern = new Intern(internResponse);
teamMembers.push(intern);
createTeamProfile();
};

// This fxn here is used to render the teamMember Array and write the file to the html folder.

function builtProfile() {
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath,generateSite(teamMembers),"utf-8");
}

//call back function to initiate the initial fxn and whole process again
init();
