// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GPL 3.0':
      return '![License: GPL 3.0](https://img.shields.io/badge/License-GPL3.0-red)';
    case 'BSD 3-Clause':
      return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD3--Clause-purple)' 
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/license/MIT'
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0'
    case 'BSD 3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause'
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license !== 'None') {
    return `
## License

This project is licensed under the ${license} license. For more information, refer to the [license documentation](${renderLicenseLink(license)}). `
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${response.title}
`  
}
  



module.exports = generateMarkdown
