import MovieController from "../../../../controller/MovieController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a movie controller
const movieController = new MovieController();

/**
 * Movie index.
 *  
 * @returns {undefined}
 */
export default function MovieIndex() {
    // Load and render the movie index template
    loadAndRender('src/view/movie/anonymous/index/template.html', (html) => {
        // Get movie HTML element wrapper
        const movieWrapper = html.querySelector('#wrapper');

        // Find all movie
        movieController.findAll((movieResponses) => {
            // Loop through all movie responses
            movieResponses.forEach(movie => {
                // Create a new div element
                const element = document.createElement('div');
                // Set the inner HTML of the div element to the JSON string of the movie
                element.innerHTML = JSON.stringify(movie);
                // Append the div element to the movie HTML element wrapper
                movieWrapper.appendChild(element);
            });
        }, (error) => {
            console.log(error);
        });
    });
}