
import axios from 'axios'
const apiHost = 'http://localhost:4000/api/';

const Api = {
  loadCategories() {
    return axios.get(`${apiHost}Categories`);
  },
  loadProducts(catId) {
    return axios.get(`${apiHost}Categories/${catId}/products`);
  },
  loadCart(catId) {
    return axios.get(`${apiHost}Carts/${catId}`);
  },
  updateCart(catId, cartObj) {
    return axios.put(`${apiHost}Carts/${catId}`, cartObj);
  },
  getUser(userId) {
    return axios.get(`${apiHost}users/${userId}`);
  }
}

export default Api;