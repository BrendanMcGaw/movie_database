import "./Styles/App.css";
import React, { useRef, useState } from "react";
import { MovieList } from "./Components/MovieList";
import { Navbar } from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { MoviePage } from "./Components/MoviePage";
import { HomePage } from "./Components/HomePage";
import { SearchResultsPage } from "./Components/Search/ResultsPage";
import { Footer } from "./Components/Footer/FooterComponent";
import {
    CSSTransition,
    SwitchTransition,
    TransitionGroup,
} from "react-transition-group";
// layout of overall page structure should be done here. Import components here.
export type MovieCardProps = {
    movie: {
        id: number;
        title: string;
        poster: string;
        year: number;
        description: string;
        runtime: number;
    };
    showFullDescriptionHandler: (movieId: number) => void;
    toggleUpdateForm: (movieId: number) => void;
    showUpdateMovieForm: { [id: number]: boolean };
    showFullDescription: { [id: number]: boolean };
};

const App: React.FC = () => {
    const location = useLocation();
    return (
        <div className="App">
            <Navbar />
            <main>
                <Routes location={location}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/browse-movies" element={<MovieList />} />
                    <Route path="/movie/:id" element={<MoviePage />} />
                    <Route
                        path="/search-results"
                        element={<SearchResultsPage />}
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
