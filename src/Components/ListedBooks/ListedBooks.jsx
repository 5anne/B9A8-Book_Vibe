

const ListedBooks = () => {
    return (
        <div>
            <h1 className="font-bold text-center text-3xl bg-[#F3F3F3] rounded-xl my-8 p-8">Books</h1>
            <details className="dropdown flex justify-center">
                <summary className="font-semibold text-xl text-[#FFFFFF] bg-[#23BE0A] rounded-lg px-4 py-2 w-32 mx-auto my-1">Sort By</summary>
                <div className="flex justify-center">
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-48">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published year</a></li>
                    </ul>
                </div>
            </details>
        </div>
    );
};

export default ListedBooks;