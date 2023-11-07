import img from '../../../assets/Untitled design.png'
import {BiSolidUser} from "react-icons/bi"
import {AiFillLock} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {MdAddPhotoAlternate,MdAttachEmail} from "react-icons/md"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider/AuthProvider'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'

const Register = () => {
    const {creatUser,updateUser,loginWithGoogle} = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const registerHandler = e => {
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const photo = form.photo.value 
        const email = form.email.value 
        const passowrd = form.password.value 

        if(passowrd.length<6){
        Swal.fire(
                '',
                'Password must be at least 6 characters long!',
                'error'
              )
              return     
        }
        if(!/^(?=.*[A-Z]).*$/.test(passowrd)){
          Swal.fire(
                '',
                'Password must have at least one Uppercase Character!',
                'error'
              ) 
              return
        }
        // eslint-disable-next-line no-useless-escape
        if(!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(passowrd)){
          Swal.fire(
                '',
                'Password must contain at least one Special Symbol!',
                'error'
              ) 
              return
        }


        console.log(name,photo,email,passowrd);
        creatUser(email,passowrd)
        .then(()=>{
            Swal.fire(
                'Success! 🎉 You are all set!',
                'Welcome to our community. Explore and discover exciting career opportunities. Lets get started!',
                'success'
              )
              updateUser(name,photo)
              .then(()=>{
                navigate(location.state || "/")
              })
              .catch(err => {
                console.log(err);
              })
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const googleHandler = () => {
        loginWithGoogle()
        .then(()=>{
            Swal.fire(
                'Success! 🎉 You are all set!',
                'Welcome to our community. Explore and discover exciting career opportunities. Lets get started!',
                'success'
              )
              navigate(location.state || "/")
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
      <>
      <Helmet>
        <title>JobWave | Register</title>
        <meta name="description" content="My page description" />
      </Helmet>
        <div className='container mx-auto '>
            <div className=" mt-10 px-5 lg:px-10">
  <div className="flex flex-col-reverse justify-around md:flex-row items-center">
    <div className="text-center lg:text-left">
      <img className='lg:max-w-md mx-auto md:mx-0' src={img} alt="" />
    </div>
    <div className="card  w-full shadow-2xl border-2 border-[#A582F7] max-w-md flex-grow bg-[#111]">
        <h1 className='font-bold text-2xl md:text-3xl text-center text-white py-5'>Signup <span className='text-[#A582F7]'>Now</span></h1>
      <form onSubmit={registerHandler} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white flex items-center gap-1"><BiSolidUser className='text-[#A582F7] text-2xl'/> Name</span>
          </label>
          <input type="text" name='name' placeholder="User name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white flex items-center gap-1"><MdAddPhotoAlternate className='text-[#A582F7] text-2xl'/>Photo Url</span>
          </label>
          <input type="url" name='photo' placeholder="Photo Url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white flex items-center gap-1"><MdAttachEmail className='text-[#A582F7] text-2xl'/>Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white flex items-center gap-1"><AiFillLock className='text-[#A582F7] text-2xl'/>Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white">Sign Up</button>
        </div>
        <p className='text-center mt-3 -mb-3 text-white'>Already Have An Account? Please <Link to="/login" className='text-[#A582F7]'>Login</Link></p>
      </form>
      <div className='text-center pb-3 space-y-2'>
        <p className='text-center text-white'>---OR---</p>
        <button type='button' onClick={googleHandler} className=' btn btn-outline text-[#A582F7]'>Continue With Google <FcGoogle className='text-2xl'/></button>
      </div>
    </div>
  </div>
</div>
        </div>
        </>
    );
};

export default Register;