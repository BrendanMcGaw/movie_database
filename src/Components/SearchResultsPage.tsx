import React, { useState } from "react";
import { Navbar } from "./Navbar";

const SearchResultPage = () => {
    const [searchResult, setSearchResult] = useState<any>;

    return (
        <div className="pageLayout">
            {" "}
            <Navbar />
            <div className="searchResults"></div>
        </div>
    );
};

export {};
