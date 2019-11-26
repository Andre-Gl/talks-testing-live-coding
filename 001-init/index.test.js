const states = require('./index');

let statesAbbrList;

beforeEach(() => {
  statesAbbrList = states.getStatesAbbrList();
});

test('getStatesAbbrList', () => {
  expect(statesAbbrList).toBeDefined();
});
