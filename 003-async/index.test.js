const states = require('./index');

let statesAbbrList;

beforeEach(() => {
  statesAbbrList = states.getStatesAbbrList();
});

test('getStatesAbbrList', () => {
  expect(statesAbbrList.length).toBe(51);
  expect(statesAbbrList).toContain('CA');
});

describe('zipLookup', () => {
  it('should resolve correct zip', () => {
    return states.zipLookup('94085').then(state => expect(state).toEqual('CA'));
  });

  it('should resolve correct zip | using resolves', () => {
    expect.assertions(1);
    return expect(states.zipLookup('94085')).resolves.toEqual('CA');
  });

  it('should reject on invalid zip', () => {
    expect.assertions(1);
    return states.zipLookup('').catch(e =>
      expect(e).toEqual('Zip code is required'),
    );
  });

  it('should reject on invalid zip | using rejects', () => {
    expect.assertions(1);
    return expect(states.zipLookup('')).rejects.toMatch('Zip code is required');
  });
});
