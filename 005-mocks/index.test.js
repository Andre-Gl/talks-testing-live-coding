const mockStatesData = { 'TST' : 'Test' };
const mockZipLookupData = { state: 'TST' };
const mockGetStatesFn = jest.fn().mockImplementation(() => mockStatesData);

const mockZipLookupFn = jest.fn().mockImplementation(() => Promise.resolve(mockZipLookupData));

jest.mock('./data', () => ({
  getStates: mockGetStatesFn,
  zipLookup: mockZipLookupFn,
}));

const states = require('./index');

let statesAbbrList;

beforeEach(() => {
  statesAbbrList = states.getStatesAbbrList();
});

describe('getStatesAbbrList', () => {
  it('should return list of abbreviations', () => {
    expect(statesAbbrList).toMatchSnapshot();
  });
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
