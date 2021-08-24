import axios from "../../core/axios";

export default {
    get : () => axios.get('/appointment') ,
    remove : id => axios.delete(`/appointment/${id}`) ,
    add : data => axios.post('/appointment' , data)
}   