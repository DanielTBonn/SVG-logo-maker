const {Shapes, Square, Circle, Triangle} = require('./shapes.js')

describe('Square', () => {
    describe('shape renders', () => {
        it('should return true if the shape properly renders', () => {
                const expected = `<rect x="33%" y="25%" width="33%" height="50%" stroke="red" fill="red" />`
                const shape = new Square("DTB", 'white', 'red', 'square');
                const result = shape.render();
                expect(result).toEqual(expected);
        });
    });
    describe('changing shape property renders', () => {
        it('should return true if the changed property is set in the rendered result', () => {
            const expected = `<rect x="33%" y="25%" width="33%" height="50%" stroke="red" fill="red" />`
            const shape = new Square("DTB", 'white', 'blue', 'square');
            shape.setColor('red');
            const result = shape.render();
            expect(result).toEqual(expected);
        });
    });
    describe('text renders', () => {
        it('should return true if the text element is properly rendered', () => {
            const expected = `<text x="50%" y="50%" font-size="30" text-anchor="middle" dominant-baseline="middle" font-weight="bold" fill="white">DTB</text>`
            const shape = new Square("DTB", 'white', 'blue', 'square');
            const result = shape.renderText();
            expect(result).toEqual(expected);
        });
    });
    describe('changing text property renders', () => {
        it('should return true if the changed property is set in the rendered result', () => {
            const expected = `<text x="50%" y="50%" font-size="30" text-anchor="middle" dominant-baseline="middle" font-weight="bold" fill="white">DTB</text>`
            const shape = new Square("GIT", 'black', 'blue', 'square');
            shape.setLogo("DTB");
            shape.setTextColor("white");
            const result = shape.renderText();
            expect(result).toEqual(expected);
        });
    });
    describe('svg renders', () => {
        it('should return true if the svg file is rendered correctly', () => {
            const expected = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewbox="0 0 100 100" >
    <rect x="33%" y="25%" width="33%" height="50%" stroke="blue" fill="blue" />
    <text x="50%" y="50%" font-size="30" text-anchor="middle" dominant-baseline="middle" font-weight="bold" fill="white">GIT</text>
</svg>`
            const shape = new Square("GIT", 'white', 'blue', 'square');
            const renderedShape = shape.render();
            const renderedLogo = shape.renderText();

            const result = shape.createSvg(renderedShape, renderedLogo);
            expect(result).toEqual(expected);
        });
    });
});

describe('Circle', () => {
    describe('shape renders', () => {
        it('should return true if the shape properly renders', () => {
                const expected = `<rect x="33%" y="25%" width="33%" height="50%" stroke="red" fill="red" />`
                const shape = new Square("DTB", 'white', 'red', 'square');
                const result = shape.render();
                expect(result).toEqual(expected);
        });
    });
    describe('changing shape property renders', () => {
        it('should return true if the changed property is set in the rendered result', () => {
            const expected = `<rect x="33%" y="25%" width="33%" height="50%" stroke="red" fill="red" />`
            const shape = new Square("DTB", 'white', 'blue', 'square');
            shape.setColor('red');
            const result = shape.render();
            expect(result).toEqual(expected);
        });
    });
    describe('text renders', () => {
        it('should return true if the text element is properly rendered', () => {
            const expected = `<text x="50%" y="50%" font-size="30" text-anchor="middle" dominant-baseline="middle" font-weight="bold" fill="white">DTB</text>`
            const shape = new Square("DTB", 'white', 'blue', 'square');
            const result = shape.renderText();
            expect(result).toEqual(expected);
        });
    });
    describe('changing text property renders', () => {
        it('should return true if the changed property is set in the rendered result', () => {
            const expected = `<text x="50%" y="50%" font-size="30" text-anchor="middle" dominant-baseline="middle" font-weight="bold" fill="white">DTB</text>`
            const shape = new Square("GIT", 'black', 'blue', 'square');
            shape.setLogo("DTB");
            shape.setTextColor("white");
            const result = shape.renderText();
            expect(result).toEqual(expected);
        });
    });
    describe('svg renders', () => {
        it('should return true if the svg file is rendered correctly', () => {
            const expected = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewbox="0 0 100 100" >
    <rect x="33%" y="25%" width="33%" height="50%" stroke="blue" fill="blue" />
    <text x="50%" y="50%" font-size="30" text-anchor="middle" dominant-baseline="middle" font-weight="bold" fill="white">GIT</text>
</svg>`
            const shape = new Square("GIT", 'white', 'blue', 'square');
            const renderedShape = shape.render();
            const renderedLogo = shape.renderText();

            const result = shape.createSvg(renderedShape, renderedLogo);
            expect(result).toEqual(expected);
        });
    });
});