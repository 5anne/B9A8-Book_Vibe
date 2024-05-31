import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    const links = <>
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'text-[16px] font-semibold')} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'text-[16px] font-semibold')} to="/books">Listed Books</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'text-[16px] font-semibold')} to="/pages">Pages to Read</NavLink></li>
    </>
    return (
        <div className="lg:flex items-center">
            <h1 className="text-center lg:text-start flex-1 font-bold text-3xl text-[#131313]">Book Vibe</h1>
            <ul className="flex justify-center lg:justify-start lg:flex-1 gap-6 text-xl text-[#131313CC]">
                {links}
            </ul>
            <div className="flex justify-center mt-2 lg:mt-0">
                <button className="font-semibold lg:text-xl text-[#FFFFFF] bg-[#23BE0A] rounded-lg px-2 lg:px-4 py-2 mr-4">Sign In</button>
                <button className="font-semibold lg:text-xl text-[#FFFFFF] bg-[#59C6D2] rounded-lg px-2 lg:px-4 py-2">Sign Up</button>
            </div>
        </div>
    );
};

export default Header;