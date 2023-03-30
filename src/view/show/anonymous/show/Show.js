import ShowController from "../../../../controller/ShowController.js";
import { loadAndRender } from '../../../../util/Render.js';
import { hasAnyRole } from "../../../../util/Authenticated.js";

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
            
        }, (error) => {
            console.log(error);
        });

        if (hasAnyRole(['MEMBER', 'ADMIN'])) {
            // Insert the form allowing the user to reserve the show including seats and datetime
        }
    })
}