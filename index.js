const inquirer = require('inquirer');
const fs = require('fs');

inquirer 
  .prompt ( [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
    default: `1. Initialize the project by creating a basic package.json file:
   \`\`\`bash
   npm init
   \`\`\`
    2. Install the necessary dependencies:
   \`\`\`bash
   npm install inquirer
   \`\`\``
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
    default: `1. Require the \`inquirer\` package in your JavaScript file:
   \`\`\`javascript
   const inquirer = require('inquirer');
   \`\`\`
    2. Use \`inquirer\` to create a list of prompts in the terminal that ask questions and display the answers in a newly generated README file.`
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
    default: `I've utilized resources from my bootcamp classes, Stack Overflow, and WEBmd to help me complete this project. Contributions are welcome from anyone, but please make sure to follow the existing code style and submit any changes via pull requests.`
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
    default: `I've run the tests through the terminal and observed the successful generation of a new README file. To test, simply run the application and verify that the README.md file is created as expected.`
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  }
])
  .then((answers) => {
  const readmeContent = generateReadme(answers);
  fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('README.md generated successfully!')
  );
});

function generateReadme(answers) {
  return `
# ${answers.title}

![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.

## Questions
For any questions, please contact me:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
  `;
}