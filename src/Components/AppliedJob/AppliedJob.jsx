import { useQuery } from "@tanstack/react-query";
import banner from "../../assets/jobbannwe.jpg"
import useAxios from "../../hook/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const AppliedJob = () => {

    const {user} = useContext(AuthContext)
    const email = user?.email

    const axios = useAxios()
    const {data:appliedjob} = useQuery({
        queryKey: ['appliedjob',email],
        queryFn: async () => {
           const res = await axios.get(`/apply-job?email=${email}`)
           return res
        }
    })
    console.log(appliedjob?.data);

    return (
        <>
        <div className=" h-[40vh]" style={{backgroundImage:`url(${banner})`}}>
            <div className="w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
            <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-black">Applied <span className="text-[#A582F7]">JOB</span></h1>
            </div>
        </div>
        </>
    );
};

export default AppliedJob;