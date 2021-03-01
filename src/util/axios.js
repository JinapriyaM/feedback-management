import axios from 'axios';
const Axios = () => {
    return axios.create({
        baseURL: "http://localhost:8080",
        headers: {
            "Content-type": "application/json"
        }
    })
}
export default Axios;