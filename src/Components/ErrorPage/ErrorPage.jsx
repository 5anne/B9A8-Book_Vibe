import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="text-center mt-20">
            <h1 className="text-2xl">{error.status} {error.statusText}</h1>
            <p>{error.data}</p>
            <p>Go Back to <Link to="/home" className="hover:bg-gray-300 px-2 rounded-lg">Home</Link></p>
        </div>
    );
};

export default ErrorPage;