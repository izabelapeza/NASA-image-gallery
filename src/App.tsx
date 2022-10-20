import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ImageGallery from "./pages/ImageGallery";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();

  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname.split("/")[1]}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/image-gallery/:id" element={<ImageGallery />}></Route>
      </Routes>
    </AnimatePresence>
  );
}
