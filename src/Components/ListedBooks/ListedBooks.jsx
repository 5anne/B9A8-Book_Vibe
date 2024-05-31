
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MarkedBook from '../MarkedBook/MarkedBook';
import WishBook from '../WishBook/WishBook';
import { useEffect, useState } from 'react';
import { getStoredBooks } from '../../Utility/localStorage';
import { useLoaderData } from 'react-router-dom';
import { getWishlist } from '../../Utility/wishlist';


const ListedBooks = () => {

    const books = useLoaderData();
    // console.log(books);

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const idList = getStoredBooks();
    const idWishList = getWishlist();

    useEffect(() => {

        const tempList = [];
        const tempWishList = [];

        for (const id of idList) {
            const dataOfReadList = books.find(book => book.bookId === id);
            tempList.push(dataOfReadList);
        }
        setReadList(tempList);

        for (const id of idWishList) {
            const dataOfReadList = books.find(book => book.bookId === id);
            tempWishList.push(dataOfReadList);
        }
        setWishList(tempWishList);

    }, [books])

    const wishListHandler = () => {
        const tempFilterList = [];
        const removedBooks = idWishList.filter(id => !idList.includes(id));
        for (const id of removedBooks) {
            const filteredWishlist = wishList.find(book => book.bookId === id);
            tempFilterList.push(filteredWishlist);
        }
        setWishList(tempFilterList);
    }

    const ratingHandler = () => {
        const sortedReadList = readList.sort(function (a, b) { return b.rating - a.rating });
        setReadList(sortedReadList);
    }
    // console.log(readList);

    return (
        <div>
            <h1 className="font-bold text-center text-3xl bg-[#F3F3F3] rounded-xl my-8 p-8">Books</h1>
            <details className="dropdown flex justify-center mb-14">
                <summary className="font-semibold text-xl text-[#FFFFFF] bg-[#23BE0A] rounded-lg px-4 py-2 w-32 mx-auto my-1">Sort By</summary>
                <div className="flex justify-center">
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-48">
                        <li onClick={ratingHandler}><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published year</a></li>
                    </ul>
                </div>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab onClick={wishListHandler}>Wishlist Books</Tab>
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
                            wishList.map(markedBook => <WishBook key={markedBook.bookId} markedBook={markedBook}></WishBook>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;