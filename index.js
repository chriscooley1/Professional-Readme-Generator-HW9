const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "what is your project name?",
    },
    {
        type: "input",
        name: "description",
        message: "Project description: ",
    },
    {
        type: "checkbox",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["Apache 2.0", "MIT", "GNU GPL v3.0"],
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use the project?",
    },
    {
        type: "input",
        name: "install",
        message: "How do you install this project?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?",
    },
    {
        type: "input",
        name: "tests",
        message: "List any tests for this project:",
    },
    {
        type: "input",
        name: "githubURL",
        message: "GitHub username: ",
    },
    {
        type: "input",
        name: "email",
        message: "Email address: ",
    },
])
.then((answers) => {
    fs.writeFileSync("readME.md", generateMarkdown({...answers}), (err) => {
        if (err) throw err;
        console.log("Success!")
    })
});
