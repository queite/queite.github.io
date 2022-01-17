/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {

  it('Testa se circle retorna undefined, caso o parâmetro passado não seja um número.', () => {
    expect(circle('a')).toBeUndefined();
  });
  
  it('Testa se circle retorna um objeto.', () => {
    expect(typeof circle(3)).toBe('object');
  });

  it('Testa se o objeto retornado tem 3 propriedades.', () => {
    expect(Object.keys(circle(3)).length).toBe(3);
  });

  it('Testa se a função, quando não recebe nenhum parâmetro, retorna undefined.', () => {
    expect(circle()).toBeUndefined();
  });

  it('Testa se a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.', () => {
    expect(circle(2).circumference).toBeCloseTo(12.56);
  });

  it('Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.', () => {
    expect(circle(3).area).toBeCloseTo(28.26);
  });

  it('Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.', () => {
    expect(circle(3).area).toBeCloseTo(28.26);
    expect(circle(3).circumference).toBeCloseTo(18.84);
    expect(circle(3).radius).toBeCloseTo(3);
  });
});
