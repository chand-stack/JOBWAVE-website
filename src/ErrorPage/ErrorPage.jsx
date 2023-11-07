
import { Link } from 'react-router-dom';
import err from '../assets/errorwithlandscape.jpg'
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    
    return (
        <>
        <Helmet>
        <title>Error</title>
        <meta name="description" content="My page description" />
      </Helmet>
        <div className='container mx-auto h-screen'>
            <img className='object-center h-screen max-w-4xl mx-auto' src={err} alt="" />
            <div className='text-center'>
                <button className='btn absolute bottom-1/4 md:bottom-5 lg:bottom-10 bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none w-28 text-white'><Link to="/">Home</Link></button>
            </div>
            
        </div>
        </>
    );
};

export default ErrorPage;