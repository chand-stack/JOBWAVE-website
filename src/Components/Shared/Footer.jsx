import logo from "../../assets/Frame.svg";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { LiaFacebook } from "react-icons/lia";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container mx-auto ">
      <footer className="footer p-10 bg-black mt-10 py-20 text-white">
        <aside>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <h1 className="text-2xl font-semibold text-white">JobWave</h1>
          </div>
          <p>
            JobWave -<br />
            Navigating Your Career Future. Your path to success starts here.
          </p>
        </aside>
        <nav>
          <header className=" text-2xl font-semibold text-white">
            Find Us On Social Media
          </header>
          <div className="grid grid-flow-col gap-4">
            <div className="text-white flex items-center gap-4 text-4xl justify-center">
              <LiaFacebook />
              <AiOutlineInstagram />
              <AiFillTwitterCircle />
            </div>
          </div>
        </nav>
        <nav>
          <header className=" text-2xl font-semibold text-gray-200">
            COMPANY
          </header>
          <div className="grid grid-flow-col gap-4">
            <div className="text-white items-center gap-4 text-xl justify-center">
              <Link to="/blog">Blog</Link>
              <br />
              <Link to="/alljobs">All Job</Link>
              <br />
              <Link to="/login">Login</Link>
              <br />
              <Link to="/register">Register</Link>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4  text-white -mt-5 border-t">
        <aside>
          <p>Copyright © 2023 - All right reserved by JOBWAVE</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
