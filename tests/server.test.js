const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('responds with 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /fact', () => {
  it('responds with 200 status code', async () => {
    const response = await request(app).get('/fact');
    expect(response.statusCode).toBe(200);
  });
});

