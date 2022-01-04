const { getAllCategories } = require('../../src/db/categories');

describe('Testing Category', function() {
  test('testing category api', function() {
    return expect(getAllCategories).resolves;
  })
})
