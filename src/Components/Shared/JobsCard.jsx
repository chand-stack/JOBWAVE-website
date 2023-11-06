import { useQuery } from '@tanstack/react-query';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxios from '../../hook/useAxios';
import img from '../../assets/icons8-user.gif'
import { FaPeopleGroup } from 'react-icons/fa6';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const JobsCard = () => {

    const [category,setCategory] = useState('')
    console.log(category);

    const axios = useAxios()
    const {data: jobs, isLoading} = useQuery({
        queryKey: ["jobs",category],
        queryFn: async () => {
            const res = await axios.get(`/all-job?category=${category}`);
            return res
        }
    })



    console.log(jobs);
    return (
        <div className="container mx-auto my-20 space-y-10">
            <h1 className="text-3xl md:text-4xl font-black text-white text-center">Newest <span className="text-[#A582F7]">Jobs</span> for You</h1>
            <p className="md:text-xl text-center text-white">Get the fastest application so that your name is above other application</p>

<div className='mx-auto'>
<Tabs className="  text-white">
    <TabList className=" mx-auto max-w-lg">
      <Tab onClick={() => setCategory("")}>All Recent</Tab>
      <Tab onClick={() => setCategory("onsite")}>On Site Job</Tab>
      <Tab onClick={() => setCategory("remote")}>Remote Job</Tab>
      <Tab onClick={() => setCategory("part-time")}>Hybrid</Tab>
      <Tab onClick={() => setCategory("hybrid")}>Part Time</Tab>
    </TabList>

    <TabPanel>
      {
        isLoading? <div className='flex justify-center'>
            <span className="loading loading-spinner text-info loading-lg mx-auto h-[50vh] text-center"></span>
        </div> :
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-3'>

        {
            jobs?.data?.map(job => <div key={job._id} className='space-y-3 bg-[#111] p-3 rounded-lg'>
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
    </TabPanel>
    <TabPanel>
    {
        isLoading? <div className='flex justify-center'>
            <span className="loading loading-spinner text-info loading-lg mx-auto h-[50vh] text-center"></span>
        </div> :
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-3'>

        {
            jobs?.data?.map(job => <div key={job._id} className='space-y-3 bg-[#111] p-3 rounded-lg'>
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
    </TabPanel>
    <TabPanel>
    {
        isLoading? <div className='flex justify-center'>
            <span className="loading loading-spinner text-info loading-lg mx-auto h-[50vh] text-center"></span>
        </div> :
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-3'>

        {
            jobs?.data?.map(job => <div key={job._id} className='space-y-3 bg-[#111] p-3 rounded-lg'>
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
              <Link to={`/jobDetail/${job._id}`}> <button className='btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white'>View Details</button></Link>
                <div className='flex items-center gap-2'>
                    <FaPeopleGroup className='text-2xl'/><p>{job.applicants} Applied</p>
                </div>
              </div>

            </div>)
        }

      </div>
      }
    </TabPanel>
    <TabPanel>
    {
        isLoading? <div className='flex justify-center'>
            <span className="loading loading-spinner text-info loading-lg mx-auto h-[50vh] text-center"></span>
        </div> :
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-3'>

        {
            jobs?.data?.map(job => <div key={job._id} className='space-y-3 bg-[#111] p-3 rounded-lg'>
              <div className='flex items-center gap-3'>
              <img className='rounded-full' src={img} alt="" />
              <div>
              <h1 className='text-xl font-semibold'>{job.userName}</h1>
                <p>Posted on {new Date(job.postingDate).toLocaleString()}</p>
              </div>
              </div>
              <h1 className='text-2xl md:text-3xl font-semibold'>{job.title}</h1>
              <p><span className='text-xl font-semibold text-[#A582F7]'>Application Deadline: </span> <span className='text-lg'>{new Date(job.deadline).toLocaleDateString()}</span></p>
              <p className='text-xl'><span className='text-[#A582F7]'>Salary Range:</span> ${job.salary} per year</p>
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
    </TabPanel>
    <TabPanel>
    {
        isLoading? <div className='flex justify-center'>
            <span className="loading loading-spinner text-info loading-lg mx-auto h-screen text-center"></span>
        </div> :
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-3'>

        {
            jobs?.data?.map(job => <div key={job._id} className='space-y-3 bg-[#111] p-3 rounded-lg'>
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
    </TabPanel>
  </Tabs>
</div>

        </div>
    );
};

export default JobsCard;