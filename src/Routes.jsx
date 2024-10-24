// src/App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Error from "./assets/pages/Error";
import Movie from "./assets/pages/Movie";
import Header from "./assets/pages/Components/layout/Header";
import Footer from "./assets/pages/Components/layout/Footer";
import { getApiData } from "./assets/api/GetApiData";

// Define the router with loaders
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/movie",
    element: (
      <>
        <Header />
        <Movie />
        <Footer />
      </>
    ),
    loader: getApiData,  // The loader to fetch API data
  },
  {
    path: "*",
    element: <Error />,  // Fallback error page
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
