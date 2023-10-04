// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of this README?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Installation?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Usage?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What kind of license should you project have?',
            name: 'license',
            choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None']
        },
        {
            type: 'input',
            message: 'Contributors?',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'Tests?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])
.then((response) => {
    const readMe = `
# ${response.title}
## Badges
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
    
## Description 
${response.description}
## Table of Contents 
    
[Description](#Description)
    
[Installation](#Installation)
    
[Usage](#Usage)
    
[Licenses](#Licenses)
    
[Contributors](#Contributors)
    
[Tests](#Tests)
    
[Questions](#Questions)
    
## Installation 
To install necessary dependencies, run the following command:
${response.installation}
## Usage 
${response.usage}
## Licenses 
${response.license}
## Contributors
${response.contributors}
## Tests 
To run tests, run the following command:
${response.tests}
## Questions? 
If you have any questions about the repo, please contact me directly at ${response.email} or to see more of my work, my github username is ${response.github}.`;

    fs.writeFile('README.md', readMe, (err) => {
        if (err) throw err;
        console.log("README created!")
    })
});

// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
