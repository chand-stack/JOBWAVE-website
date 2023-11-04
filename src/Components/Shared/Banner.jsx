import img from '../../assets/Screenshot2023.png'
import { TbArrowCurveRight } from 'react-icons/tb';
const Banner = () => {
    return (
        <div className="h-screen text-white relative text-center">
            <div className="flex justify-center items-center h-full">
            <div className='z-20'>
            <h1 className="text-4xl md:text-7xl lg:text-9xl font-black ">One step closer to <br />
            your dream job
            </h1>
            <p className='md:text-3xl font-medium my-10'>let us help you find a job that suits you the best!</p>

<div className='flex justify-center gap-3'>
<input type="text" placeholder="🔍 Search Jobs . . ." className="input input-bordered w-full max-w-xs" />
<button className='btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none w-28 text-white'>Search</button>
</div>

            </div>
            </div>
            
           <div className=''>
           <img className='rotate-45 transform-gpu w-28 md:w-52 absolute top-1/3 left-1/4 opacity-60 z-10' src={img} alt="" />
            <img className='-rotate-45 transform-gpu w-28 blur-sm md:w-52 absolute bottom-1/4 right-1/4 opacity-60 z-10' src={img} alt="" />
            <img className='-rotate-45 transform-gpu w-20 md:w-36 blur-sm absolute top-3/4 left-1/4 opacity-60 z-10' src={img} alt="" />
            <TbArrowCurveRight className='text-5xl text-white -rotate-45 absolute top-3/4 left-1/4'></TbArrowCurveRight>
           </div>
        </div>
    );
};

export default Banner;