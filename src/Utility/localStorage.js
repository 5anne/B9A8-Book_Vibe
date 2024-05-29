
const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('added-books');
    // console.log(storedBooks);
    if (storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveAddedBooks = id => {
    const storedBooks = getStoredBooks();
    // console.log(storedBooks);
    const exists = storedBooks.find(bookId => bookId === id);
    // console.log(exists);
    if (!exists) {
        storedBooks.push(id);
        localStorage.setItem('added-books', JSON.stringify(storedBooks));
    }
}

export { getStoredBooks, saveAddedBooks };