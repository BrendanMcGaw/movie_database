import "../Styles/Home.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const HomePage = () => {
    return (
        <div className="homepageContainer">
            <h3 className="homepageText">
                Find your favourite movies, discover where to watch them.
            </h3>
            <input
                placeholder="Search for movies..."
                className="searchInput"
            ></input>
        </div>
    );
};
