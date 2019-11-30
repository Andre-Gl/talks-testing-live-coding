const data = require('./data');

module.exports = {
  getStatesAbbrList: () => Object.keys(data.getStates()),
  zipLookup: (zip) => {
    if (typeof zip === 'undefined' || !zip.length) {
      return Promise.reject('Zip code is required');
    }

    return data.zipLookup(zip).then((result) => {
      return result.state;
    });
  },
};
