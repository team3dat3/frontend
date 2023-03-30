import ShowController from "../../../../controller/ShowController.js";
import MovieController from "../../../../controller/MovieController.js";
import { loadAndRender } from '../../../../util/Render.js';
import { hasAnyRole } from "../../../../util/Authenticated.js";
import Button from "../../../../components/Button.js"

const movieController = new MovieController();
const showController = new ShowController();

/**
 * Show anonymous show.
 *  
 * @returns {undefined}
 */
export default function ShowAnonymousShow(id) {
    // Load and render the show show template
    loadAndRender('src/view/show/anonymous/show/template.html', (html) => {

        // Get show HTML element wrapper
        const showWrapper = html.querySelector('#wrapper');

        showController.find(id, (showResponse) => {

            html.querySelector('#movie-title').innerHTML = `${showResponse.movieTitle} - Theater ${showResponse.theaterName}`;

            movieController.find(showResponse.movieTitle, (movieResponse) => {
                html.querySelector('#movie-description').innerHTML = movieResponse.description;
            }, (error) => {
                console.log(error);
            });

            if (showResponse.poster) {
                html.querySelector('#movie-image').src = showResponse.poster;
            }
            
        }, (error) => {
            console.log(error);
        });

        if (hasAnyRole(['MEMBER', 'ADMIN'])) {
        
            const b = Button({
                type: 'primary',
                text: 'Reserve show',
                animation: {
                    onclick: {
                        type: 'rubberBand',
                        duration: 800
                    }
                }
            })

            b.onclick = () => {
                window.router.navigate(`/member/reservations/${id}/create`);
            }

            html.querySelector("#reserve-show").appendChild(b)
        }
    })
}