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
            message: 'Table of Contents?',
            name: 'table of contents',
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
            type: 'input',
            message: 'License?',
            name: 'license',
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
            message: 'Questions?',
            name: 'questions',
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
    const readMe = `# ${response.title}
## Description 
${response.description}
## Table of Contents 
${response.tableofcontents}
## Installation 
${response.installation}
## Usage 
${response.usage}
## Licenses 
${response.license}
## Contributors
${response.contributors}
## Tests 
${response.tests}
## Questions? 
${response.questions}
## Github Email 
${response.github}
## Email 
${response.email}`;
    fs.writeFile('README.md', readMe, (err) => {
        if (err) throw err;
        console.log("README created!")
    })
}
);

// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
