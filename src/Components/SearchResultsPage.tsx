import React from "react"
import Navbar from "./Navbar.tsx"

const SearchResultPage = () => {
  const [searchResult, setSearchResult] = useState<any>;

  return (
    <div className="pageLayout"> /* Set this up as a grid layout with 1 column, 2 rows. First row contains just the Navbar. Second row is content. */
      <Navbar />
      <div className="searchResults">
      </div>
    </div>
    
  )
}

export {}
