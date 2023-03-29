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
export default function MovieAdminEdit(title) {

    // Load and render the movie admin show template
    loadAndRender('src/view/movie/admin/edit/template.html', (html) => {

        // Find movie
        movieController.find(title, (movieResponse) => {
            // Set the value of the attributes elements to the value of the movie response
            html.querySelector('[name="movieTitle"]').value = movieResponse.title;
            html.querySelector('[name="director"]').value = movieResponse.director;
            html.querySelector('[name="actors"]').value = movieResponse.actors;
            html.querySelector('[name="prodYear"]').value = movieResponse.prodYear;
            html.querySelector('[name="ageLimit"]').value = movieResponse.ageLimit;
            html.querySelector('[name="description"]').value = movieResponse.description;
            html.querySelector('[name="genres"]').value = movieResponse.genre.join(', ');
            html.querySelector('[name="runtime"]').value = movieResponse.runtime;   
        }, (error) => {
            console.log(error);
        });

        // Find form element by id within the template
        const formElement = html.querySelector('#movie-form');

        // Add event listener to movie form
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();

            // Get form data
            const formData = new FormData(formElement);

            // Create a movie request
            const movieRequest = new MovieRequest(
                title,
                formData.get('director'),
                formData.get('actors'),
                formData.get('prodYear'),
                formData.get('ageLimit'),
                formData.get('description'),
                formData.get('genres').split(',').map(item => item.trim()),
                formData.get('runtime')
            );

            // Update movie
            movieController.update(movieRequest, (movieResponse) => {
                window.router.navigate('/admin/movies');
            }, (error) => {
                console.log(error);
            });
        });
    });
}