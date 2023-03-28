import MovieController from "../../../../controller/MovieController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a movie controller
const movieController = new MovieController();

/**
 * Movie genre admin show.
 *  
 * @returns {undefined}
 */
export default function MovieGenresAdminShow() {
    // Load and render the movie show template
    loadAndRender('src/view/movie/admin/showByGenre/template.html', (html) => {
                
          // find the genre search input
          const genre = html.querySelector('[name="search-genre"]');
        
           // Get movie HTML element wrapper
           const movieWrapper = html.querySelector('#wrapper');

           //eventlistener for submit button search
           html.querySelector('#genre-search').addEventListener('submit', (event) => {
            event.preventDefault();
        // Find movies by genre
        movieController.findByGenre(genre, (movieResponses) => {
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

    })
}