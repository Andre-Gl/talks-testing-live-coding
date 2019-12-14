const data = require('./data');

// polyfill for older nodejs
Object.values = (obj) => Object.keys(obj).map(k => obj[k]);

module.exports = {
  getStatesAbbrList: () => Object.keys(data.getStates()),
  getStatesTypeAhead: (input) => {
    if (typeof input === 'undefined' || !input.length) {
      return [];
    }
    return Object.values(data.getStates()).filter((state) => state.indexOf(input) === 0).slice(0, 3);
  },
};
