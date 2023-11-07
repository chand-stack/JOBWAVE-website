import img1 from '../../assets/Frame (8).svg'
import img2 from '../../assets/Frame (9).svg'
import img3 from '../../assets/Frame (10).svg'
import img4 from '../../assets/Group (1).svg'
import img5 from '../../assets/Group (2).svg'
const Company = () => {
    return (
        <div className='container mx-auto my-40'>
            <h1 className='text-3xl md:text-4xl font-black text-white text-center'>Work With Exciting 100+ <span className='text-[#A582F7]'>Companies</span> In The World</h1>
            <div className='flex flex-wrap justify-around items-center lg:px-36 my-5'>
                <div className='text-white flex gap-1 items-center'>
                    <img src={img1} alt="" />
                    <p>Opentable</p>
                </div>
                <div className='text-white flex gap-1 items-center'>
                    <img src={img2} alt="" />
                    <p>slack</p>
                </div>
                <div className='text-white flex gap-1 items-center'>
                    <img src={img3} alt="" />
                    <p>amazon</p>
                </div>
                <div className='text-white flex gap-1 items-center'>
                    <img src={img4} alt="" />
                    <p>shopify</p>
                </div>
                <div className='text-white '>
                    <img src={img5} alt="" />
                    
                </div>
            </div>
        </div>
    );
};

export default Company;