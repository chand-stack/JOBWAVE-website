import gif from '../../assets/icons8-user.gif'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Frame.svg'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Nav = () => {
    const {user,logOut} = useContext(AuthContext)

    const logOutHandler = () => {
      logOut()
      .then(()=>{
        console.log("logout");
      })
      .catch(err => {
        console.log(err);
      })
    }
    const links = <>
    <li><NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#7367F0]" : ""
  }
>
  Home
</NavLink></li>
    <li><NavLink
  to="/alljobs"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#7367F0]" : ""
  }
>
  All Jobs
</NavLink></li>
   {
    user && <>
     <li><NavLink
  to="/applied"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#7367F0]" : ""
  }
>
  Applied Jobs
</NavLink></li>
    <li><NavLink
  to="/addjob"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#7367F0]" : ""
  }
>
  Add A Job
</NavLink></li>
    <li><NavLink
  to="/myjob"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#7367F0]" : ""
  }
>
  My Jobs
</NavLink></li>
    </>
   }
    <li><NavLink
  to="/blog"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#7367F0]" : ""
  }
>
  Blogs
</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar text-white py-5 container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu text-black space-y-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
       {
        links
       }
      </ul>
    </div>
    <img src={logo} alt="" />
    <h1 className='text-2xl font-semibold'>JobWave</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="gap-5 menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
        user? <div className="dropdown dropdown-bottom pr-5">
        <label tabIndex={0} className="tooltip  tooltip-bottom" data-tip={user?.displayName}>
        <img className='h-20 w-20 rounded-full border-2 border-[#A582F7]'  src={user?.photoURL || gif} alt="User" />
        </label>
        <ul tabIndex={0} className="dropdown-content right-3/4 z-30 menu  shadow bg-base-100 rounded-box">
          <li><button onClick={logOutHandler} className='btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none w-28 text-white'>Log out</button></li>
          
        </ul>
      </div> : <Link to="/login" className='btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none w-28 text-white'>Login</Link>
    }
    
  </div>
</div>
        </div>
    );
};

export default Nav;