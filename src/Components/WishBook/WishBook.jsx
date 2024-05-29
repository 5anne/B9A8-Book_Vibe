import { FiMapPin } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdInsertPageBreak } from "react-icons/md";
import { Link } from "react-router-dom";

const WishBook = ({ markedBook }) => {
    const { bookId, bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = markedBook;
    return (
        <div className="flex gap-8 border-[1px] rounded-2xl p-6 mt-8">
            <img className="bg-[#1313130D] rounded-2xl px-12 py-8 h-[250px]" src={image} alt="" />
            <div className="w-full">
                <h1 className="font-bold text-2xl playfair-display">{bookName}</h1>
                <p className="font-medium text-[#131313CC] text-base py-4">By: {author}</p>
                <div className="flex items-center gap-6 font-medium text-[#23BE0A] text-base">
                    <p className="font-bold text-black">Tag</p>
                    {
                        tags.map((tag, idx) => <p key={idx} className="bg-[#F3F3F3] rounded-xl px-4 py-1 my-4">{tag}</p>)
                    }
                    <p className="text-[#131313CC] flex items-center gap-2"><FiMapPin /> Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className="flex items-center gap-6 text-[#13131399] text-base border-b-2 pb-4">
                    <p className="flex items-center gap-1"><IoPeopleOutline /> Publisher: {publisher}</p>
                    <p className="flex items-center gap-1"><MdInsertPageBreak /> Page {totalPages}</p>
                </div>
                <div className="mt-4">
                    <button className="text-[#328EFF] text-base bg-[#328EFF26] rounded-3xl px-4 py-1 mr-2">Category: {category}</button>
                    <button className="text-[#FFAC33] text-base bg-[#FFAC3326] rounded-3xl px-4 py-1 mr-2">Rating: {rating}</button>
                    <Link to={`/details/${bookId}`}>
                        <button className="text-[#FFFFFF] hover:bg-[#23BE0ACC] text-base bg-[#23BE0A] rounded-3xl px-4 py-1">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WishBook;