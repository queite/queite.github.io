const saveCartItems = (olCart) => localStorage.setItem('cartItems', JSON.stringify(olCart));
// Ajuda com local Storage (salvar e recuperar valores) no repositório https://github.com/tryber/sd-016-a-project-shopping-cart/blob/Douglas-Rabelo-Shopping-Cart/script.js

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
