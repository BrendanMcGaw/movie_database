export const DeleteMovie = (movieId: number) => {
    fetch(`http://localhost:3001/movies/delete/${movieId}`, {
        method: "DELETE",
        mode: "cors",
        body: null,
    });
    console.log(movieId);
    window.location.reload(); // Reloads current window to update the UI
};
