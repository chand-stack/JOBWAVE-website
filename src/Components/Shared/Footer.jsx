import logo from "../../assets/Frame.svg";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { LiaFacebook } from "react-icons/lia";
const Footer = () => {
  return (
    <div className="container mx-auto ">
      <footer className="footer footer-center p-10 text-primary-content">
        <aside>
          <div className="flex items-center">
            <img src={logo} alt="" />
            <h1 className="text-2xl font-semibold text-white">JobWave</h1>
          </div>
          <p className="font-bold">
            JobWave -<br />
            Navigating Your Career Future. Your path to success starts here.
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <div className="text-white text-center">
              <p className="text-2xl font-semibold py-3">Find Us On Social Media:</p>
              <div className="text-white flex items-center gap-4 text-5xl justify-center">
                <LiaFacebook />
                <AiOutlineInstagram />
                <AiFillTwitterCircle />
              </div>
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