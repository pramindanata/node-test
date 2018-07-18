const expect = require('expect');

const utils = require('./utils');

it('Should add two numbers.', () => {
    let result = utils.add(2, 3);

    // if (result !== 5) throw new Error(`Expected 5, but got ${result}`);
    expect(result)
        .toBe(5)
        .toBeA('number');
});

it('Should square a number', () => {
    let result = utils.square(5);

    // if (result !== 25) throw new Error(`Expected 25, but got ${result}`);
    expect(result)
        .toBe(25)
        .toBeA('number');
});

it('Should async add two numbers', done => {
    utils.asyncAdd(5, 2, (sum) => {
        expect(sum)
            .toBe(7)
            .toBeA('number');

        done();
    });
});

it('Should async square a number', done => {
    utils.asyncSquare(9, (square) => {
        expect(square).toBe(81);

        done();
    });
});

it('Should verify first name and last name are set', () => {
    let result = utils.setName({}, "Eksa Pramindanata");
    
    expect(result)
        .toBeA('object')
        .toInclude({
            firstName: "Eksa",
            lastName: "Pramindanata"
        });
});

// it('Should expect some values', () => {
//     // expect(11).toNotBe(11);

//     // expect({
//     //     name: "Eksa"
//     // })
//     // .toEqual({
//     //     name: "Eksa"
//     // });

//     // expect([1, 2, 3, 4, 7]).toInclude(5);

//     expect({
//         name: "Eksa",
//         age: 19
//     })
//     .toExclude({
//         age: 23
//     });
// });