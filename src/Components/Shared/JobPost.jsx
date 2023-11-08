import img from "../../assets/Ellipse.svg";
import img2 from "../../assets/Ellipse (1).svg";
import img3 from "../../assets/Ellipse (2).svg";
import img4 from "../../assets/Ellipse (3).svg";
import img5 from "../../assets/Ellipse (4).svg";
import { Link } from "react-router-dom";
const JobPost = () => {
  return (
    <div className=" container mx-auto flex flex-col-reverse md:flex-row-reverse justify-between px-3 md:px-8 lg:px-20">
      <div className="w-72 h-72 bg-transparent rounded-full flex justify-center items-center relative mx-auto md:mx-0">
        <div className="w-32 h-32 rounded-full flex items-center justify-center">
          <img src={img} alt="Sun" className="w-16 h-16" />
        </div>
        <div className="planet w-12 h-12  rounded-full absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2">
          <img src={img2} alt="Earth" className="w-16 h-16" />
        </div>
        <div className="planet w-10 h-10 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={img3} alt="Mars" className="w-16 h-16" />
        </div>
        <div className="planet w-10 h-10 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={img4} alt="Mars" className="w-16 h-16" />
        </div>
        <div className="planet w-10 h-10 rounded-full absolute bottom-1/5 right-0 transform -translate-x-1/2 -translate-y-1/2">
          <img src={img5} alt="Mars" className="w-16 h-16" />
        </div>
        {/* Add more planets as needed */}
      </div>

      <div className="text-white space-y-5">
        <h1 className="text-3xl md:text-4xl font-black">
          So Many People Are <span className="text-[#A582F7]">Engaged</span>
          <br /> All Over The World Work With Companies
        </h1>
        <p>
          Global engagement unites countless individuals from diverse cultures,
          forming a vibrant tapestry of humanity.!
        </p>
        <div>
          <Link to="/addjob">
            <button className="btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white">
              Post A Job
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
