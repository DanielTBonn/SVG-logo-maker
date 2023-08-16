const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js')
const fs = require('fs');

questions = [
    {
        type: 'input',
        name: 'logo',
        message: 'Enter up to three characters to generate your logo',
        validate(value) {
            if (value.length <= 3 && value.length > 1) {
                return true;
            }
            return "You must enter up to three characters"
        }
    }
]

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        let result = JSON.stringify(answers, null, '  ');
        console.log('Answers:')
        console.log(result);
    })
    .catch((error) => {
        if (error) {
            console.log("There was an error.")
        }
    });
}

init()