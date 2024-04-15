import "./Styles/App.css";

import { MovieList } from "./Components/MovieList";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { MoviePage } from "./Components/MoviePage";
import { HomePage } from "./Components/HomePage";

// layout of overall page structure should be done here. Import components here.
function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                {/* if showAddMovie is true, render the movieForm. */}
                <Routes>
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/browse-movies" element={<MovieList />} />
                    <Route path="/movie/:id" element={<MoviePage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
