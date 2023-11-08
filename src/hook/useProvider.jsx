import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useProvider = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default useProvider;