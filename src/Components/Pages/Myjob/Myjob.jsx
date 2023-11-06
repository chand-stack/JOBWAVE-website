import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hook/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Myjob = () => {


    const {user} = useContext(AuthContext)
    const email = user?.email
    

    const axios = useAxios()
    const {data: jobs, isLoading} = useQuery({
        queryKey: ["jobs",email],
        queryFn: async () => {
            const res = await axios.get(`/all-job?email=${email}`);
            return res
        }
    })

    console.log(jobs?.data);
    return (
        
        <div className="container mx-auto">
            <div className="h-[40vh] bg-[#111] flex justify-center">
              <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-black">MY <span className="text-[#A582F7]">JOBS</span></h1>
            </div>
            {
        isLoading? <div className='flex justify-center'>
            <span className="loading loading-spinner text-info loading-lg mx-auto h-[50vh] text-center"></span>
        </div> :
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-3'>

        {
            jobs?.data?.map(job => <div key={job?._id} className='space-y-3 bg-[#111] p-3 rounded-lg text-white'>
              <div className='flex items-center gap-3'>
              <img className='rounded-full h-11' src={job?.photo} alt="User" />
              <div>
              <h1 className='text-xl font-semibold'>{job?.userName}</h1>
                <p>Posted on {new Date(job?.postingDate).toLocaleString()}</p>
              </div>
              </div>
              
              <p><span className='text-xl font-semibold text-[#A582F7]'>Title: </span> <span className='text-lg'>{job?.title}</span></p>
              <p><span className='text-xl font-semibold text-[#A582F7]'>Description: </span> <span className='text-lg'>{job?.description}</span></p>
              <p><span className='text-xl font-semibold text-[#A582F7]'>Applicants: </span> <span className='text-lg'>{job?.applicants}</span></p>
              <p><span className='text-xl font-semibold text-[#A582F7]'>Category: </span> <span className='text-lg'>{job?.category}</span></p>
              <p><span className='text-xl font-semibold text-[#A582F7]'>Application Deadline: </span> <span className='text-lg'>{new Date(job.deadline).toLocaleDateString()}</span></p>
              <p className='text-xl'><span className='text-[#A582F7]'>Salary Range:</span> ${job?.salary}  per year</p>
              <div className='flex justify-between'>
                <button className='btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white'>Update Details</button>
               <button className='btn bg-gradient-to-t from-red-600 from-10% via-red-500 via-30% to-red-400 to-90% border-none text-white'>Delete</button>
                
              </div>

            </div>)
        }

      </div>
      }
        </div>
    );
};

export default Myjob;