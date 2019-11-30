const data = jest.genMockFromModule('../data');

const mockStatesData = { 'TST' : 'Test' };
const mockZipLookupData = { state: 'TST' };
const mockGetStatesFn = jest.fn().mockImplementation(() => mockStatesData);
const mockZipLookupFn = jest.fn().mockImplementation(() => Promise.resolve(mockZipLookupData));

data.getStates = mockGetStatesFn;
data.zipLookup = mockZipLookupFn;

module.exports = data;
