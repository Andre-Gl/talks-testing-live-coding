const data = require('./data');

module.exports = {
  getStatesAbbrList: () => Object.keys(data.getStates()),
  zipLookup: (zip) =>
    data.zipLookup(zip)
    .then((result) => {
      return result.state;
    }),
};
