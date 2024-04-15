import "../Styles/Home.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const HomePage = () => {
    return (
        <div className="homepageContainer">
            <h3 className="homepageText">
                Capturing the Heart of Cinema with Picture Pulse: Your Gateway
                to Movie Magic!
            </h3>

            {/* TODO: functionality to go to Link of moviePage related to title of the movie, where the id matches an id that is present in the database. */}
            <input
                placeholder="Search for movies..."
                className="searchInput"
            ></input>
        </div>
    );
};
