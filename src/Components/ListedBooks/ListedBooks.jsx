import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks } from '../../Utility/localStorage';
import MarkedBook from '../MarkedBook/MarkedBook';
import { getWishlist } from '../../Utility/wishlist';
import WishBook from '../WishBook/WishBook';
// import { useState } from 'react';

const ListedBooks = () => {
    const books = useLoaderData();
    // console.log(books);

    const idList = getStoredBooks();
    const idWishlist = getWishlist();

    const readList = [];
    const wishlist = [];
    const secondWishlist = [];

    for (const id of idList) {
        const dataOfReadList = books.find(book => book.bookId === id);
        readList.push(dataOfReadList);
    }
    
    for (const id of idWishlist) {
        const dataOfReadList = books.find(book => book.bookId === id);
        wishlist.push(dataOfReadList);
    }

    console.log(readList);
    console.log(wishlist);

    for (const book of readList){
        // console.log(book);
        for(const wBook of wishlist){
            // console.log(wBook);
        }
        // const dataOfWishList = wishlist.find(wBook => wBook.bookId !== book.bookId)
        // console.log(dataOfWishList);
        // secondWishlist.push(dataOfWishList);
    }

    return (
        <div>
            <h1 className="font-bold text-center text-3xl bg-[#F3F3F3] rounded-xl my-8 p-8">Books</h1>
            <details className="dropdown flex justify-center mb-14">
                <summary className="font-semibold text-xl text-[#FFFFFF] bg-[#23BE0A] rounded-lg px-4 py-2 w-32 mx-auto my-1">Sort By</summary>
                <div className="flex justify-center">
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-48">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published year</a></li>
                    </ul>
                </div>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        {
                            readList.map(markedBook => <MarkedBook key={markedBook.bookId} markedBook={markedBook}></MarkedBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        {
                            secondWishlist.map(markedBook => <WishBook key={markedBook.bookId} markedBook={markedBook}></WishBook>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;