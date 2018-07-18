const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('Should call spies correctly', () => {
        let spy = expect.createSpy();

        spy("Eksa", 19);
        expect(spy).toHaveBeenCalledWith("Eksa", 19);
    });

    it('Should call saveUser with user object', () => {
        let email = 'pramindanata.eksa@gmail.com';
        let password = 'password';

        app.handleSignup(email, password);

        expect(db.saveUser).toHaveBeenCalledWith(({email, password}));
    });
});