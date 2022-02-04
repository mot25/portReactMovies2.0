import React from "react"
import Header from "./componets/header/Header"
import Home from "./page/home/Home"
import { MoviesContext } from "./context"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./page/About"
import NotFound from "./page/NotFound/NotFound";
import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <MoviesContext >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portReactMovies2.0" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mo" element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </MoviesContext>
      </BrowserRouter>
    </>
  );
}

export default App;
