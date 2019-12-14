const states = require('./index');

let statesAbbrList;

beforeEach(() => {
  statesAbbrList = states.getStatesAbbrList();
});

describe('getStatesAbbrList', () => {
  it('should return list of abbreviations', () => {
    expect(statesAbbrList).toBeDefined();
  });
});
