// Parent class of all shapes, contains methods to change properties and render different elements of the svg file
class Shapes {
    constructor(logo, textColor, shapeColor) {
        this.logo = logo;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.fontSize = 30;
    }
    
    setLogo(newLogo) {
        this.logo = newLogo;
    }

    setTextColor(newColor) {
        this.textColor = newColor;
    }

    setColor(newColor) {
        this.shapeColor = newColor
    }

    renderText() {
        const renderedLogo = `<text x="50%" y="50%" font-size="${this.fontSize}" text-anchor="middle" dominant-baseline="middle" font-weight="bold" fill="${this.textColor}">${this.logo}</text>`;
        return renderedLogo;
    }

    createSvg(renderedShape, renderedLogo) {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewbox="0 0 100 100" >
    ${renderedShape}
    ${renderedLogo}
</svg>`
        return svg;
    }
}

// class with properties exclusive to the square class, will only render a square
class Square extends Shapes {
    constructor(logo, textColor, shapeColor, shape) {
        super(logo, textColor, shapeColor)
        this.shape = shape;   
        this.fontSize = 30;
    }

    render() {
        const shape = `<rect x="33%" y="25%" width="33%" height="50%" stroke="${this.shapeColor}" fill="${this.shapeColor}" />`
        return shape;
    }
}

// class with properties exclusive to the circle class, will only render a circle
class Circle extends Shapes {
    constructor(logo, textColor, shapeColor, shape) {
        super(logo, textColor, shapeColor)
        this.shape = shape;
        this.fontSize = 35;   
    }

    render() {
        const shape = `<circle cx="50%" cy="50%" r="25%" stroke="${this.shapeColor}" fill="${this.shapeColor}" />`
        return shape;
    }
}

// class with properties exclusive to the triangle class, will only render a triangle
class Triangle extends Shapes {
    constructor(logo, textColor, shapeColor, shape) {
        super(logo, textColor, shapeColor)
        this.shape = shape;
        this.fontSize = 25;   
    }

    render() {
        const shape = `<polygon points="70 150, 150 10, 230 150" stroke="${this.shapeColor}" fill="${this.shapeColor}" />`
        return shape;
    }
}

// exported classes that may be used in other files
module.exports = {Shapes, Square, Circle, Triangle};