const states = require('./index');

let statesAbbrList;

beforeEach(() => {
  statesAbbrList = states.getStatesAbbrList();
});

test('getStatesAbbrList', () => {
  // Defined/Undefined
  expect(statesAbbrList).toBeDefined();
  // Types
  expect(statesAbbrList).toEqual(expect.anything());
  expect(statesAbbrList).toEqual(expect.any(Array));
  // Numbers
  expect(statesAbbrList.length).toBeGreaterThan(1);
  expect(statesAbbrList.length).toEqual(51);
  // Boolean
  expect(statesAbbrList.includes('CA')).toBeTruthy();
  expect(statesAbbrList.includes('AC')).toBeFalsy();
  // Strings
  expect(statesAbbrList[0]).toEqual('AZ');
  expect(statesAbbrList[0]).toMatch(/AZ/);
  // Arrays
  expect(statesAbbrList).toContain('CA');
  expect(statesAbbrList).not.toContain('AC');
});
