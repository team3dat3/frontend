import ShowController from "../../../../controller/ShowController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a show controller
const showController = new ShowController();

/**
 * Show index.
 *  
 * @returns {undefined}
 */
export default function ShowIndex() {
    // Load and render the show index template
    loadAndRender('src/view/show/anonymous/index/template.html', (html) => {
        // Get show HTML element wrapper
        const showWrapper = html.querySelector('#wrapper');

        // Find all shows
        showController.findAll((showResponses) => {
            // Loop through all show responses
            showResponses.forEach(show => {
                // Create a new div element
                const element = document.createElement('div');
                // Set the inner HTML of the div element to the JSON string of the movie
                element.innerHTML = JSON.stringify(show);
                // Append the div element to the movie HTML element wrapper
                showWrapper.appendChild(element);
            });
        }, (error) => {
            console.log(error);
        });
    });
}