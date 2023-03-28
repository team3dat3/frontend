import MovieController from "../../../../controller/MovieController.js";
import MovieRequest from "../../../../dto/movie/MovieRequest.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a movie controller
const movieController = new MovieController();

/**
 * Movie admin edit.
 *  
 * @returns {undefined}
 */
export default function MovieAdminEdit() {
    // Load and render the movie admin show template
    loadAndRender('src/view/movie/admin/edit/template.html', (html) => {
        
        // find the movie search input
        const title = html.querySelector('[name="search-title"]');


        // find movie title input element by name within the template
        const movieTitleElement = html.querySelector('[name="movieTitle"]');
        const directorElement = html.querySelector('[name="director"]');
        const actorsElement = html.querySelector('[name="actors"]');
        const prodYearElement = html.querySelector('[name="prodYear"]');
        const ageLimitElement = html.querySelector('[name="ageLimit"]');
        const descriptionElement = html.querySelector('[name="description"]');
        const genresElement = html.querySelector('[name="genre"]');


              //eventlistener for submit button search
              html.querySelector('movie-search').addEventListener('submit', (event) => {
                event.preventDefault();
        // Find movie
        movieController.find(title, (movieResponse) => {
            // Set the value of the attributes elements to the value of the movie response
            movieTitleElement.value = movieResponse.movieTitle;
            directorElement.value = movieResponse.director;
            actorsElement.value = movieResponse.actors;
            prodYearElement.value = movieResponse.prodYear;
            ageLimitElement.value = movieResponse.ageLimit;
            descriptionElement.value = movieResponse.description;
            genresElement.value = movieResponse.genre.join(', ');
        }, (error) => {
            console.log(error);
        });
    })
        // Add event listener to movie form
        html.querySelector('#movie-form').addEventListener('submit', (event) => {
            event.preventDefault();

            // Create a movie request
            const movieRequest = new MovieRequest(
                movieTitleElement.value, directorElement.value, actorsElement.value, prodYearElement.value, ageLimitElement.value, descriptionElement.value, genresElement.value.split(',').map(item => item.trim())
            );        

            // Update movie
            movieController.update(movieRequest, (movieResponse) => {
                console.log(movieResponse);
            }, (error) => {
                console.log(error);
            });
        });
    });
}