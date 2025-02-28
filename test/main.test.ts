import request from 'supertest';
import { expect } from 'chai';
import {app, server} from '../main'; // Adjust the import according to your app's export

describe('GET /', () => {
  after(() => {
    server.close();
  });

  it('should return Hello World!', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello World!');
        expect(res.status).to.equal(200);
        done();
      });
  });
});
