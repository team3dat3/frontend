import MovieController from "../../../../controller/MovieController.js";
import OmdbController from "../../../../controller/OmdbController.js";
import MovieRequest from "../../../../dto/movie/MovieRequest.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a movie controller
const movieController = new MovieController();

// Create a omdb controller
const omdbController = new OmdbController();

/**
 * Movie admin create.
 *  
 * @returns {undefined}
 */
export default function MovieAdminCreate() {
    // Load and render the movie admin show template
    loadAndRender('src/view/movie/admin/create/template.html', (html) => {
        
        // find the movie search input
        const title = html.querySelector('[name="search-title"]');
           // find the year search input
           const year = html.querySelector('[name="year-title"]');


        // find movie title input element by name within the template
        const movieTitleElement = html.querySelector('[name="movieTitle"]');
        const directorElement = html.querySelector('[name="director"]');
        const actorsElement = html.querySelector('[name="actors"]');
        const prodYearElement = html.querySelector('[name="prodYear"]');
        const ageLimitElement = html.querySelector('[name="ageLimit"]');
        const descriptionElement = html.querySelector('[name="description"]');
        const genresElement = html.querySelector('[name="genre"]');

        // Find movie
        omdbController.findMovie(title, year, (omdbResponse) => {
            // Set the value of the attributes elements to the value of the movie response
            movieTitleElement.value = omdbResponse.movieTitle;
            directorElement.value = omdbResponse.director;
            actorsElement.value = omdbResponse.actors;
            prodYearElement.value = omdbResponse.prodYear;
            ageLimitElement.value = omdbResponse.ageLimit;
            descriptionElement.value = omdbResponse.description;
            genresElement.value = omdbResponse.genre.join(', ');
        }, (error) => {
            console.log(error);
        });

        // Add event listener to movie form
        html.querySelector('#movie-form').addEventListener('submit', (event) => {
            event.preventDefault();

            // Create a movie request
            const movieRequest = new MovieRequest(
                movieTitleElement.value, 
                directorElement.value, 
                actorsElement.value, 
                prodYearElement.value, 
                ageLimitElement.value, 
                descriptionElement.value, 
                genresElement.value.split(',').map(item => item.trim())
            );        

            // Create movie
            movieController.create(movieRequest, (movieResponse) => {
                console.log(movieResponse);
            }, (error) => {
                console.log(error);
            });
        });
    });
}