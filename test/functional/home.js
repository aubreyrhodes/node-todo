import { withinServer, browser } from './test_helper';

withinServer(() => {
  describe('home', () => {
    before((done) => {
      browser.visit('/', done);
    });

    it('should say hello world', () => {
      browser.assert.text('h1', 'Hello World');
    });
  });
});