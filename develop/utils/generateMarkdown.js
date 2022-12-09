// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contribution}

## License

${data.license}

---

## Badges

![](https://img.shields.io/badge/license-${data.license}-yellow)

## Tests

${data.tests}

[GitHub Link](https://github.com/${data.contact})
`;
}

module.exports = generateMarkdown;
