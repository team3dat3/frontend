import MovieController from "../../../../controller/MovieController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a movie controller
const movieController = new MovieController();

/**
 * Movie admin show.
 *  
 * @returns {undefined}
 */
export default function MovieAdminShow() {
    // Load and render the movie show template
    loadAndRender('src/view/movie/admin/show/template.html', (html) => {
                
          // find the movie search input
          const title = html.querySelector('[name="search-title"]');
        
           // Get movie HTML element wrapper
           const movieWrapper = html.querySelector('#wrapper');

           //eventlistener for submit button find
           html.querySelector('#movie-search').addEventListener('submit', (event) => {
            event.preventDefault();
        // Find movie
                movieController.find(title, (movieResponse) => {
               // Create a new div element
               const element = document.createElement('div');
               // Set the inner HTML of the div element to the JSON string of the movie
               element.innerHTML = JSON.stringify(movieResponse);
               // Append the div element to the movie HTML element wrapper
               movieWrapper.appendChild(element);
                }, (error) => {
                    console.log(error);
                });
            })
     

    });
}