import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hook/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/jobbannwe.jpg";
import { Helmet } from "react-helmet";

const Myjob = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [myjobs, setMyJobs] = useState([]);

  const axios = useAxios();
  const { data: jobs, isLoading } = useQuery({
    queryKey: ["jobs", email],
    queryFn: async () => {
      const res = await axios.get(`/api/v1/my-job?email=${email}`);
      setMyJobs(res.data);
      return res;
    },
  });

  const deleteHandler = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/v1/user/delete-job/${_id}`)
          .then((response) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remaining = myjobs.filter((job) => job._id !== _id);
            setMyJobs(remaining);
            // console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });

    // console.log(_id);
  };

  // console.log(jobs?.data);
  return (
    <>
      <Helmet>
        <title>JobWave | My-Jobs</title>
        <meta name="description" content="My page description" />
      </Helmet>
      <div className=" h-[40vh]" style={{ backgroundImage: `url(${banner})` }}>
        <div className="w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
          <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-black">
            My <span className="text-[#A582F7]">JOBS</span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        { isLoading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner text-info loading-lg mx-auto h-[50vh] text-center"></span>
          </div>
        ) : myjobs.length == 0 ?  (<div className="flex justify-center h-[50vh] items-center">
        <p className="text-lg md:text-2xl text-white">You haven&lsquo;t added any jobs yet. Start building your dream team today!</p>
      </div>) : (
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
                <th>Delete</th>
              </tr>
            </thead>
            {myjobs?.map((job) => (
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
                    <Link to={`/update/${job._id}`}>
                      <button className="btn btn-sm bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white">
                        Update
                      </button>
                    </Link>
                  </th>
                  <th>
                    
                      <button
                      onClick={() => deleteHandler(job?._id)}
                      className="btn btn-sm bg-gradient-to-t from-red-600 from-10% via-red-500 via-30% to-red-400 to-90% border-none text-white">
                        Delete
                      </button>
                   
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
                <th>Delete</th>
              </tr>
            </tfoot>
          </table>
        </div>
        )}
        
      </div>
    </>
  );
};

export default Myjob;
