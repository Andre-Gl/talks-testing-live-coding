const states = require('./index');

test('getStatesAbbrList', () => {
  expect(states.getStatesAbbrList()).toBeDefined();
});
