process.env.NODE_ENV = 'test';

import App from '../../src/server';
import http from 'http';
import Browser from 'zombie';

let server;
export const browser = new Browser({ site: 'http://localhost:5000' });

export function withinServer(tests){
  describe('home', () => {
    before(()  => {
      server = http.createServer(App).listen(5000);
    });

    after((done) => {
      server.close(done);
    })

    tests();
  });
}