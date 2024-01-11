import banner from "../../../assets/jobbannwe.jpg";
import { useContext } from "react";
import addjob from "../../../assets/addjob.png";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../../../hook/useAxios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
const UpdateJob = () => {
  const axios = useAxios();
  const [startDate, setStartDate] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());
  const [jobCategory, setJobCategory] = useState();
  const { user } = useContext(AuthContext);

  const param = useParams();
  // console.log(param);

  const { data: jobDetail, isLoading } = useQuery({
    queryKey: ["jobDetail", param.id],
    queryFn: async () => {
      const res = axios.get(`/api/v1/view-job/${param.id}`);
      return res;
    },
  });

  // console.log(jobDetail?.data);

  const categoryHandler = (e) => {
    setJobCategory(e.target.value);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const updateJobHandler = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const photo = e.target.photo.value;
    const userName = e.target.user.value;
    const category = jobCategory || jobDetail?.data?.category;
    const salary = e.target.salary.value;
    const postingDate = jobDetail?.data?.postingDate || startDate;
    const deadline = jobDetail?.data?.deadline || lastDate;
    const applicants = parseInt(e.target.applicants.value);
    const email = user?.email;
    const description = e.target.description.value;

    const job = {
      title,
      photo,
      userName,
      category,
      salary,
      postingDate,
      deadline,
      applicants,
      email,
      description,
    };
    // console.log(job);

    axios
      .patch(`/api/v1/view-job/update/${jobDetail?.data?._id}`, job)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            icon: "success",
            title: "Congratulations!",
            text: "Your job posting has been updated successfully.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "An error occurred while updating your job posting.",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating job:", error);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "An error occurred while updating your job posting.",
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>JobWave | Update-Job</title>
        <meta name="description" content="My page description" />
      </Helmet>
      <div className=" h-[40vh]" style={{ backgroundImage: `url(${banner})` }}>
        <div className="w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
          <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-black">
            Update <span className="text-[#A582F7]">JOB</span>
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="container mx-auto grid md:grid-cols-2">
          <div className="hidden md:flex flex-col">
            <img src={addjob} alt="" />
            <h1 className="text-white text-center text-3xl md:text-4xl font-black">
              UPDATE YOUR <span className="text-[#7367F0]">JOB</span> POST{" "}
            </h1>
          </div>
          <form
            onSubmit={updateJobHandler}
            className="bg-[#111] space-y-3 px-10 md:px-5 lg:px-28 border-2 rounded-lg py-10 m-5 lg:m-10 border-[#7367F0]"
          >
            <div>
              <h1 className="text-white text-xl font-semibold">Job Title</h1>
              <input
                type="text"
                defaultValue={jobDetail?.data?.title}
                placeholder="Job title here"
                name="title"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div>
              <h1 className="text-white text-xl font-semibold">
                Picture URL of the Job Banner
              </h1>
              <input
                type="url"
                name="photo"
                defaultValue={jobDetail?.data?.photo}
                placeholder="Job Banne URL"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div>
              <h1 className="text-white text-xl font-semibold">User</h1>
              <input
                type="text"
                name="user"
                value={user?.displayName}
                readOnly
                placeholder="Job title here"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div>
              <h1 className="text-white text-xl font-semibold">Job Category</h1>
              <select
                defaultValue={jobDetail?.data?.category}
                className="select select-primary w-full"
                onChange={categoryHandler}
              >
                <option
                  disabled
                  defaultValue={jobDetail?.data?.category}
                  selected
                >
                  {jobDetail?.data?.category}
                </option>
                <option value={"onsite"}>On Site</option>
                <option value={"remote"}>Remote</option>
                <option value={"part-time"}>Part-Time</option>
                <option value={"hybrid"}>Hybrid</option>
              </select>
            </div>
            <div>
              <h1 className="text-white text-xl font-semibold">Salary Range</h1>
              <input
                type="text"
                name="salary"
                defaultValue={jobDetail?.data?.salary}
                placeholder="E.g. 30,000-60,000"
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="lg:flex justify-between">
              <div className=" space-y-3">
                <h1 className="text-white text-xl font-semibold">
                  Job Posting Date
                </h1>
                <DatePicker
                  className="py-3 w-full rounded-lg"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className=" space-y-3">
                <h1 className="text-white text-xl font-semibold">
                  Application Deadline
                </h1>
                <DatePicker
                  className="py-3 w-full rounded-lg"
                  selected={lastDate}
                  onChange={(date) => setLastDate(date)}
                />
              </div>
            </div>
            <div>
              <h1 className="text-white text-xl font-semibold">
                Job Description
              </h1>
              <textarea
                name="description"
                defaultValue={jobDetail?.data?.description}
                className="textarea textarea-primary w-full"
                placeholder="Description"
              ></textarea>
            </div>
            <div>
              <h1 className="text-white text-xl font-semibold">
                Job Applicants
              </h1>
              <input
                name="applicants"
                value={0}
                type="number"
                className="textarea textarea-primary w-full"
                placeholder="Job Applicants"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateJob;
