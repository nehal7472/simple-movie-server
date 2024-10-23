import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Error from "./assets/pages/Error";
import Movie from "./assets/pages/Movie";
import Header from "./assets/pages/Components/layout/Header";
import Footer from "./assets/pages/Components/layout/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Error />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
