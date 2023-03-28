import MovieController from "../../../../controller/MovieController.js";
import MovieRequest from "../../../../dto/movie/MovieRequest.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a movie controller
const movieController = new MovieController();

/**
 * Movie admin delete.
 *  
 * @returns {undefined}
 */
export default function MovieAdminDelete() {
    // Load and render the movie admin delete template
    loadAndRender('src/view/movie/admin/delete/template.html', (html) => {

        // find movie title input element by name within the template
        const movieTitleElement = html.querySelector('[name="movieTitle"]');
        
        // Create a movie request
        const movieRequest = new MovieRequest();
        
        //eventlistener for submit button search
        html.querySelector('movie-search').addEventListener('submit', (event) => {
            event.preventDefault();
        // Find movie
        movieController.find(movieTitleElement, (movieResponse) => {
            // Set the value of the attributes elements to the value of the movie response
            movieRequest.title = movieResponse.movieTitle;

        }, (error) => {
            console.log(error);
        });
    })
        // Add event listener to movie form
        html.querySelector('#movie-form').addEventListener('submit', (event) => {
            event.preventDefault();

            
        

            // Delete movie
            movieController.delete(movieRequest, (movieResponse) => {
                console.log(movieResponse);
            }, (error) => {
                console.log(error);
            });
        });
    });
}