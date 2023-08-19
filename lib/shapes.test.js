const {Shapes, Square, Circle, Triangle} = require('./shapes.js')

describe('Square', () => {

    describe('renders', () => {
        it('should return true if the value returned matches the expected value', () => {
            const expected = '';
            const result = new Square('hi', 'hi', 'hi', 'hi');
            expect(result).toEqual(expected);
        });
    });
    describe('renders', () => {
        it('should return true if the value returned matches the expected value', () => {
            const expected = `<rect x="33%" y="25%" width="33%" height="50%" stroke="red" fill="red" />`
            const shape = new Square("DTB", 'white', 'blue', 'square');
            // shape.setColor('red');
            const result = shape.render();
            expect(result).toEqual(expected);
        });
    });
});