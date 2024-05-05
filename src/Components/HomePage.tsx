import "../Styles/Home.css";

import { Search } from "./Search/Searchbar";

export const HomePage = () => {
    return (
        <div className="homepageContainer">
            <h3 className="homepageText">
                Capturing the Heart of Cinema with Picture Pulse: Your Gateway
                to Movie Magic!
            </h3>
            {/* TODO: functionality to go to Link of moviePage related to title of the movie, where the id matches an id that is present in the database. */}
            <Search />
        </div>
    );
};

// TODO:Concepts
// SVG image of heartbeat monitor pulse that essentially hides the whole thing (as a border for the navigation section)
// animates the reveal on a loop from left to right, acting like a heartbeat pulse (Picture pulse)
// TODO:Concepts
// Red movie curtains close when clicking search and reopen on search page.
// Perhaps red curtain image, mirrored on both sides, closing at the same speed.
// Add ripple effect to curtain to look like its wavering
// Add curvature to give the appearance of the top of the curtain closing before hte bottom (Like the sway of real curtains)
// Curtains would have to be already up in the exact same position on the search page initially and then would have to open to reveal search results.
