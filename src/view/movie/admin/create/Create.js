import MovieController from "../../../../controller/MovieController.js";
import OmdbController from "../../../../controller/OmdbController.js";
import MovieRequest from "../../../../dto/movie/MovieRequest.js";
import { loadAndRender } from '../../../../util/Render.js';
import { showToast } from '../../../../components/Toast.js';

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
        
        // find movie title input element by name within the template
        const movieTitleElement = html.querySelector('[name="movieTitle"]');
        const directorElement = html.querySelector('[name="director"]');
        const actorsElement = html.querySelector('[name="actors"]');
        const prodYearElement = html.querySelector('[name="prodYear"]');
        const ratedElement = html.querySelector('[name="rated"]');
        const descriptionElement = html.querySelector('[name="description"]');
        const genresElement = html.querySelector('[name="genres"]');
        const runtimeElement = html.querySelector('[name="runtime"]');
        
        //Finds movie and adds buttons
        movieTitleElement.onkeyup = () => {
            startTimer(movieTitleElement.value, html);
          };
          
   /*        html.querySelector('#search-movie').onclick = () => {
            let imdbId = this.getAttribute("data-variable1")
            getMovie(imdbId, html)

          } */

            html.querySelector('#search-movie').addEventListener("click", function(event)  {
                if (event.target.classList.contains("movie-btn")) {
                    var imdbId = event.target.getAttribute("data-variable1");
                    getMovie(imdbId, html)
                }
            });
            var searchMovie = document.getElementById("search-movie");
            searchMovie.addEventListener("click", function(event) {
            
              // do something with the movie value
            
          })

        // Add event listener to movie form
        html.querySelector('#movie-form').addEventListener('submit', (event) => {
            event.preventDefault();

            // Create a movie request
            const movieRequest = new MovieRequest(
                movieTitleElement.value, 
                directorElement.value, 
                actorsElement.value, 
                prodYearElement.value, 
                ratedElement.value, 
                descriptionElement.value, 
                genresElement.value.split(',').map(genre => genre.trim()),
                runtimeElement.value
            );        

            // Create movie
            movieController.create(movieRequest, (movieResponse) => {
                window.router.navigate('/admin/movies');
                showToast('success', `Movie saved with title: ${movieResponse.title}.`, 5000);
            }, (error) => {
                showToast('secondary', "Something went wrong. Contact support for help.", 5000);
            });
        });
    });
}

let intervalId;

function startTimer(title, html){
    console.log("start interval")

clearInterval(intervalId);
intervalId = setTimeout(() => {
    searchForMovie(title, html);
  }, 5000);
}

function searchForMovie(title, html){
     // Find movies
     console.log(title)
    omdbController.searchMovie(title, (omdbResponses) => {
        const searchList = omdbResponses.map(movie => 
            `<button class="button succes movie-btn" data-variable1="${movie.imdbId}">
            ${movie.title} - ${movie.year}
            </button>`)
        const div = html.querySelector('#search-movie')
        div.innerHTML = searchList;
    }, (error) => {
        console.log(error);
    });

}



function getMovie(imdbId, html){
    //Find movie
    omdbController.getMovie(imdbId, (omdbResponse) => {
        html.querySelector('[name="movieTitle"]').value = omdbResponse.title;
        html.querySelector('[name="director"]').value = omdbResponse.director;
        html.querySelector('[name="actors"]').value = omdbResponse.actors;
        html.querySelector('[name="prodYear"]').value = omdbResponse.year;
        html.querySelector('[name="rated"]').value = omdbResponse.rated;
        html.querySelector('[name="description"]').value = omdbResponse.description;
        html.querySelector('[name="genres"]').value = omdbResponse.genre;
        html.querySelector('[name="runtime"]').value = omdbResponse.runtime;

    });
}