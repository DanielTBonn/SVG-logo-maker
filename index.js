const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js')
const fs = require('fs');

questions = [
    {
        type: 'input',
        name: 'logo',
        message: 'Enter up to three characters to generate your logo.',
        validate(value) {
            if (value.length <= 3 && value.length > 0) {
                return true;
            }
            return "You must enter up to three characters"
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text using a keyword or hexadecimal (i.e. red or #FF0000).',
        validate(value) {
            // if (value.length <= 3 && value.length > 1) {
            //     return true;
            // }
            return true;
            return "You must enter a valid color"
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape for your logo.',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape using a keyword or hexadecimal (i.e. red or #FF0000).',
        validate(value) {
            // if (value.length <= 3 && value.length > 1) {
            //     return true;
            // }
            return true;
            return "You must enter a valid color"
        },
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

init();