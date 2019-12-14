const data = jest.genMockFromModule('../data');

const mockStatesData = {
  'TST0' : 'Test0',
  'TST1' : 'Test1',
  'TST2' : 'Test2',
  'TST3' : 'Test3'
};
const mockZipLookupData = { state: 'TST' };
const mockGetStatesFn = jest.fn().mockImplementation(() => mockStatesData);
const mockZipLookupFn = jest.fn().mockImplementation(() => Promise.resolve(mockZipLookupData));

data.getStates = mockGetStatesFn;
data.zipLookup = mockZipLookupFn;

module.exports = data;
