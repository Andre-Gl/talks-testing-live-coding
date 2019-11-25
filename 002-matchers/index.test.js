const states = require('./index');

test('getStatesAbbrList', () => {
  // Defined/Undefined
  expect(states.getStatesAbbrList()).toBeDefined();
  // Types
  expect(states.getStatesAbbrList()).toEqual(expect.anything());
  expect(states.getStatesAbbrList()).toEqual(expect.any(Array));
  // Numbers
  expect(states.getStatesAbbrList().length).toBeGreaterThan(1);
  expect(states.getStatesAbbrList().length).toEqual(51);
  // Boolean
  expect(states.getStatesAbbrList().includes('CA')).toBeTruthy();
  expect(states.getStatesAbbrList().includes('AC')).toBeFalsy();
  // Strings
  expect(states.getStatesAbbrList()[0]).toEqual('AZ');
  expect(states.getStatesAbbrList()[0]).toMatch(/AZ/);
  // Arrays
  expect(states.getStatesAbbrList()).toContain('CA');
  expect(states.getStatesAbbrList()).not.toContain('AC');
});
