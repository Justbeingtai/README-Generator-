const inquirer = require('inquirer');
const fs = require('fs');

inquirer 
  .promt ( [
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
