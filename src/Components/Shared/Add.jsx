import Marquee from "react-fast-marquee";

const Add = () => {
    return (
        <div>
             <div className="h-20 md:h-32 bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#7367F0] to-90% w-full">
            <div className=" rotate-1 h-full overflow-x-hidden overflow-y-auto shadow-md bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90%">
                <Marquee>
                    <div className="flex text-xl md:text-5xl gap-10 mt-5 md:mt-10 font-bold md:font-extrabold justify-around text-white items-center overflow-x-hidden">
                    <p>Your Dream Job Awaits!  Apply Today!</p>
                    <p>Unlock Your Career Potential with Us! </p>
                    <p>Join the Job Revolution Find Your Next Gig Here!</p>
                    
                    <p>Elevate Your Career! Explore Our Job Listings</p>
                    </div>
                </Marquee>
            </div>
        </div>
        </div>
    );
};

export default Add;