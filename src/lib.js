const isEmpty = obj => {
  // returns an array
  const keys = Object.keys(obj);

  // if the length is zero, the object is empty then
  return keys.length === 0;
};

module.exports = { isEmpty };
