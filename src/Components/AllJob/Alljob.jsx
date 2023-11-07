import { useQuery } from '@tanstack/react-query';
import banner from '../../assets/jobbannwe.jpg'
import useAxios from '../../hook/useAxios';
import { FaPeopleGroup } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import img from '../../assets/icons8-user.gif'
import { useState } from 'react';
const Alljob = () => {
    const[alljobs,setAllJobs]=useState([])

    
    const axios = useAxios()
    const {data: jobs, isLoading} = useQuery({
        queryKey: ["jobs"],
        queryFn: async () => {
            const res = await axios.get(`/all-job`);
                setAllJobs(res?.data)
            return res
        }
    })

    console.log(jobs?.data);

    const searchHandler = e =>{
        e.preventDefault()
        const search = e.target.search.value
        if(search){
            const searchJobs = alljobs?.filter(job => (job.title).toLowerCase() == search.toLowerCase())
            setAllJobs(searchJobs)
        }else{
            setAllJobs(jobs?.data)
        }
        
    }
    

    return (
        <>
        <div className=" h:[40vh] md:h-[70vh]" style={{backgroundImage:`url(${banner})`}}>
            <div className="w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
            <div className='space-y-5'>
            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-black">All <span className="text-[#A582F7]">JOB</span></h1>
            <form onSubmit={searchHandler} className='flex justify-center gap-3'>
<input  type="text" name='search' placeholder="🔍 Search Jobs . . ." className="input input-bordered w-full max-w-xs" />
<button type='submit' className='btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none w-28 text-white'>Search</button>
</form>
            </div>
            </div>
        </div>
        <div className='container mx-auto my-10 md:my-20'>

        {
        isLoading? <div className='flex justify-center'>
            <span className="loading loading-spinner text-info loading-lg mx-auto h-[50vh] text-center"></span>
        </div> :
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-3'>

        {
            alljobs?.map(job => <div key={job._id} className='space-y-3 text-white bg-[#111] border border-gray-700 p-3 rounded-lg'>
              <div className='flex items-center gap-3'>
              <img className='rounded-full' src={img} alt="" />
              <div>
              <h1 className='text-xl font-semibold'>{job.userName}</h1>
                <p>Posted on {new Date(job.postingDate).toLocaleString()}</p>
              </div>
              </div>
              <h1 className='text-2xl md:text-3xl font-semibold'>{job.title}</h1>
              <p><span className='text-xl font-semibold text-[#A582F7]'>Application Deadline: </span> <span className='text-lg'>{new Date(job.deadline).toLocaleDateString()}</span></p>
              <p className='text-xl'><span className='text-[#A582F7]'>Salary Range:</span> ${job.salary}  per year</p>
              <div className='flex justify-between'>
                <Link to={`/jobDetail/${job._id}`}><button className='btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white'>View Details</button></Link>
                <div className='flex items-center gap-2'>
                    <FaPeopleGroup className='text-2xl'/><p>{job.applicants} Applied</p>
                </div>
              </div>

            </div>)
        }

      </div>
      }

        </div>
        
        </>
    );
};

export default Alljob;