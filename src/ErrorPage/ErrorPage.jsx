
import { Link } from 'react-router-dom';
import err from '../assets/error-jobwave.png'

const ErrorPage = () => {
    return (
        <div className='container mx-auto'>
           <div className='text-center space-y-3'>
                <h1 className='text-center text-4xl md:text-7xl lg:text-9xl font-black text-black'>Ooops!!!</h1>
                <h1 className='text-center text-4xl md:text-7xl lg:text-9xl font-black text-black'>Data Not Found</h1>
                <button className='btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none w-28 text-white'><Link to="/">Home</Link></button>
            </div>
            <img className='md:-mt-36 w-full max-w-4xl mx-auto' src={err} alt="" />
            
        </div>
    );
};

export default ErrorPage;