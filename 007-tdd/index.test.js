const states = require('./index');

let statesAbbrList;

beforeEach(() => {
  statesAbbrList = states.getStatesAbbrList();
});

test('getStatesAbbrList', () => {
  expect(statesAbbrList).toMatchSnapshot();
});

describe('zipLookup', () => {
  it('should resolve correct zip', () => {
    expect.assertions(1);
    return expect(states.zipLookup('94085')).resolves.toMatchSnapshot();
  });


  it('should reject on invalid zip', () => {
    expect.assertions(1);
    return expect(states.zipLookup('')).rejects.toMatchSnapshot();
  });
});

describe('getStatesTypeAhead', () => {
  it('should return empty array when no input', () => {
    const result = states.getStatesTypeAhead();
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual([]);
  });
  it('should return array of states that starts with symbols', () => {
    const typeAheadInput = 'Al';
    const typeAheadResult = ['Alabama', 'Alaska'];
    const result = states.getStatesTypeAhead(typeAheadInput);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual(typeAheadResult);
  });
  it('should limit results to 3 matches', () => {
    const typeAheadInput = 'New';
    const typeAheadResult = ['New Hampshire', 'New Jersey', 'New Mexico'];
    const result = states.getStatesTypeAhead(typeAheadInput);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual(typeAheadResult);
  });
});
