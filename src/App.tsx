import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MovieForm } from "./components/form";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <MovieForm />
            </header>
        </div>
    );
}

export default App;
