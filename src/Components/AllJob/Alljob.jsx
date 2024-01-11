import { useQuery } from "@tanstack/react-query";
import banner from "../../assets/jobbannwe.jpg";
import useAxios from "../../hook/useAxios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
const Alljob = () => {
  const [alljobs, setAllJobs] = useState([]);

  const axios = useAxios();
  const { data: jobs, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axios.get(`/api/v1/all-job`);
      setAllJobs(res?.data);
      return res;
    },
  });

  // console.log(jobs?.data);

  const searchHandler = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    if (search) {
      const searchJobs = alljobs?.filter(
        (job) => job.title.toLowerCase() == search.toLowerCase()
      );
      setAllJobs(searchJobs);
    } else {
      setAllJobs(jobs?.data);
    }
  };

  return (
    <>
      <Helmet>
        <title>JobWave | AllJob</title>
        <meta name="description" content="My page description" />
      </Helmet>
      <div
        className=" h:[40vh] md:h-[70vh]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
          <div className="space-y-5">
            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-black">
              All <span className="text-[#A582F7]">JOB</span>
            </h1>
            <form
              onSubmit={searchHandler}
              className="flex justify-center gap-3"
            >
              <input
                type="text"
                name="search"
                placeholder=" Search Jobs . . ."
                className="input input-bordered w-full max-w-xs"
              />
              <button
                type="submit"
                className="btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none w-28 text-white"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10 md:my-20">
        {isLoading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner text-info loading-lg mx-auto h-[50vh] text-center"></span>
          </div>
        ) : (
          <div className="overflow-x-auto bg-[#111] rounded-lg my-16 text-white">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-white">
                  <th>User Name</th>
                  <th>Job Title</th>
                  <th>Job Posting Date</th>
                  <th>Deadline</th>
                  <th>Salary Range</th>
                  <th>Detail</th>
                </tr>
              </thead>
              {alljobs?.map((job) => (
                <tbody key={job._id}>
                  {/* row 1 */}
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={job?.photo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{job?.userName}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {job?.title}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {job?.category}
                      </span>
                    </td>
                    <td>{new Date(job?.postingDate).toLocaleDateString()}</td>
                    <td>{new Date(job?.deadline).toLocaleDateString()}</td>
                    <td>${job?.salary}</td>
                    <th>
                      <Link to={`/jobDetail/${job._id}`}>
                        <button className="btn btn-sm bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white">
                          View Details
                        </button>
                      </Link>
                    </th>
                  </tr>
                </tbody>
              ))}
              {/* foot */}
              <tfoot>
                <tr className="text-white">
                  <th>User Name</th>
                  <th>Job Title</th>
                  <th>Job Posting Date</th>
                  <th>Deadline</th>
                  <th>Salary Range</th>
                  <th>Detail</th>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Alljob;
