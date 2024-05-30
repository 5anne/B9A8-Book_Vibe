import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const links = <>
    <NavLink to="/books">Visit The list</NavLink>
    </>
    return (
        <div className="flex justify-between items-center bg-[#1313130D] rounded-xl p-4 lg:px-32 lg:py-10 gap-4 my-8">
            <div className="space-y-8">
                <h1 className="font-bold lg:text-5xl text-[#131313] lg:leading-relaxed playfair-display">Books to freshen up your bookshelf</h1>
                <button className="font-semibold lg:text-xl text-[#FFFFFF] bg-[#23BE0A] rounded-lg px-4 py-2">{links}</button>
            </div>
            <img className='w-40 lg:w-full' src="src/assets/pngwing 1.svg" alt="" />
        </div>
    );
};

export default Banner;