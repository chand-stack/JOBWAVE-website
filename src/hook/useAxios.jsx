import axios from "axios";

const intance = axios.create({
    baseURL:"http://localhost:5000/api/v1",
    withCredentials: true
})
const useAxios = () => {
    return intance
};

export default useAxios;