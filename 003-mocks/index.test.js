const mockData = {'TST' : 'Test'};
const mockFn = jest.fn().mockImplementation(() => mockData);

jest.mock('./data', () => ({
  getStates: mockFn,
}));

const states = require('./index');

test('getStatesAbbrList', () => {
  expect(states.getStatesAbbrList().length).toBe(1);
  expect(states.getStatesAbbrList()).toContain('TST');
  expect(mockFn).toHaveBeenCalled();
});
