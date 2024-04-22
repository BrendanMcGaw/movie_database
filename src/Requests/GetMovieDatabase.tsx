// import React, { useState, useEffect } from "react";

// export const GetAllMovies = () => {
//     const [movies, setMovies] = useState<any[]>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     "http://localhost:3001/movies/getMovies/"
//                 );
//                 const data = await response.json();
//                 setMovies(data);
//                 console.log("Where are my hecking movies?", movies);
//             } catch (error) {
//                 console.log("Error fetching movies for front-end", error);
//             }
//         };

//         fetchData();
//     }, []);
// };

export {};
