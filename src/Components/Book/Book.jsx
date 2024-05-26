import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;
    console.log(book);

    return (
        <Link to={`/details/${bookId}`}>
            <div>
                <div className="border-2 border-[#F3F3F3] rounded-lg p-6 h-full">
                    <figure className="flex justify-center bg-[#F3F3F3] rounded-xl py-4 px-1">
                        <img src={image} alt="Shoes" className="w-44 h-56" />
                    </figure>
                    <div>
                        <div className="flex justify-around gap-6 font-medium text-[#23BE0A] text-lg">
                            {
                                tags.map((tag, idx) => <p key={idx} className="bg-[#F3F3F3] rounded-xl px-4 py-1 my-4">{tag}</p>)
                            }
                        </div>
                        <h1 className="font-bold text-2xl playfair-display">{bookName}</h1>
                        <p className="font-medium text-[#131313CC] text-base border-b-2 border-dashed py-4">By: {author}</p>
                        <div className="flex justify-between items-center gap-10 font-medium text-[#131313CC] text-base mt-4">
                            <p>{category}</p>
                            <p className="flex items-center gap-2">{rating}<span><FaRegStar /></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;