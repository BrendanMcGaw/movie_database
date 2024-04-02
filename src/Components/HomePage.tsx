import "../Styles/Home.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const HomePage = () => {
    return (
        <div className="homepageContainer">
            <input
                placeholder="Search for movies..."
                className="searchInput"
            ></input>
        </div>
    );
};
