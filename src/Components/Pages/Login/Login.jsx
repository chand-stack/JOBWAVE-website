import img from "../../../assets/Untitled design.png";
import { AiFillLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { MdAttachEmail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxios from "../../../hook/useAxios";
const Login = () => {
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
 const axios = useAxios()
  const navigate = useNavigate();
  const location = useLocation();
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const passowrd = form.password.value;

    // console.log(email, passowrd);
    loginUser(email, passowrd)
      .then(() => {
        Swal.fire(
          "Success! 🎉 You are all set!",
          "Welcome to our community. Explore and discover exciting career opportunities. Lets get started!",
          "success"
        );
        axios
        .post("/api/v1/jwt", { email })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error("Axios Error:", error);
          console.error("Error Message:", error.message);
          console.error("Error Response:", error.response);
        });
        navigate(location.state || "/");
      })
      .catch((err) => {
        Swal.fire("Error", "invalid-login-credentials!", "error");
        console.log(err);
      });
  };

  const googleHandler = () => {
    loginWithGoogle()
      .then(() => {
        Swal.fire(
          "Success! 🎉 You are all set!",
          "Welcome to our community. Explore and discover exciting career opportunities. Lets get started!",
          "success"
        );
        location(navigate(location.state || "/"));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>JobWave | Login</title>
        <meta name="description" content="My page description" />
      </Helmet>
      <div className="container mx-auto ">
        <div className=" mt-10 px-5 lg:px-10">
          <div className="flex flex-col-reverse justify-around md:flex-row items-center">
            <div className="text-center lg:text-left">
              <img className="lg:max-w-md mx-auto md:mx-0" src={img} alt="" />
            </div>
            <div className="card  w-full shadow-2xl border-2 border-[#A582F7] max-w-md flex-grow bg-[#111]">
              <h1 className="font-bold text-2xl md:text-3xl text-center text-white py-5">
                Login <span className="text-[#A582F7]">Now</span>
              </h1>
              <form onSubmit={loginHandler} className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white flex items-center gap-1">
                      <MdAttachEmail className="text-[#A582F7] text-2xl" />
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white flex items-center gap-1">
                      <AiFillLock className="text-[#A582F7] text-2xl" />
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="text-center mt-3 -mb-3 text-white">
                  Dont Have An Account? Please{" "}
                  <Link to="/register" className="text-[#A582F7]">
                    Register
                  </Link>
                </p>
              </form>
              <div className="text-center pb-3 space-y-2">
                <p className="text-center text-white">---OR---</p>
                <button
                  type="button"
                  onClick={googleHandler}
                  className=" btn btn-outline text-[#A582F7]"
                >
                  Continue With Google <FcGoogle className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
