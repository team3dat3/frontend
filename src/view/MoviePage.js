import MovieController from "../controller/MovieController.js";
import MovieRequest from "../dto/movie/MovieRequest.js";

// Create a movie controller
const movieController = new MovieController();

/**
 * Movie page class.
 *  
 * @returns {MoviePage}
 */
export default function MoviePage() {
    
    // Find all movies
    movieController.findAll((movieResponses) => {
        console.log(movieResponses);
    }, (error) => {
        console.log(error);
    });

    // Find a movie
    movieController.find(1, (movieResponse) => {
        console.log(movieResponse);
    }, (error) => {
        console.log(error);
    });

    // Create a movie
    const movieRequest = new MovieRequest("The Matrix", 18);
    movieController.create(movieRequest, (movieResponse) => {
        console.log(movieResponse);
    }, (error) => {
        console.log(error);
    });

    // Update a movie
    movieRequest.age = 16;
    movieController.update(movieRequest, (movieResponse) => {
        console.log(movieResponse);
    }, (error) => {
        console.log(error);
    });

    // Delete a movie
    movieController.delete(movieRequest, () => {
        console.log("Movie deleted");
    }, (error) => { 
        console.log(error);
    });
}