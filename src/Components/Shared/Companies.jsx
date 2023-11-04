import img1 from '../../assets/Frame (1).svg'
import img2 from '../../assets/Frame (2).svg'
import img3 from '../../assets/Frame (3).svg'
import img4 from '../../assets/Frame (4).svg'
import img5 from '../../assets/Frame (5).svg'
import img6 from '../../assets/Frame (6).svg'
import img7 from '../../assets/yandex_music.svg'
const Companies = () => {
    return (
        <div className='container mx-auto md:flex items-center my-32'>
            <div className='grid grid-cols-3 flex-grow'>
                <img className='mx-auto' src={img1} alt="" />
                <img src={img2} alt="" />
                <img className='-ml-20' src={img3} alt="" />
                <img className='mx-auto' src={img7} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img className='mx-auto -mr-5' src={img6} alt="" />

            </div>
            <div className='text-white space-y-5'>
                <h1 className='text-3xl md:text-4xl font-black'>Work With <span className='text-[#A582F7]'>Exciting</span><br /> Companies</h1>
                <p>Discover career opportunities with exciting, innovative companies. <br /> Elevate your career with us today!</p>
                <button className='btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white'>Get Started</button>

            </div>
            
        </div>
    );
};

export default Companies;