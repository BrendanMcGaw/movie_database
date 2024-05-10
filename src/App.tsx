import "./Styles/App.css";
import React from "react";
import { MovieList } from "./Components/MovieList";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { MoviePage } from "./Components/MoviePage";
import { HomePage } from "./Components/HomePage";
import { SearchResultsPage } from "./Components/Search/ResultsPage";
import { Footer } from "./Components/Footer/FooterComponent";
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
    return (
        <div className="App">
            <Navbar /> {/* Navbar is our header. */}
            <main>
                <Routes>
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
