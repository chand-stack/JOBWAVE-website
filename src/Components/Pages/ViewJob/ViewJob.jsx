import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../../hook/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

const ViewJob = () => {
  const [applicantNum, setApplicantNum] = useState(0);
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const param = useParams();

  const { data: jobDetail, isLoading } = useQuery({
    queryKey: ["jobDetail", param.id],
    queryFn: async () => {
      const res = axios.get(`/view-job/${param.id}`);
      return res;
    },
  });
  console.log(jobDetail?.data);

  const applyHandler = () => {
    if (user.email == jobDetail.data.email) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Sorry, you cannot apply to a job posting you have created.",
      });
      return;
    }
    if (!(new Date() <= new Date(jobDetail?.data?.deadline))) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Sorry, the application deadline for this job has passed.",
      });
      return;
    }

    document.getElementById("my_modal_1").showModal();
  };

  const applysubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const resume = e.target.resume.value;
    const category = jobDetail?.data?.category;
    const photo = jobDetail?.data?.photo;
    const salary = jobDetail?.data?.salary;
    const title = jobDetail?.data?.title;
    // console.log(name,email,resume,category,photo,salary,title);

    const jobSubmit = { name, email, resume, category, photo, salary, title };
    // console.log(jobSubmit);

    axios.post("/api/v1/apply-job", jobSubmit).then((res) => {
      if (res.data.insertedId) {
        Swal.fire(
          "Congratulations!",
          "Your job application has been submitted successfully..",
          "success"
        );
      }
    });

    const emailParams = {
      from: jobDetail?.data?.email,
      to: user?.email,
      subject: "Job Application Successful",
      text: `Congratulations! ${name} Your job application has been successfully received and processed. We will be in touch with you soon regarding the next steps.Thank you for applying!`,
      to_name: user?.displayName,
      from_name: jobDetail?.data?.userName,
    };

    axios
      .patch(`/api/v1/view-job/${jobDetail?.data?._id}`)
      .then((res) => {
        console.log(res);
        setApplicantNum(1);
        emailjs
          .send(
            "service_6qn1tx4",
            "template_vgkjy0n",
            emailParams,
            "WgjxlFQTro4BIFwXu"
          )
          .then((result) => {
            console.log(result.text);
          })
          .catch((error) => {
            console.error("Email.js Error:", error);
          });
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        console.error("Error Message:", error.message);
        console.error("Error Response:", error.response);
      });
  };
  return (
    <>
      <Helmet>
        <title>JobWave | Job-Details</title>
        <meta name="description" content="My page description" />
      </Helmet>
      <div>
        {isLoading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner text-info loading-lg mx-auto h-screen text-center"></span>
          </div>
        ) : (
          <div className="container mx-auto flex gap-5 px-5">
            <div className=" hidden md:contents">
              <img
                className="rounded-full max-h-96 max-w-sm"
                src={jobDetail?.data?.photo}
                alt=""
              />
            </div>
            <div className="flex-grow">
              <div
                className="h-[40vh]"
                style={{
                  backgroundImage: `url(${jobDetail?.data?.photo})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-full  bg-black bg-opacity-80 flex justify-center items-center">
                  <h1 className="text-3xl md:text-4xl font-black text-white">
                    {jobDetail?.data?.title}
                  </h1>
                </div>
              </div>
              <div className="space-y-3 my-5">
                <h1 className="text-white text-lg font-semibold">
                  <span className="text-2xl text-[#A582F7]">Job Title:</span>{" "}
                  <br />
                  {jobDetail?.data?.title}
                </h1>
                <h1 className="text-white text-lg font-semibold">
                  <span className="text-2xl text-[#A582F7]">
                    Job Description:
                  </span>{" "}
                  <br />
                  {jobDetail?.data?.description}
                </h1>
                <h1 className="text-white text-lg font-semibold">
                  <span className="text-2xl text-[#A582F7]">Salary Range:</span>{" "}
                  <br />${jobDetail?.data?.salary} per year
                </h1>
                <h1 className="text-white text-lg font-semibold">
                  <span className="text-2xl text-[#A582F7]">
                    Applicant Count:
                  </span>{" "}
                  <br />
                  {jobDetail?.data?.applicants + applicantNum} People
                </h1>
                <div className="flex items-center">
                  <div className="border mx-3 border-b-0 border-l-0 border-r-0 flex-1"></div>
                  <div>
                    <button
                      className="btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white"
                      onClick={applyHandler}
                    >
                      Apply Now
                    </button>
                  </div>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <form onSubmit={applysubmit}>
                        <div>
                          <h1 className="text-black text-xl font-semibold">
                            Name
                          </h1>
                          <input
                            type="text"
                            name="name"
                            value={user?.displayName}
                            className="input input-bordered input-primary w-full"
                          />
                        </div>
                        <div>
                          <h1 className="text-black text-xl font-semibold">
                            Email
                          </h1>
                          <input
                            type="email"
                            name="email"
                            value={user?.email}
                            className="input input-bordered input-primary w-full"
                          />
                        </div>
                        <div>
                          <h1 className="text-black text-xl font-semibold">
                            Resume link
                          </h1>
                          <input
                            type="url"
                            name="resume"
                            required
                            className="input input-bordered input-primary w-full"
                          />
                        </div>

                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-outline text-[#7367F0]">
                              Close
                            </button>
                          </form>
                          <button
                            type="submit"
                            className="btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white ml-4"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewJob;
