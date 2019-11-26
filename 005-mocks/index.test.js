const mockStatesData = { 'TST' : 'Test' };
const mockZipLookupData = { state: 'TST' };
const mockGetStatesFn = jest.fn().mockImplementation(() => mockStatesData);

let shouldResolveZipLookup = true;
const mockZipLookupFn = jest.fn().mockImplementation(() => {
  if (shouldResolveZipLookup) {
    return Promise.resolve(mockZipLookupData);
  } else {
    return Promise.reject('Error');
  }
});

jest.mock('./data', () => ({
  getStates: mockGetStatesFn,
  zipLookup: mockZipLookupFn,
}));

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
    shouldResolveZipLookup = true;
    return expect(states.zipLookup('94085')).resolves.toMatchSnapshot();
  });


  it('should reject on invalid zip', () => {
    expect.assertions(1);
    shouldResolveZipLookup = false;
    return expect(states.zipLookup('')).rejects.toMatchSnapshot();
  });
});
