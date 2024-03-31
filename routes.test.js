
const request = require('supertest');
const app = require('./routes'); // assuming your Express app is exported from 'app.js'

describe('GET /fact', () => {
  it('should return an array of 100 non-empty strings', async () => {
    const response = await request(app).get('/fact');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.fact)).toBe(true);
    expect(response.body.fact.length).toBe(100);
    response.body.fact.forEach(item => {
      expect(typeof item).toBe('string');
      expect(item.trim().length).toBeGreaterThan(0);
    });
  });
});

describe('GET /', () => {
  it('should return an array with one non-empty string', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.fact)).toBe(true);
    expect(response.body.fact.length).toBe(1);
    expect(typeof response.body.fact[0]).toBe('string');
    expect(response.body.fact[0].trim().length).toBeGreaterThan(0);
  });
});

