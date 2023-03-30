import ShowController from "../../../../controller/ShowController.js";
import { loadAndRender } from '../../../../util/Render.js';
import { hasAnyRole } from "../../../../util/Authenticated.js";
import Link from "../../../../components/Link.js"
// Create a show controller
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

            html.querySelector('#movie-title').innerHTML = showResponse.movieTitle;

            if (showResponse.poster) {
                html.querySelector('#movie-image').src = showResponse.poster;
            }
            
        }, (error) => {
            console.log(error);
        });

        if (hasAnyRole(['MEMBER', 'ADMIN'])) {
        
            const a = Link({
                type: 'primary',
                text: 'Reserve show',
                href: `#/member/reservations/${id}/create`,
                animation: {
                    onclick: {
                        type: 'rubberBand',
                        duration: 800
                    }
                }
            })
  
            html.querySelector("#reserve-show").appendChild(a)
        }
    })
}