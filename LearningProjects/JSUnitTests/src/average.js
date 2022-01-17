const average = (array) => {
  const isNumber = array.some((item) => typeof item !== 'number');
  if (isNumber || array.length === 0) {
    return undefined;
  }
    const total = array.reduce((acc, item) => acc + item);
    return Math.round(total / array.length);
};

module.exports = average;
