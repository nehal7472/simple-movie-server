// src/App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Error from "./assets/pages/Error";
import Movie from "./assets/pages/Movie";
import { getApiData } from "./assets/api/GetApiData";
import AppLayout from "./assets/pages/Components/layout/AppLayout";

// Define the router with loaders

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getApiData,
        },
        // {
        //   path: "/movie/:movieID",
        //   element: <MovieDetails />,
        //   loader: getMovieDetails,
        // },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
