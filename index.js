const inquirer = require('inquirer');
const {Square, Circle, Triangle}= require('./lib/shapes.js')
const { writeFile } = require('fs/promises');
const { validateHTMLColorName } = require('validate-color');

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
            let regExp = /^#[0-9A-F]{6}$/i;
            return regExp.test(value) || validateHTMLColorName(value) || "You must enter a valid color";
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
            let regExp = /^#[0-9A-F]{6}$/i;
            return regExp.test(value) || validateHTMLColorName(value) || "You must enter a valid color"; 
        },
    }
]

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        answers.logo = answers.logo.toUpperCase();
        answers.textColor = answers.textColor.toLowerCase();
        answers.shapeColor = answers.shapeColor.toLowerCase();
        let svgGenerated = getShape(answers);
        writeFile('logo.svg', svgGenerated);
        console.log("Generated logo.svg")
    })
    .catch((error) => {
        if (error) {
            console.log("There was an error.")
            console.log(error)
        }
    });
}

function getShape(answers) {
    let shape;
    if (answers.shape === 'square') {shape = new Square(answers.logo, answers.textColor, answers.shapeColor, answers.shape)}
    else if (answers.shape === 'circle') {shape = new Circle(answers.logo, answers.textColor, answers.shapeColor, answers.shape)}
    else {shape = new Triangle(answers.logo, answers.textColor, answers.shapeColor, answers.shape)}
    return shape.createSvg(shape.render(), shape.renderText());
}

init();
