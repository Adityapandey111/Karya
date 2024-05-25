import axios from "axios"
const instance = axios.create({
    baseURL:"http://localhost:8000/api"
})
console.log(5);
export default instance