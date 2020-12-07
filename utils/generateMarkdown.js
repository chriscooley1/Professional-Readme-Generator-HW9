// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
##Description
${data.description}

##Table of Contents
* [Installation](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Contact](#contact)

## Installation
${data.install}
## Usage
${data.usage}
## Contributors
${data.contributors}
## Tests
${data.tests}
## License
${data.license}
## Contact
Github Profile: [${data.githubURL}](${data.githubURL})
Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
