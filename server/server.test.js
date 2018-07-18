const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('# Server', () => {
    describe('## GET /', () => {
        it('Should return hello world response.', done => {
            request(app)
                .get('/')
                .expect(404)
                // .expect({
                //     error: "Page not found"
                // })
                .expect(res => {
                    expect(res.body)
                        .toInclude({
                            error: "Page not found"
                        });
                })
                .end(done);
        });
    });
    
    describe('## GET /users', () => {
        it('Should return users object', done => {
            request(app)
                .get('/users')
                .expect(200)
                .expect(res => {
                    expect(res.body)
                        .toInclude({
                            name: "Eksa",
                            age: 19
                        });
                })
                .end(done);
        });
    });
});