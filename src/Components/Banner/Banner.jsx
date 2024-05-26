import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const links = <>
    <NavLink to="/books">Visit The list</NavLink>
    </>
    return (
        <div className="flex justify-between items-center bg-[#1313130D] rounded-xl px-32 py-10 gap-4 my-8">
            <div className="space-y-8">
                <h1 className="font-bold text-5xl text-[#131313] leading-relaxed playfair-display">Books to freshen up your bookshelf</h1>
                <button className="font-semibold text-xl text-[#FFFFFF] bg-[#23BE0A] rounded-lg px-4 py-2">{links}</button>
            </div>
            <img src="src/assets/pngwing 1.svg" alt="" />
        </div>
    );
};

export default Banner;