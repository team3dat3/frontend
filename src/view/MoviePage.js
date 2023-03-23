import MovieController from "../controller/MovieController";
import Movie from "../model/Movie";

// Create a movie controller
const movieController = new MovieController();

/**
 * Movie page class.
 *  
 * @returns {MoviePage}
 */
export default function MoviePage() {
    
    // Find all movies
    movieController.findAll((movies) => {
        console.log(movies);
    }, (error) => {
        console.log(error);
    });

    // Find a movie
    movieController.find(1, (movie) => {
        console.log(movie);
    }, (error) => {
        console.log(error);
    });

    // Create a movie
    const movie = new Movie("The Matrix", 18);
    movieController.create(movie, (movie) => {
        console.log(movie);
    }, (error) => {
        console.log(error);
    });

    // Update a movie
    movie.age = 16;
    movieController.update(movie, (movie) => {
        console.log(movie);
    }, (error) => {
        console.log(error);
    });

    // Delete a movie
    movieController.delete(movie, () => {
        console.log("Movie deleted");
    }, (error) => { 
        console.log(error);
    });
}