import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";

const intance = axios.create({
  baseURL: "https://jobwave-server.vercel.app",
  withCredentials: true,
});
const useAxios = () => {
  // const {logOut} = useContext(AuthContext)

  // const navigate = useNavigate()

  useEffect(() => {
    intance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout the user");
          // logOut()
          //     .then(() => {
          //         navigate('/login')
          //     })
          //     .catch(error => console.log(error))
        }
      }
    );
  }, []);

  return intance;
};

export default useAxios;
