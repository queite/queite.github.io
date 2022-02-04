const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  beforeAll(() => saveCartItems('<ol><li>Item</li></ol>'));

  it('Testa se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamadoclear', () => {
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Testa se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems.', () => {
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify('<ol><li>Item</li></ol>'));
    // Foi preciso incluir o  JSON.stringify porque ele está presente na função saveCartItems. Sem ele o teste não passa devido a stringficação.
  });
});
