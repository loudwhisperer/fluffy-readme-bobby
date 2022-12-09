// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {writeFile} = fs.promises
const markDown = require("../utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your application",
    name: "title",
  },
  {
    type: "input",
    message: "What do people need to do to install your application?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use your application?",
    name: "usage",
  },
  {
    type: "input",
    message: "Who contributed to your project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What tests did you write if any to test out your application?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your Git Hub Username and email?",
    name: "contact",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userData) => {
        const formattedText = markDown(userData)
        writeToFile("dist/readme.md", formattedText)
    })
}

// Function call to initialize app
init();
