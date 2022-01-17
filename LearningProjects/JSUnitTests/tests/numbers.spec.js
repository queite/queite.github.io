/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se numbers([1, 2, 3, 4, 5]) retorna true', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });

  it('Verifica se numbers([1, 2, \'3\', 4, 5]) retorna false', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBe(false);
  });

  it('Verifica se numbers([1, \'a\', 3]) retorna false', () => {
    expect(numbers([1, 'a', 3])).toBe(false);
  });

  it('Verifica se numbers([\' \']) retorna false', () => {
    expect(numbers([' '])).toBe(false);
  });
});
