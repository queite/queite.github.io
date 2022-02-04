const olCart = document.querySelector('.cart__items');
const cartIcon = document.querySelector('.material-icons');
const cartTitle = document.querySelector('.container-cartTitle');
const cart = document.querySelector('.cart');

// Recupera itens do carrinho
function getCartItens() {
  const cartItems = Array.from(document.getElementsByClassName('cart__item'));
  return cartItems;
}

// Atualiza contagem de itens do carrinho
function totalItens() { 
  count.innerHTML = getCartItens().length;
}

// Calcula preço total
function totalPrice() {
  const products = getCartItens();
  let total = 0;
  products.forEach((product) => {
   total += parseFloat(product.innerText.split('$')[1]);
  });
  return total;
}
// Ajuda para chegar a lógica de cálculo do preço total em https://github.com/tryber/sd-016-a-project-shopping-cart/blob/felipe-david-shopping-cart/script.js

// Atualiza preço
function updatePrice() {
  const price = document.querySelector('.total-price');
  price.innerText = totalPrice();
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

// Remove item do carrinho ao ser clicado e atualiza local storagegit
function cartItemClickListener(event) {
  if (event.target.classList.contains('cart__item')) {
    event.target.remove();
    totalItens();
    updatePrice();
    saveCartItems(olCart.innerHTML);
  }
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// Coloca item no carrinho e chama função para salvar em localStorage
async function addToCart(idProduct) {
  const { id, title, price } = await fetchItem(idProduct);
  const liCart = createCartItemElement({ sku: id, name: title, salePrice: price });
  olCart.appendChild(liCart);
  saveCartItems(olCart.innerHTML);
  totalItens();
  cart.style.display = 'flex';
  cartTitle.style.display = 'flex';
  updatePrice();
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const addButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  addButton.addEventListener('click', () => addToCart(sku)); // Ajuda para inserir o escutador no repositório https://github.com/tryber/sd-016-a-project-shopping-cart/blob/fabiana-lopes-shopping-cart/script.js
  section.appendChild(addButton);

  return section;
}

// Elimina elemento loading
function removeLoading() {
  document.querySelector('.loading').remove();
}

// Joga dados do fetch para HTML
const setProduct = async () => {
  const itemsSection = document.querySelector('.items');
  const { results } = await fetchProducts('computador');
  results.forEach((product) => {
    const newSection = createProductItemElement({ 
      sku: product.id, 
      name: product.title,
      price: `R$ ${product.price}`,
      image: product.thumbnail });
    itemsSection.appendChild(newSection);
  });
  removeLoading();
};

// Recupera dados do local storage
function cartRecover() {
  const localStg = JSON.parse(getSavedCartItems());
  olCart.innerHTML = localStg;
  olCart.addEventListener('click', cartItemClickListener);
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

// Esvazia carrinho
function clearCart() {
  olCart.innerHTML = '';
  saveCartItems(olCart.innerHTML);
  totalItens();
  updatePrice();
}
const clearButton = document.querySelector('.empty-cart');

// Abre e fecha carrinho
function showHideCart() {
  if (cart.style.display && cartTitle.style.display === 'flex') {
    cart.style.display = 'none';
    cartTitle.style.display = 'none';
  } else {
    cart.style.display = 'flex';
    cartTitle.style.display = 'flex';
  } 
}

// Renderiza contagem carrinho
function createCount() {
  const count = document.createElement('span');
  count.id = 'count';
  cartIcon.appendChild(count);
}

// Renderiza preço total
function showPrice() {
  const label = document.createElement('span');
  label.innerText = 'Total:';
  label.className = 'label';
  const price = document.createElement('span');
  price.className = 'total-price';
  cart.appendChild(label);
  cart.appendChild(price);
}

window.onload = () => {
  setProduct();
  cartRecover();
  clearButton.addEventListener('click', clearCart);
  cartIcon.addEventListener('click', showHideCart);
  createCount();
  totalItens();
  showPrice();
  updatePrice();
};
