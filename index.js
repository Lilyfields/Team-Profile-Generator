const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const render = require('./generateSite');



const teamMembers = [];



const validateInput = (response) => {
    if (response === "") {
        return "Please answer question before continuing.";
    } else {
        return true;
    }
};

//initiate the teamProfile building process

 function teamMemberQs(){
 
   
//inquirer prompts the usr with questions to select which team member they would like to enter information
       
inquirer.prompt([
                 
            {
               
                type:"input",
                message: "Please enter this person name?",
                name:"responseName",
                validate: validateInput,
            
            },

            {
               
                type:"input",
                massage:"Please enter this person id?",
                name:"responseID",
                validate: validateInput,
            },

            {
               
                type:"input",
                message:"Please enter this person Email?",
                name:"responseEmail",
                validate:function (value){
                    let pass =value.match (
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
                    if (pass) {
                        return true;
                    }else{
                        return "Please enter a valid email address";
                    }
                }
            },

            {
                type: "list",
                message: "Please choose the person role",
                name:"responseRole",
                choices: ["Engineer","Intern", "Manager"],
            },

        ]).then(function(response) {
            if (response.responseRole === "Manager"){
                managerQs(response);
            }else if (response.responseRole === "Engineer") {
                engineerQs(response);
            }else{
                internQs(response);
            }

            })
        }


        function managerQs(baseResponse) {
            inquirer.prompt ([
                   {
                       
                       type: "input",
                       message: "Please enter the person Office Number?",
                       name: "responseOfficeNumber",
                       validate: validateInput
                   },
           
               {
                   
                   type:"confirm",
                   message: "Would you like add another person?",
                   name:"responseConfirmation",
               },
           
               ]).then(function(response) {
                   const createManager = new  Manager (baseResponse.responseName, baseResponse.responseID, baseResponse. responseEmail, response.responseOfficeNumber);
                   teamMembers.push(createManager);
                   if(response.responseConfirmation === true) {
                       teamMemberQs()
                   
                   }else{
                       builtTeamProfile();
                       console.log ("rendered")
                   }
               })
           
           }



   
 
 function engineerQs(baseResponse) {
 inquirer.prompt ([
        {
            
            type: "input",
            message: "Please enter the person Github Username?",
            name: "responseGithubUsername",
            validate: validateInput,
                
        },

    {
      
        type:"confirm",
        message: "Would you like add another person?",
        name:"responseConfirmation",
    },

    ]).then(function (response) {
        const createEngineer = new Engineer(baseResponse.responseName, baseResponse.responseID, baseResponse. responseEmail, response.responseGithubUsername);
        console.log(baseResponse);
        console.log(response);
        teamMembers.push(createEngineer);
        if(response.responseConfirmation === true) {
            teamMemberQs()
        
        }else{
            builtTeamProfile();
            console.log ("rendered")
        }
    })

}

async function internQs(baseResponse) {
   const response = await inquirer.prompt ([
           {
               
               type: "input",
               message: "Please enter the person University or college name?",
               name: "responseSchool",
               validate: validateInput
                   
           },
   
       {
           
           type:"confirm",
           message: "Would you like add another person?",
           name:"responseConfirmation",
       },
   
       ]);
    const createIntern = new Intern(baseResponse.responseName, baseResponse.responseID, baseResponse. responseEmail, response.responseSchool);
    teamMembers.push(createIntern);
    if(response.responseConfirmation === true) {
        teamMemberQs()
           
           }else{
               builtTeamProfile();
               console.log ("rendered")
           }
   }
   function builtTeamProfile() {
       const HTML =render(teamMembers);
       fs.writeFileSync("team-profile.html",HTML,(err)=>{
           if(err) {
             console.log(err);  
           }else{
               console.log("success");
           }
       });

    }
   
    

teamMemberQs();
