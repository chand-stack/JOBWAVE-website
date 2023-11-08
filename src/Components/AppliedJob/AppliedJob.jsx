import { useQuery } from "@tanstack/react-query";
import banner from "../../assets/jobbannwe.jpg";
import useAxios from "../../hook/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import { Helmet } from "react-helmet";
const AppliedJob = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [appliedJobs, setAppliedJob] = useState([]);
  const [category, setCategory] = useState("");

  const axios = useAxios();
  const { data: appliedjob, isLoading } = useQuery({
    queryKey: ["appliedjob", email, category],
    queryFn: async () => {
      const res = await axios.get(
        `/apply-job?email=${email}&category=${category}`
      );
      setAppliedJob(res?.data);
      return res;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner text-info loading-lg mx-auto h-[50vh] text-center"></span>
      </div>
    );
  }
  console.log(appliedjob);

  const categoryHandler = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>JobWave | AppliedJob</title>
        <meta name="description" content="My page description" />
      </Helmet>
      <div className=" h-[40vh]" style={{ backgroundImage: `url(${banner})` }}>
        <div className="w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
          <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-black">
            Applied <span className="text-[#A582F7]">JOB</span>
          </h1>
        </div>
      </div>

      <div className="flex justify-center my-10 container mx-auto">
        <select
          onChange={categoryHandler}
          className="select select-primary w-full max-w-xs"
        >
          <option disabled selected>
            Search By Category
          </option>
          <option value={"onsite"}>Onsite</option>
          <option value={"remote"}>Remote</option>
          <option value={"part-time"}>Part-Time</option>
          <option value={"hybrid"}>Hybrid</option>
        </select>
      </div>

      {appliedJobs?.length == 0 ? (
        <div className="flex justify-center">
          <span className="text-white text-4xl md:text-7xl font-black my-20">
            You Have Not Applied Any {category} Job Yet
          </span>
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="min-h-screen">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 my-20 lg:px-5 ">
              {appliedJobs?.map((job) => (
                <div
                  key={job._id}
                  className="flex items-center justify-between rounded-lg lg:justify-around border p-3 md:p-10"
                >
                  <div>
                    <img
                      className="max-h-56 mx-auto rounded-full"
                      src={job?.photo}
                      alt=""
                    />
                  </div>
                  <div className="space-y-5">
                    <h1 className="text-white text-lg font-semibold">
                      <span className="text-2xl text-[#A582F7]">Position:</span>{" "}
                      {job?.title}
                    </h1>
                    <h1 className="text-white text-lg font-semibold ">
                      <span className="text-2xl text-[#A582F7]">Category:</span>{" "}
                      <span className="border py-2 px-4 text-white">
                        {job?.category}
                      </span>
                    </h1>
                    <h1 className="text-white text-lg font-semibold">
                      <span className="text-2xl text-[#A582F7]">Salary:</span> $
                      {job?.salary} per year
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppliedJob;
