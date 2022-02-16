const fs= require ("fs");
const path = require ("path");
const templatesDir = path.resolve(__dirname,'html Templates');

const render = teamMembers => {

const HTML = [];
console.log(teamMembers);
HTML.push(...teamMembers
    .filter(teamMembers =>teamMembers.getRole() === "Manager")
    .map(manager =>renderManager(manager))
    );
    
HTML.push(...teamMembers
    .filter(teamMembers=>teamMembers.getRole()==="Engineer")
    .map(engineer=>renderEngineer(engineer))
    );

HTML.push(...teamMembers
    .filter(teamMembers=>teamMembers.getRole() === "Intern")
    .map(intern=> renderIntern(intern))
    );
    
    return renderFullMarkdown(HTML.join(""));

    };

    const renderManager = (manager) => {
        let template = fs.readFileSync(path.resolve(templatesDir,"manager.html"), "utf8");
        template = replacePlaceholders(template,"name", manager.getName());
        template = replacePlaceholders(template,"id", manager.getId());
        template = replacePlaceholders(template,"email", manager.getEmail());
        template = replacePlaceholders(template,"OfficeNumber", manager.getOfficeNumber());
        template = replacePlaceholders(template,"role", manager.getRole());
        return template;
    };

    const renderEngineer = (engineer) => {
        let template = fs.readFileSync(path.resolve(templatesDir,"engineer.html"), "utf8");
        template = replacePlaceholders(template,"name", engineer.getName());
        template = replacePlaceholders(template,"id", engineer.getId());
        template = replacePlaceholders(template,"email", engineer.getEmail());
        template = replacePlaceholders(template,"githubUsername", engineer.getGithubUsername());
        template = replacePlaceholders(template,"role", engineer.getRole());
        return template;
    };

    const renderIntern = (intern) => {
        let template = fs.readFileSync(path.resolve(templatesDir,"intern.html"), "utf8");
        template = replacePlaceholders(template,"name", intern.getName());
        template = replacePlaceholders(template,"id", intern.getId());
        template = replacePlaceholders(template,"email", intern.getEmail());
        template = replacePlaceholders(template,"school", intern.getSchool());
        template = replacePlaceholders(template,"role", intern.getRole());
        return template;
    };

    const renderFullMarkdown = (HTML) => {
        const templates =fs.readFileSync(path.resolve(templatesDir,"team-profile.html"),"utf8");
        return replacePlaceholders(templates, "teamMembers", HTML);
    };

    const replacePlaceholders = (template, placeholder,value) => {
        const pattern =new RegExp(`{{${placeholder}}}`, "gm");
        return template.replace(pattern, value);
    };

    module.exports = render;