import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBooks, saveAddedBooks } from '../../Utility/localStorage';
import { getWishlist, saveWishlist } from '../../Utility/wishlist';
import { useEffect, useState } from 'react';



const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const bookDetail = [];

    for (let i = 0; i < books.length; i++) {
        // console.log(books[i]);
        if (books[i].bookId === idInt) {
            // console.log(books[i].bookId);
            bookDetail.push(books[i]);
        }
    }

    // const bookDetail = books?.find(book => book.bookId === idInt);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = bookDetail[0];
    // console.log(bookDetail[0]);
    // console.log(bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing);e, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing);

    const notify = () => {
        const idCheck = getStoredBooks();
        // console.log(idCheck);
        const exists = idCheck.find(bookId => bookId === idInt);
        // console.log(exists);
        if (!exists) {
            toast('Mark as Read');
        }
        else {
            toast('Already Marked as Read!');
        }
        saveAddedBooks(idInt);
    }

    const notifyWishlist = () => {
        const wishCheck = getWishlist();
        const idCheck = getStoredBooks();
        const exists = wishCheck.find(bookId => bookId === idInt);
        const existID = idCheck.find(bookId => bookId === idInt);
        if (existID) {
            toast('Already Added to Read-list!');
        }
        else if (!exists) {
            toast('Added to Wishlist');
        }
        else {
            toast('Already Added to wishlist!');
        }
        saveWishlist(idInt);
    }


    return (
        <div className="my-10 grid lg:grid-cols-2 gap-8">
            <div className="flex justify-center bg-[#1313130D] p-8 rounded-lg h-[600px]">
                <img src={image} alt="" />
            </div>
            <div className="h-full">
                <h1 className="font-bold text-2xl lg:text-[40px] playfair-display">{bookName}</h1>
                <p className="font-medium text-[#131313CC] text-[20px] border-b-[1px] solid py-4">By: {author}</p>
                <p className="font-medium text-[#131313CC] text-[20px] border-b-[1px] solid py-4">{category}</p>
                <p className="font-bold text-[#131313] text-base py-4">Review: <span className="text-[#131313B3] font-normal">{review}</span></p>
                <div className="flex items-center gap-6 font-medium text-[#23BE0A] text-base">
                    <p className="font-bold text-black">Tag</p>
                    {
                        tags.map((tag, idx) => <p key={idx} className="bg-[#F3F3F3] rounded-xl px-4 py-1 my-4">{tag}</p>)
                    }
                </div>
                <div className="flex items-center gap-10">
                    <div>
                        <p className="text-base text-[#131313B3] my-2">Number of Pages:</p>
                        <p className="text-base text-[#131313B3] my-2">Publisher:</p>
                        <p className="text-base text-[#131313B3] my-2">Year of Publishing:</p>
                        <p className="text-base text-[#131313B3] my-2">Rating:</p>
                    </div>
                    <div>
                        <p className="text-base text-[#131313] font-semibold my-2">{totalPages}</p>
                        <p className="text-base text-[#131313] font-semibold my-2">{publisher}</p>
                        <p className="text-base text-[#131313] font-semibold my-2">{yearOfPublishing}</p>
                        <p className="text-base text-[#131313] font-semibold my-2">{rating}</p>
                    </div>
                </div>
                <div className="my-2 flex">
                    <button onClick={notify} className="text-[18px] text-[#131313] font-semibold border-[1px] border-[#1313134D] rounded-lg px-4 py-2 mr-2">Read</button>
                    <ToastContainer />
                    <button onClick={notifyWishlist} className="text-[18px] text-[#FFFFFF] font-semibold bg-[#50B1C9] rounded-lg px-4 py-2">Wishlist</button>
                    <ToastContainer />
                </div>
            </div>

        </div>
    );
};

export default BookDetails;