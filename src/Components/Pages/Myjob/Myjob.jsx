import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hook/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";
import banner from '../../../assets/jobbannwe.jpg'

const Myjob = () => {


    const {user} = useContext(AuthContext)
    const email = user?.email
    const [myjobs,setMyJobs] = useState([])
 

    const axios = useAxios()
    const {data: jobs, isLoading} = useQuery({
        queryKey: ["jobs",email],
        queryFn: async () => {
            const res = await axios.get(`/my-job?email=${email}`);
            setMyJobs(res.data)
            return res
        }
    })


    

   const deleteHandler = _id => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
              axios.delete(`/user/delete-job/${_id}`)
    .then(response => {
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          const remaining = myjobs.filter(job => job._id !== _id)
          setMyJobs(remaining)
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
        }
      });
      

console.log(_id);
    
   }

    console.log(jobs?.data);
    return (
        <>
        <div className=" h-[40vh]" style={{backgroundImage:`url(${banner})`}}>
            <div className="w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-black">My <span className="text-[#A582F7]">JOBS</span></h1>
            </div>
        </div>
        <div className="container mx-auto">
            
            {
        myjobs.length==0 || isLoading ? <div className='flex justify-center'>
            <span className="loading loading-spinner text-info loading-lg mx-auto h-[50vh] text-center"></span>
        </div> :
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-3'>

        {
            myjobs?.map(job => <div key={job?._id} className='space-y-3 bg-[#111] p-3 rounded-lg text-white'>
              <div className='flex items-center gap-3'>
              <img className='rounded-full h-11' src={job?.photo} alt="User" />
              <div>
              <h1 className='text-xl font-semibold'>{job?.userName}</h1>
                <p>Posted on {new Date(job?.postingDate).toLocaleString()}</p>
              </div>
              </div>
              
              <div className="flex flex-col">
              <p><span className='text-xl font-semibold text-[#A582F7]'>Title: </span> <span className='text-lg'>{job?.title}</span></p>
              <p className="flex-grow"><span className='text-xl font-semibold text-[#A582F7]'>Description: </span> <span className='text-lg'>{job?.description}</span></p>
              <p><span className='text-xl font-semibold text-[#A582F7]'>Applicants: </span> <span className='text-lg'>{job?.applicants}</span></p>
              <p><span className='text-xl font-semibold text-[#A582F7]'>Category: </span> <span className='text-lg'>{job?.category}</span></p>
              <p><span className='text-xl font-semibold text-[#A582F7]'>Application Deadline: </span> <span className='text-lg'>{new Date(job.deadline).toLocaleDateString()}</span></p>
              <p className='text-xl'><span className='text-[#A582F7]'>Salary Range:</span> ${job?.salary}  per year</p>
              </div>
              <div className='flex justify-between'>
                <Link to={`/update/${job._id}`}><button className='btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white'>Update Details</button></Link>
               <button onClick={()=>deleteHandler(job?._id)}  className='btn bg-gradient-to-t from-red-600 from-10% via-red-500 via-30% to-red-400 to-90% border-none text-white'>Delete</button>
              </div>
              

            </div>)
        }

      </div>
      }
        </div>
        </>
    );
};

export default Myjob;