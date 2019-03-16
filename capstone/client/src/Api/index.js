
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
  getWishlist(wishlistId) {
    return axios.get(`${apiHost}wishlists/${wishlistId}`);
  },
  updateWishlist(wishlistId, wishlistObj) {
    return axios.put(`${apiHost}wishlists/${wishlistId}`, wishlistObj);
  },
  getUser(userId) {
    return axios.get(`${apiHost}users/${userId}`);
  },
  loadProductById(pid) {
    return axios.get(`${apiHost}products/${pid}`);
  },
  loadEvents(userId) {
    return axios.get(`${apiHost}users/${userId}/events`);
  },
  addEvent(userId, eventObj) {
    return axios.post(`${apiHost}users/${userId}/events`, eventObj);
  },
  deleteEvent(eventId) {
    return axios.delete(`${apiHost}Events/${eventId}`);
  }
}

export default Api;