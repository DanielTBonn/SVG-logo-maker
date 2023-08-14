# User Story

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Additional Notes

Ask a user for a 3 letter input, what color the text will be, what shape the logo will be [circle, triangle, square], and the color of the shape. Use jest to run unit tests and inquirer for collecting user input. 

Submit a sample SVG file generated, the Github repo containing the code, and a walkthrough video.

Walkthrough video must show all tests passing, invoke the application from the command line, demonstrate how responses are entered, and show the generated .svg file being opened in the browser.