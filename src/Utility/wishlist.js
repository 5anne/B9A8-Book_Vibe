
const getWishlist = () => {
    const storedWishlist = localStorage.getItem('added-wishlist');
    // console.log(storedWishlist);
    if (storedWishlist) {
        return JSON.parse(storedWishlist);
    }
    return [];
}

const saveWishlist = id => {
    const storedWishlist = getWishlist();
    // console.log(storedWishlist);
    const exists = storedWishlist.find(bookId => bookId === id);
    // console.log(exists);
    if (!exists) {
        storedWishlist.push(id);
        localStorage.setItem('added-wishlist', JSON.stringify(storedWishlist));
    }
}

export { getWishlist, saveWishlist };