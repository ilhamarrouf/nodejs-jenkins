const supertest = require('supertest');
const server = supertest.agent('http://localhost:4321');

describe('sample unit test', () => {
  it('should return json with message `Hello World!`', (done) => {
    server.get('/')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, {
        message: 'Hello World!'
      })
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
});
