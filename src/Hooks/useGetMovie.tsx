export {};

// import React, { useState, useEffect } from "react";

// const GetMovie = () => {
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 console.log("LETS FETCH!!");
//                 // Getting TypeError failed to fetch.
//                 const response = await fetch(
//                     `http://localhost:3001/movies/getMovies/${id}`
//                 );
//                 const data = await response.json();
//                 setMovie(data);
//             } catch (error) {
//                 console.log("Error fetching movies for front-end", error);
//             }
//         };

//         fetchData();
//     }, [id]);
// };
// const [movie, setMovie] = useState<any[]>([]);
