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
  expect(states.getStatesAbbrList()).toMatchSnapshot();
});

describe('zipLookup', () => {
  it('should resolve correct zip', () => {
    expect.assertions(1);
    return expect(states.zipLookup('94085')).resolves.toEqual('CA');
  });


  it('should reject on invalid zip', () => {
    expect.assertions(1);
    return expect(states.zipLookup('')).rejects.toMatch('Zip code is required');
  });
});
