const calculator = (number1, number2) => {
  const operations = {
    sum: Math.floor(number1 + number2),
    mult: Math.floor(number1 * number2),
    div: Math.floor(number1 / number2),
    sub: Math.floor(number1 - number2),
  };
  return operations;
};

const arrayGenerator = (type, object) => Object[type](object);

module.exports = { calculator, arrayGenerator };
