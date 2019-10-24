const get = require('lodash.get');

const isExists = (data = false, path = false) => {
  if (data === false || path === false ) {
    return false;
  }
  return Boolean(get(data, path));
};


module.exports = {
  isExists,
  get
}