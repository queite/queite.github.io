const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  
  it('Verifica se o retorno da função createMenu() é um objeto que possui a chave fetchMenu, a qual tem como valor uma função.', () => {
    expect(typeof createMenu()).toBe('object');
    expect(typeof createMenu().fetchMenu).toBe('function');
  });

  it('Verifica se createMenu({ food: {}, drink: {} }) retorna { food: {}, drink: {}}', () => {
    expect(createMenu({ food: {}, drink: {} }).fetchMenu()).toEqual({ food: {}, drink: {}});
  });

  it('Verifica se o menu passado pra função createMenu é identico ao menu recuperado pela função objetoRetornado.fetchMenu', () => {
    expect(createMenu({food: 'pasta', drink: 'vinho'}).fetchMenu()).toEqual({food: 'pasta', drink: 'vinho'});
  });
  
  it('Verifique se objetoRetornado.consumption, após a criação do menu, retorna um array vazio', () => {
    expect(createMenu({food: 'pasta', drink: 'vinho'}).consumption).toHaveLength(0);
  });
  
  it('Verifique se "objetoRetornado.order("coxinha")" retorna "coxinha" no array "objetoRetornado.consumption"', () => {
    const restaurant = createMenu({food: 'pasta', drink: 'vinho'});
    restaurant.order('coxinha');
    expect(restaurant.consumption).toContain('coxinha');
  });
 
  it('Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    const restaurant = createMenu({food: 'pasta', drink: 'vinho'});
    restaurant.order('coxinha');
    restaurant.order('agua');
    restaurant.order('sopa');
    restaurant.order('sashimi');
    expect(restaurant.consumption).toContain('coxinha', 'agua','sopa', 'sashimi');
  });
  
  it('Verifica se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption', () =>{
    const restaurant = createMenu({food: 'pasta', drink: 'vinho'});
    restaurant.order('coxinha');
    restaurant.order('agua');
    restaurant.order('coxinha');
    expect(restaurant.consumption).toEqual(['coxinha', 'agua', 'coxinha']);
  });
  
  it('Verifica se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption', () => {
    const restaurant = createMenu({food: {coxinha: 4.9, pastel: 5}, drink: {agua: 3, cerveja: 6.9}});
    restaurant.order('coxinha');
    restaurant.order('agua');
    restaurant.order('coxinha');
    expect(restaurant.pay()).toBe(14.08);
  });
});
