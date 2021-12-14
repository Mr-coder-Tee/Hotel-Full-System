import axios from "axios";
const url = "http://localhost:5000/hotel";

class HotelAPI {
  async login(data) {
    return axios.post(url + "/hotellogin", data);
  }
  async getUserDetails(token) {
    return axios.get(`${url}/${token}`);
  }
  async updateUserInfo(data, id) {
    return axios.post(`${url}/updatedatails/${id}`, data);
  }
}

export default new HotelAPI();
