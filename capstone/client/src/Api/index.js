
import axios from 'axios'
const apiHost = 'http://localhost:4000/api/';

const Api = {
  loadCategories() {
    return axios.get(apiHost + 'Categories')
  }
}

export default Api;