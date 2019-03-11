
import axios from 'axios'
const apiHost = 'http://localhost:4000/api/';

const Api = {
  loadCategories() {
    return axios.get(`${apiHost}Categories`);
  },
  loadProducts(catId) {
    return axios.get(`${apiHost}Categories/${catId}/products`);
  },
  loadProductById(pid) {
    return axios.get(`${apiHost}products/${pid}`);
  }
}

export default Api;