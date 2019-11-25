const data = require('./data');

module.exports = {
  getStatesAbbrList: () => Object.keys(data.getStates()),
};
