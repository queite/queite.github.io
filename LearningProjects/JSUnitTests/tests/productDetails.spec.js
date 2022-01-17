const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Testa se productDetails é uma função', () => {
    expect( typeof productDetails).toBe('function');
  });

  it('Testa se o retorno da função é um array', () => {
    expect(() => Array.isArray(productDetails('Máscara', 'Luva')).toBe(true));
  });

  it('Testa se o array retornado pela função contém dois itens dentro', () =>{
    expect(productDetails('Máscara', 'Luva')).toHaveLength(2);
  });

  it('Testa se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof productDetails('Máscara', 'Luva')).toBe('object');
  });

  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(() => productDetails('Máscara', 'Luva')[0] !== productDetails('Máscara', 'Luva')[1]).toBeTruthy();
  });

  it('Testa se os dois productIds terminam com 123.', () => {
    expect(productDetails('Máscara', 'Luva')[0].details.productId && productDetails('Máscara', 'Luva')[1].details.productId).toMatch(/123$/);
  });
});
