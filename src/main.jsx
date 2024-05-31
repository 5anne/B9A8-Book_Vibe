import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import BookDetails from './Components/BookDetails/BookDetails';
import ReadPages from './Components/ReadPages/ReadPages';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/pages",
        element: <ReadPages></ReadPages>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/details/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
