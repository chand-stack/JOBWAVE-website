import img from '../../../assets/Untitled design.png'
import {BiSolidUser} from "react-icons/bi"
import {AiFillLock} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {MdAddPhotoAlternate,MdAttachEmail} from "react-icons/md"
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className='container mx-auto '>
            <div className=" mt-10 px-5 lg:px-10">
  <div className="flex flex-col-reverse justify-around md:flex-row items-center">
    <div className="text-center lg:text-left">
      <img className='lg:max-w-md mx-auto md:mx-0' src={img} alt="" />
    </div>
    <div className="card  w-full shadow-2xl border-2 border-[#A582F7] max-w-md text-white flex-grow">
        <h1 className='font-bold text-2xl md:text-3xl text-center py-5'>Signup <span className='text-[#A582F7]'>Now</span></h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white flex items-center gap-1"><BiSolidUser className='text-[#A582F7] text-2xl'/> Name</span>
          </label>
          <input type="text" placeholder="User name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white flex items-center gap-1"><MdAddPhotoAlternate className='text-[#A582F7] text-2xl'/>Photo Url</span>
          </label>
          <input type="url" placeholder="Photo Url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white flex items-center gap-1"><MdAttachEmail className='text-[#A582F7] text-2xl'/>Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white flex items-center gap-1"><AiFillLock className='text-[#A582F7] text-2xl'/>Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white">Sign Up</button>
        </div>
        <p className='text-center mt-3 -mb-3'>Already Have An Account? Please <Link to="/login" className='text-[#A582F7]'>Login</Link></p>
      </form>
      <div className='text-center pb-3 space-y-2'>
        <p className='text-center'>---OR---</p>
        <button className=' btn btn-outline text-[#A582F7]'>Continue With Google <FcGoogle className='text-2xl'/></button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;