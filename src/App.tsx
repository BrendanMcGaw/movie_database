import React, { useState } from "react";
import "./Styles/App.css";
import { MovieForm } from "./Components/MovieForm";
import { MovieList } from "./Components/MovieList";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { MoviePage } from "./Components/MoviePage";
// layout of overall page structure should be done here. Import components here.
function App() {
    const [showAddMovie, setShowAddMovie] = useState(false);

    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <button
                    className="addMovieButton"
                    onClick={() => setShowAddMovie(!showAddMovie)}
                >
                    {showAddMovie ? "" : ""} Add Movie
                </button>
            </header>
            <main>
                {showAddMovie ? (
                    <MovieForm
                        updateMode={false}
                        movieId={0}
                        showAddMovie={true}
                        moviePoster=""
                    />
                ) : null}
                {/* if showAddMovie is true, render the movieForm. */}
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/movie/:id" element={<MoviePage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
