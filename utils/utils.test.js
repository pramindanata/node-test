const utils = require('./utils');

it('Should add two numbers.', function() {
    let result = utils.add(2, 3);

    if (result !== 5) throw new Error(`Expected 5, but got ${result}`);
});

it('Should square a number', function() {
    let result = utils.square(5);

    if (result !== 25) throw new Error(`Expected 25, but got ${result}`);
});