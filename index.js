// imported modules necessary to make this package run
const inquirer = require('inquirer');
const {Square, Circle, Triangle}= require('./lib/shapes.js')
const { writeFile } = require('fs/promises');
const { validateHTMLColorName } = require('validate-color');

// created the questions that the user will be asked
questions = [
    {
        type: 'input',
        name: 'logo',
        message: 'Enter up to three characters to generate your logo.',
        // validates user entry between 1 and 3 characters inclusive
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
        // validates user entry that is a valid css color or valid hexadecimal
        validate(value) {
            let regExp = /^#[0-9A-F]{6}$/i;
            return regExp.test(value) || validateHTMLColorName(value) || "You must enter a valid color";
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape for your logo.',
        // choices for shapes
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape using a keyword or hexadecimal (i.e. red or #FF0000).',
        // validates user entry that is a valid css color or valid hexadecimal
        validate(value) {
            let regExp = /^#[0-9A-F]{6}$/i;
            return regExp.test(value) || validateHTMLColorName(value) || "You must enter a valid color"; 
        },
    }
]

// calls the inquirer module and then asks the users questions
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        // formats answers properly and renders the svg file
        answers.logo = answers.logo.toUpperCase();
        answers.textColor = answers.textColor.toLowerCase();
        answers.shapeColor = answers.shapeColor.toLowerCase();
        let svgGenerated = getShape(answers);
        writeFile('./examples/logo.svg', svgGenerated);
        console.log("Generated logo.svg")
    })
    // error handling
    .catch((error) => {
        if (error) {
            console.log("There was an error.")
            console.log(error)
        }
    });
}

// chosen shape gets rendered and returned to be written to a file
function getShape(answers) {
    let shape;
    if (answers.shape === 'square') {shape = new Square(answers.logo, answers.textColor, answers.shapeColor, answers.shape)}
    else if (answers.shape === 'circle') {shape = new Circle(answers.logo, answers.textColor, answers.shapeColor, answers.shape)}
    else {shape = new Triangle(answers.logo, answers.textColor, answers.shapeColor, answers.shape)}
    return shape.createSvg(shape.render(), shape.renderText());
}

init();
