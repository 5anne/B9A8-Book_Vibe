import { useLoaderData, useParams } from "react-router-dom";



const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    console.log(books);
    console.log(typeof id);

    const bookDetail = books.filter(book => book.bookId === idInt);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = bookDetail;
    console.log(bookDetail);


    return (
        <div className="my-10 flex justify-between gap-8">
            <div className="bg-[#1313130D] p-8 rounded-lg">
                <img src={image} alt="" />
            </div>
            <div>
                <h1 className="font-bold text-[40px] playfair-display">{bookName}</h1>
                <p className="font-medium text-[#131313CC] text-[20px] border-b-[1px] solid py-4">By: {author}</p>
                <p className="font-medium text-[#131313CC] text-[20px] border-b-[1px] solid py-4">{category}</p>
                <p className="font-bold text-[#131313] text-base py-4">Review: <span className="text-[#131313B3] font-normal">{review}</span></p>
                <div className="flex items-center gap-6 font-medium text-[#23BE0A] text-base">
                    <p className="font-bold text-black">Tag</p>
                    {
                        tags.map((tag, idx) => <p key={idx} className="bg-[#F3F3F3] rounded-xl px-4 py-1 my-4">{tag}</p>)
                    }
                </div>
                <p className="text-base text-[#131313B3] gap-6">Number of Pages: <span>{totalPages}</span></p>
                <p>Publisher: {publisher}</p>
                <p>Year of Publishing: {yearOfPublishing}</p>
                <p>Rating: {rating}</p>
                <button>Read</button>
                <button>Wishlist</button>
            </div>

        </div>
    );
};

export default BookDetails;