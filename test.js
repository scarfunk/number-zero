/* eslint-disable func-names */

var assert = require('assert');


describe('The object is exported correctly', function () {
  it('The exported object should be equal to 0', function () {
    assert.equal(require('./index'), 0);
  });
});
