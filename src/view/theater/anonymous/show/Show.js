import TheaterController from "../../../../controller/TheaterController.js";
import { loadAndRender } from '../../../../util/Render.js';

// Create a theater controller
const theaterController = new TheaterController();

/**
 * Theater anonymous show.
 *  
 * @returns {undefined}
 */
export default function TheaterAnonymousShow(id) {
    // Load and render the theater admin show template
    loadAndRender('src/view/theater/anonymous/show/template.html', (html) => {
        // Get theater HTML element wrapper
        const theaterWrapper = html.querySelector('#wrapper');

        // Find theater
        theaterController.find(id, (theaterResponse) => {
            // Create a new div element
            const element = document.createElement('div');
            // Set the inner HTML of the div element to the JSON string of the theater
            element.innerHTML = JSON.stringify(theaterResponse);
            // Append the div element to the theater HTML element wrapper
            theaterWrapper.appendChild(element);
        }, (error) => {
            console.log(error);
        });
    });
}