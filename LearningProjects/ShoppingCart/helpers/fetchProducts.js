const fetchProducts = async (arg) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${arg}`;
  const result = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
