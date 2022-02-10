const Employee = require('../teamMembers');
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('../Manager');
const Engineer = require ('./Engineer');
const Intern = require ('../Intern');

const OUTPUT_DIR = path.resolve(_dirname, "output")
const outputPath = path.join(OUT_DIR, "team.html");

const teamMembers =[];


