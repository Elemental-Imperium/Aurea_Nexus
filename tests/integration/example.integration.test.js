const request = require('supertest');
const express = require('express');

const app = express();
app.get('/status', (req, res) => {
  res.json({ status: 'API is running' });
});

describe('GET /status', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/status')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
