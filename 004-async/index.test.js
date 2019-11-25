// const mockData = {'TST' : 'Test'};
// const mockStatesFn = jest.fn().mockImplementation(() => mockData);
// const mockZipLookupFn = jest.fn().mockImplementation(() => mockData);
//
// jest.mock('./data', () => ({
//   getStates: mockStatesFn,
//   zipLookup:
// }));

const states = require('./index');

test('getStatesAbbrList', () => {
  expect(states.getStatesAbbrList().length).toBe(51);
  // expect(states.getStatesAbbrList().length).toBe(1);
  // expect(states.getStatesAbbrList()).toContain('TST');
  // expect(mockFn).toHaveBeenCalled();
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
