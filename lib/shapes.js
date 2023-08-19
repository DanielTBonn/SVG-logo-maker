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
<rect x="50" y="50" width="100" height="100" stroke="${this.shapeColor}" fill="${this.shapeColor}" />
<text x="77" y="107" font-size="25" font-weight="bold" fill="${this.textColor}">${this.logo}</text>
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
<circle cx="100" cy="100" r="50" height="100" stroke="${this.shapeColor}" fill="${this.shapeColor}" />
<text x="77" y="107" font-size="25" font-weight="bold" fill="${this.textColor}">${this.logo}</text>
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
<polygon points="50 150, 100 50, 150 150"  height="100" stroke="${this.shapeColor}" fill="${this.shapeColor}" />
<text x="77" y="107" font-size="25" font-weight="bold" fill="${this.textColor}">${this.logo}</text>
</svg>`
        
        return svg;
    }
}

const shape = new Triangle('HIT', 'black', 'pink', 'square');
const svgEle = shape.createShape();
// const data = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewbox="0 0 100 100" >
// <rect x="50" y="50" width="100" height="100" stroke="black" fill="transparent" stroke-width="1"/>
// </svg>`

writeToFile('another.svg', svgEle)


// module.exports = Shapes;