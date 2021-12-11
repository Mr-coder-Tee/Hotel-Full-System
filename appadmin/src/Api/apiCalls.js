import axios from 'axios'
const url="http://localhost:5000/apiAdmin"
class Backend{
    async createHotelUser(data){  
        return axios.post(url+"/addNewHotel",data)
    }
    async getHotel(){
        return axios.get(url+"/")
    }

}

export default new Backend()