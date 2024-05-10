import { AnimatePresence } from "framer-motion";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from './Routes/About';
import Books from "./Routes/Books";
import Login from "./Routes/Login";

function App() {
  return (
    <HashRouter>
      <AnimatePresence mode = "wait">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "about" element = {<About />} />
          <Route path = "books" element = {<Books />} />
          <Route path = "login" element = {<Login />} />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;