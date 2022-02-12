const fs = require("fs");
const path = require ("path");
const htmlDir= path.resolve(__dirname,'./teamProfile.html');

const generateTeamProfile = (teamMembers) => {
    
    const HTML = [];

    let buildteamProfile = teamMembers => {
        console.log(buildteamProfile);
          let teamProfileHtml =

     `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
       <title> Team Profile Generator</title>
        </head>
        <body>
        <header class="text-center p-4" style="background-color:#05668d !important">
        <h1> Team Profile </h1>
        </header>

        <main> ${generateTeamProfile(teamMembers)}</main>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
        crossorigin="anonymous"></script>

        <script src="https://kit.fontawesome.com/8a966edc12.js" crossorigin="anonymous"></script>
        </body>
        </html>
    
    `
    ;
   
    HTML.push(
    teamProfileHtml
    .filter((teamMembers)=>teamMembers.getRole() === "Manager")
    .map((manager) =>renderManager(manager))
    );
    
    HTML.push(
    teamProfileHtml
    .filter((teamMembers)=>teamMembers.getRole()==="Engineer")
    .map((engineer)=>renderEngineer(engineer))
    );

    HTML.push(
    teamProfileHtml
    .filter((teamMembers)=>teamMembers.getRole() === "Intern")
    .map((intern)=> renderIntern(intern))
    );
    
    return renderFullMarkdown(HTML.join(""));


    }

    let buildManager = manager => {
        console.log(buildManager);
        let managerHtml = `

        <div class="d-flex justify-content-around flex-wrap mt-5 m-3">
        <div class="card-header">
        ${manager.name} <br/>
        <i class="fa-duotone fa-alicorn"></i> Manager</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email:<span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>

        `;
        HTML.push(managerHtml);
    
    }

    const buildEngineer = engineer => {
        console.log(buildEngineer);
        let engineerHtml = `
            
        <div class="d-flex justify-content-around flex-wrap mt-5 m-3">
        <div class="card-header">
        ${engineer.name} <br/>
        <i class="fa-duotone fa-angel"></i> Engineer</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email:<span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
        <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/Lilyfields"> ${engineer.githubUsername}</a></li>
        </ul>
        </div>
            
         `;

        HTML.push(engineerHtml);
    
    }

    let buildIntern = intern => {
        console.log(buildIntern);
        let internHtml = `
    
            <div class="d-flex justify-content-around flex-wrap mt-5 m-3">
            <div class="card-header">
            ${intern.name} <br/>
            <i class="fa-duotone fa-dove"></i> Intern</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email:<span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
            </div>
    
            `;

        HTML.push(internHtml);
    

    }

   const renderFullMarkdown = (_HTML)=>{
       fs.readFileSync(path.resolve(htmlDir,"full-markdown.html"),"utf8");
   }



};

    

    for ( const n in teamMembers) {
        return (`key is:${n} and value is: ${teamMembers[n]}`)
    

    }
        
    

    module.exports = teamMembers;

    
  


