const {readFile, writeFile} = require('fs/promises');

function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log(`\n${fileName} created successfully!`);
      })
}

class Shapes {
    constructor(logo, textColor, shapeColor) {
        this.logo = logo;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    createShape() {

    }
}

class Square extends Shapes {
    constructor(logo, textColor, shapeColor, shape) {
        super(logo, textColor, shapeColor)
        this.shape = shape;   
    }

    createShape() {
       const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewbox="0 0 100 100" >
<rect x="33%" y="25%" width="33%" height="50%" stroke="${this.shapeColor}" fill="${this.shapeColor}" />
<text x="50%" y="50%" font-size="30" text-anchor="middle" dominant-baseline="middle"font-weight="bold" fill="${this.textColor}">${this.logo}</text>
</svg>`
        
        return svg;
    }
}

class Circle extends Shapes {
    constructor(logo, textColor, shapeColor, shape) {
        super(logo, textColor, shapeColor)
        this.shape = shape;   
    }

    createShape() {
       const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewbox="0 0 100 100" >
<circle cx="50%" cy="50%" r="25%" stroke="${this.shapeColor}" fill="${this.shapeColor}" />
<text x="50%" y="50%" font-size="35" text-anchor="middle" dominant-baseline="middle"font-weight="bold" fill="${this.textColor}">${this.logo}</text>
</svg>`
        
        return svg;
    }
}

class Triangle extends Shapes {
    constructor(logo, textColor, shapeColor, shape) {
        super(logo, textColor, shapeColor)
        this.shape = shape;   
    }

    createShape() {
       const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewbox="0 0 100 100" >
<polygon points="70 150, 150 10, 230 150" stroke="${this.shapeColor}" fill="${this.shapeColor}" />
<text x="50%" y="50%" font-size="25" text-anchor="middle" dominant-baseline="middle"font-weight="bold" fill="${this.textColor}">${this.logo}</text>
</svg>`
        
        return svg;
    }
}

const shape = new Circle('HIT', 'black', 'yellow', 'square');
const svgEle = shape.createShape();



writeToFile('another.svg', svgEle)

module.exports = {Shapes, Square, Circle, Triangle};