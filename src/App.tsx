import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from './Routes/About';
import Books from "./Routes/Books";
import Login from "./Routes/Login";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode = "wait">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "about" element = {<About />} />
          <Route path = "books" element = {<Books />} />
          <Route path = "login" element = {<Login />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;