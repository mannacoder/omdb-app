import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Header from "./components/header/header";
import Home from "./screens/home/home";
import MovieDetail from "./screens/movieDetail/movieDetail";
import PageNotFound from "./screens/pageNotFound/pageNotFound";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
