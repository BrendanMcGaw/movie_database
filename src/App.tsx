import React, { useState } from "react";
import logo from "./Assets/logo.svg";
import "./Styles/App.css";
import { MovieForm } from "./Components/MovieForm";
import { MovieList } from "./Components/MovieList";
// layout of overall page structure should be done here. Import components here.

function App() {
    const [showAddMovie, setShowAddMovie] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button
                    className="addMovieButton"
                    onClick={() => setShowAddMovie(!showAddMovie)}
                >
                    {showAddMovie ? "Hide " : "Show "} Add Movie
                </button>
                {showAddMovie ? (
                    <MovieForm
                        updateMode={false}
                        movieId={0}
                        showAddMovie={true} // Weird error that when I had this to just "showAddMovie" which is supposed to pass true as default, it would stop getting getting my list of movies because it thought I was only using the Update buttond instead.
                    />
                ) : null}
                {/* if showAddMovie is true, render the movieForm. */}
                <MovieList />
            </header>
        </div>
    );
}

export default App;
