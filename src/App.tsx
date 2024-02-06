import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MovieForm } from "./components/form";
import { MovieList } from "./components/listOfMovies";
// layout of overall page structure should be done here. Import components here.
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <MovieForm />
                <MovieList />
            </header>
        </div>
    );
}

export default App;
