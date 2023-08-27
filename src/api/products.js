const API_KEY = "sk-hTrT64eb2083305901991";

const PRODUCTS_API = "https://dummyjson.com/products";

module.exports = {
  getProducts: () => fetch(PRODUCTS_API),
  getSingleProduct: (id) => fetch(`${PRODUCTS_API}/${id}`),
};
