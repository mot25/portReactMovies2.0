import React from "react"
import Header from "./componets/header/Header"
import MostFamousMovies from "./componets/MostFamousMovies"
import TopFamousMovies from "./componets/TopFamousMovies"
import TopFamousSerials from "./componets/TopFamousSerials"
import './App.css'

function App() {
  return (
    <>
    <Header />
    <MostFamousMovies />
    <TopFamousMovies />
    <TopFamousSerials />
    </>
  );
}

export default App;
