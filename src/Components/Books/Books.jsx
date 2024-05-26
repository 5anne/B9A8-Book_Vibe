import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    console.log(books);
    return (
        <div>
            <h1 className="font-bold text-center text-[40px] text-[#131313] my-8 playfair-display">Books</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;